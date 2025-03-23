const url = require("url");
const { addCrime, changeColor } = require("../controllers/carsController");

function PUTrouter(request, response) {
  const parsedURL = url.parse(request.url, true);
  switch (parsedURL.pathname) {
    case "/api/addCrime":
      addCrime(request, response);
      break;

    case "/api/changeColor":
      changeColor(request, response)
      break;

    default:
      response.end("<h1>ошибка PUT запроса</h1>");
      break;
  }
}

module.exports = {
  PUTrouter,
};
