const Joi = require("joi");
const express = require("express");
const app = express();
const companions = require("./Companions");

app.use(express.json());

app.get(`/`, (req, res) => {
  res.send("hello world");
});

//list of companions
app.get("/api/companions", (req, res) => {
  res.send(companions);
});

// add a companion
app.post("/api/companions", (req, res) => {
  const { error } = validateCompanion(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const companion = {
    id: companions.length + 1,
    name: req.body.name
  };
  companions.push(companion);
  res.send(companions);
});

//update a companion
app.put("/api/companions/:id", (req, res) => {
  const companion = companions.find(c => c.id === parseInt(req.params.id));
  if (!companion) return res.status(400).send("No companion with the given id");

  const { error } = validateCompanion(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  companion.name = req.body.name;
  res.send(companions);
});

//delete a companion
app.delete("/api/companions/:id", (req, res) => {
  //does the companion exist
  const companion = companions.find(c => c.id === parseInt(req.params.id));
  if (!companion) return res.status(400).send("No companion with the given id");

  //delete
  const index = companions.indexOf(companion);
  companions.splice(index, 1);

  //return companions
  res.send(companions);
});

function validateCompanion(companion) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(companion, schema);
}

// /api/companions
app.get("/api/companions/:id", (req, res) => {
  const companion = companions.find(c => c.id === parseInt(req.params.id));
  if (!companion) res.status(404).send(`The companion with id was not found`);
  res.send(companion);
});

//Port
const port = process.env.port || 3000;
app.listen(3000, () => console.log(`listening on port ${port}...`));
