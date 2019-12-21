import api from "@/services/api";

export default {
  register(credentials) {
    return api().post("register", credentials);
  }
};

// authenticationService.register({
//   email: "rosen_mihaylov@abv.bg",
//   password: "rosen"
// });
