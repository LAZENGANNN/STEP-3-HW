const url = require("url");
const { delCar } = require("../controllers/carsController");


function DELETErouter(request, response) {
  const parsedURL = url.parse(request.url, true);
  switch (parsedURL.pathname) {
    case "/api/delCar":
      delCar(request, response);
      break;

    default:
      response.end("<h1>ошибка адреса POST запроса</h1>");
      break;
  }
}

module.exports = {
  DELETErouter,
};
