async function GETallCars() {
  let response = await fetch("/api/getAll", {
    method: "GET",
  });

  let responseText = await response.text();

  res.innerHTML = responseText;
}

async function GETcar() {
  let sendData = {
    mark: mark1.value,
    number: number1.value,
    color: color1.value,
    weight: weight1.value,
    year: year1.value,
    engineType: engineType1.value,
    crimes: crimes1.value,
    fines: fines1.value,
  };

  window.location = `/car?mark=${sendData.mark}&number=${sendData.number}&color=${sendData.color}&weight=${sendData.weight}&year=${sendData.year}&engineType=${sendData.engineType}&crimes=${sendData.crimes}&fines=${sendData.fines}`;
}

async function sendPOSTjson() {
  let sendData = {
    mark: mark.value,
    number: number.value,
    color: color.value,
    weight: weight.value,
    year: year.value,
    engineType: engineType.value,
    crimes: crimes.value,
    fines: fines.value,
  };

  if (
    sendData.mark &&
    sendData.number &&
    sendData.color &&
    sendData.weight &&
    sendData.year &&
    sendData.engineType &&
    sendData.crimes &&
    sendData.fines
  ) {
    const response = await fetch("/api/addCar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });

    let responseText = await response.text();

    alert(responseText);
  } else {
    alert("заполните все поля");
  }
}

async function sendPUTaddcrime() {
  const num = num1.value;

  let sendData = {
    num,
  };

  if (num) {
    const response = await fetch("/api/addCrime", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });

    let responseText = await response.text();

    alert(responseText);
  } else {
    alert("заполните все поля");
  }
}

async function sendDELETE() {
  const num = num0.value;

  let sendData = {
    num,
  };

  if (num) {
    const response = await fetch("/api/delCar", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });

    let responseText = await response.text();

    alert(responseText);
  } else {
    alert("заполните все поля");
  }
}

async function sendPUTcolor() {
  const num = num2.value;
  const col = colChange.value;

  let sendData = {
    num,
    col,
  };

  if (num && col) {
    const response = await fetch("/api/changeColor", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });

    let responseText = await response.text();

    alert(responseText);
  } else {
    alert("заполните все поля");
  }
}

getButton.addEventListener("click", () => {
  GETallCars();
});

addCrime.addEventListener("click", () => {
  sendPUTaddcrime();
});

createButton.addEventListener("click", () => {
  sendPOSTjson();
});

delButton.addEventListener("click", () => {
  sendDELETE();
});

searchButton.addEventListener("click", () => {
  GETcar();
});

colorButton.addEventListener("click", () => {
  sendPUTcolor();
});
