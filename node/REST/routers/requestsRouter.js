const { DELETErouter } = require("./DELETErouter.js");
const { GETrouter: GETrouter } = require("./GETrouter.js");
const { POSTrouter: POSTrouter } = require("./POSTrouter.js");
const { PUTrouter } = require("./PUTrouter.js");

function mainRouter(request, response) {
  switch (request.method) {
    case "GET":
      GETrouter(request, response);
      break;

    case "POST":
      POSTrouter(request, response);
      break;

    case "PUT":
      PUTrouter(request, response);
      break;

    case "DELETE":
      DELETErouter(request, response);
      break;
  }
}

module.exports = {
  mainRouter,
};
