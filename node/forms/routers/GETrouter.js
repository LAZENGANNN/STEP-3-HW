const url = require("url");
const {filesController: filesController} = require("../controllers/filesController.js");
const { getAllUsers } = require("../controllers/usersController.js");

function GETrouter(request, response) {
  const parsedURL = url.parse(request.url, true);
  console.log(parsedURL.pathname);
  switch (parsedURL.pathname) {
    case "/":
      response.writeHead(302, {
        Location: "/HTML.html",
      });
      response.end();
      break;

    case "/users/getAll":
        getAllUsers(request, response);
        break;
    default:
      filesController(request, response, parsedURL);
  }
}

module.exports = {
  GETrouter,
};