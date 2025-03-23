const fs = require("fs");
const path = require("path");

const { renderData } = require("../utils/dataRenderer");
const { getData, editData } = require("./dataController");

function getAllCars(request, response) {
  const cardTemplate = fs.readFileSync(
    path.join(__dirname, "../templates/carCardTemplate.html"),
    "utf-8"
  );
  const pageTemplate = fs.readFileSync(
    path.join(__dirname, "../templates/templPage.html"),
    "utf-8"
  );

  const data = getData();

  let renderedData = "";

  data
    .map((el) => {
      renderedData += renderData(el, cardTemplate);
    })
    .join(``);

  const html = pageTemplate.replace("{{content}}", renderedData);

  response.end(html);
}

function addCrime(request, response) {
  let dataFromClient = "";
  request.on("data", (chunk) => {
    dataFromClient += chunk;
  });

  request.on("end", () => {
    if (!dataFromClient.length) {
      response.writeHead(400, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.end("Bad Request");
    }

    let data = getData();

    const object = JSON.parse(dataFromClient);

    data
      .map((el) => {
        if (el.number.includes(object.num)) {
          el.crimes++;
          el.crimes += "";
        }
      })
      .join("");

    editData(data);
  });
  response.end(`число нарушений увеличено.
    чтобы увидель изменения, нажмите кнопку "Все машины"`);
}

function addCar(request, response) {
  let dataFromClient = "";
  request.on("data", (chunk) => {
    dataFromClient += chunk;
  });

  request.on("end", () => {
    if (!dataFromClient.length) {
      response.writeHead(400, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.end("Bad Request");
    }

    let data = getData();
    const object = JSON.parse(dataFromClient);
    data.push(object);

    editData(data);
  });

  response.end(`база обновлена.
    чтобы увидель изменения, нажмите кнопку "Все машины"`);
}

function delCar(request, response) {
  let dataFromClient = "";
  request.on("data", (chunk) => {
    dataFromClient += chunk;
  });

  request.on("end", () => {
    if (!dataFromClient.length) {
      response.writeHead(400, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.end("Bad Request");
    }

    let data = getData();
    const object = JSON.parse(dataFromClient);

    const newData = data.filter((el) => !el.number.includes(object.num));

    editData(newData);

    response.end(`авто с таким номером больше нет в базе
    чтобы увидель изменения, нажмите кнопку "Все машины"`);
  });
}

function findCar(request, response, parsedURL) {
  const cardTemplate = fs.readFileSync(
    path.join(__dirname, "../templates/carCardTemplate.html"),
    "utf-8"
  );
  const pageTemplate = fs.readFileSync(
    path.join(__dirname, "../templates/templPage.html"),
    "utf-8"
  );

  const query = parsedURL.query;

  let data = getData();

  const newData = data.filter(
    (el) =>
      el.mark.includes(query.mark) &&
      el.number.includes(query.number) &&
      el.color.includes(query.color) &&
      el.weight.includes(query.weight) &&
      el.year.includes(query.year) &&
      el.engineType.includes(query.engineType) &&
      el.crimes.includes(query.crimes) &&
      el.fines.includes(query.fines)
  );

  let renderedData = "";

  newData
    .map((el) => {
      renderedData += renderData(el, cardTemplate);
    })
    .join(``);

  const html = pageTemplate.replace("{{content}}", renderedData);

  response.end(html);
}

async function changeColor(request, response) {
  let dataFromClient = "";
  request.on("data", (chunk) => {
    dataFromClient += chunk;
  });

  request.on("end", () => {
    if (!dataFromClient.length) {
      response.writeHead(400, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.end("Bad Request");
    }

    let data = getData();

    const object = JSON.parse(dataFromClient);

    data
      .map((el) => {
        if (el.number.includes(object.num)) {
          el.color = object.col;
        }
      })
      .join("");

    editData(data);
    response.end(`цвет изменен.
    чтобы увидель изменения, нажмите кнопку "Все машины"`);
  });
}

module.exports = {
  getAllCars,
  addCrime,
  addCar,
  delCar,
  findCar,
  changeColor,
};
