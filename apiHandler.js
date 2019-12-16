const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const companions = [
  {
    id: 1,
    name: `Aragorn`
  },
  {
    id: 2,
    name: `Legolas`
  },
  {
    id: 3,
    name: `Gandalf`
  }
];

app.get(`/`, (req, res) => {
  res.send("hello world");
});

app.get("/api/companions", (req, res) => {
  res.send(companions);
});

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
  if (!companion) return res.status(400).send("no");

  const { error } = validateCompanion(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  companion.name = req.body.name;
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
