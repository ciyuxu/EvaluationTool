const feathers = require("feathers/client");
const rest = require("feathers-rest/client");
const superagent = require("superagent");
const hooks = require("feathers-hooks");
const auth = require("feathers-authentication-client");

const user = {
  email: "a@b.com",
  password: "abcd1234"
};

const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest("http://localhost:3030").superagent(superagent))
  .configure(auth());

feathersClient
  .service("users")
  .create(user)
  .then(() => {
    feathersClient.authenticate({
      strategy: "local",
      email: user.email,
      password: user.password
    });
  })
  .catch(function(error) {
    console.error("Error creating user!", error);
  });
