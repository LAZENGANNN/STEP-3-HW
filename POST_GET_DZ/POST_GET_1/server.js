// реализуйте клиентскую и серверную часть обработчиков, описанных
// выше для выполнения банальных математических подсчётов .
// со стороны клиента должен быть визуальный интерфейс с
// вводом/ выбором операции (== —
// / * и иные, интересные вам), а
// также вводом двух операндов, над которьпшл будут выполняться
// действия .
// После ввода, пользователь должен нажать на кнопку для отправки
// примера на сервер и подсчёта его. сервер должен вернуть ответ.

const http = require("http");
const { mainRouter: router } = require("./routers/requestsRouter.js");

const server = http.createServer(router);

const port = 7777;
server.listen(port, function () {
  console.log(`start http://127.0.0.1:${port}`);
});
