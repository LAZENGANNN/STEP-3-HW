import { React, useState, useEffect } from "react";
import Ad from "../ad/ad";
import { EstateClass } from "../../estateClass";
import style from "./AdBlock.module.css";

function AdBlock() {
  const [data, setData] = useState([]);
  const [avgRooms, setAvgR] = useState(0);

  const [cheapest, setCh] = useState({ price: 1000000000 });
  const [isCheapest, setIsCh] = useState(false);

  const [expencive, setExpencive] = useState({ price: 0 });
  const [isExpencive, setisExpencive] = useState(false);

  const linksArr = [
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvCkSHiY8OFHlRe5J7YKKfOR07u4UV0tZMA&s`,
    `https://www.baufritz.com/01_Haeuser/Kundenh%C3%A4user/2019/Richter/Bilder/247/image-thumb__247__hero/-8585855483413193058.cde65288.jpg`,
  ];
  const typesArr = [`house`, `apartment`, `room`];

  function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }
  const getRandomSymbols = (count) => {
    const string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 1; i <= count; i++) {
      result += string.charAt(getRandomInt(0, string.length));
    }
    return result;
  };

  function createRandom() {
    return new EstateClass(
      getRandomSymbols(10),
      linksArr[getRandomInt(0, 1)],
      getRandomInt(10000, 999999),
      getRandomInt(1, 4),
      getRandomInt(50, 170),
      getRandomInt(0, 9),
      typesArr[getRandomInt(0, 2)]
    );
  }

  function addToArr(el) {
    console.log(el);
    setData((data) => [...data, el]);
  }

  const init = () => {
    let newData = [];

    for (let i = 1; i <= getRandomInt(10, 20); i++) {
      newData.push(createRandom());
    }

    setData((data) => (data = []));
    setisExpencive((isCheapest) => (isCheapest = false));
    setIsCh((isCheapest) => (isCheapest = false));

    newData.forEach((el) => {
      addToArr(el);
    });
  };

  useEffect(() => {
    init();
  }, []);

  let sum = 0;
  data.map((el) => {
    sum += el.price;
    return el;
  });
  const avg = Math.floor(sum / data.length);

  const onRoomsInputChange = (e) => {
    const rCount = e.target.value;
    let sum = 0;
    let counter = 0;
    data.map((el) => {
      if (el.roomsCount == rCount) {
        console.log(sum, el.price);
        sum += el.price;
        counter++;
      }
      return el;
    });

    setAvgR((a) => Math.floor((a = sum / counter)));
  };

  function showCheapest() {
    let fllted = data.toSorted((a, b) => a.price - b.price);

    setIsCh((isCheapest) => (isCheapest = true));

    setCh((cheapest) => (cheapest = fllted[0]));
  }

  const applySort = (event) => {
    console.log(event.target.value);
    switch (event.target.value) {
      case "price":
        setData((data) => (data = data.toSorted((a, b) => a.price - b.price)));
        break;
      case "square":
        setData(
          (data) =>
            (data = data.toSorted((a, b) => a.liveSquare - b.liveSquare))
        );
        break;
      case "rooms":
        setData(
          (data) =>
            (data = data.toSorted((a, b) => a.roomsCount - b.roomsCount))
        );
        break;
    }
  };

  function applySearch(event) {
    const str = event.target.value;
    console.log(str);
    setData((data) => (data = data.filter((el) => el.name.includes(str))));
  }

  function showexpencive() {
    let fllted = data.toSorted((a, b) => b.price - a.price);

    setisExpencive((isCheapest) => (isCheapest = true));

    setExpencive((cheapest) => (cheapest = fllted[0]));
  }

  return (
    <>
      <div className={style.cont2}>
        <div className={style.c2}>
          сортировка по характеристикам
          <button value="price" onClick={(event) => applySort(event)}>
            цена
          </button>
          <button value="square" onClick={(event) => applySort(event)}>
            площадь
          </button>
          <button value="rooms" onClick={(event) => applySort(event)}>
            кол-во комнат
          </button>
        </div>
        <div className={style.c2}>
          поиск по заголовку
          <input type="text" onChange={(event) => applySearch(event)} />
        </div>
      </div>

      <div className="head">
        <div>
          <input
            type="number"
            placeholder="введите кол-во комнат"
            onChange={(event) => onRoomsInputChange(event)}
          />
          <p style={{ border: "1px solid black", width: " 200px" }}>
            {avgRooms}
          </p>
        </div>
        <div>
          <p className="b">кол-во обьявлений</p>
          <p className={style.most}>{data.length}</p>
        </div>
        <div>
          <p className="b">средняя цена всех</p>
          <p className={style.most}>{avg}</p>
        </div>
      </div>

      <div
        className="cont"
        style={{ border: "dotted 3px red", margin: "50px;", padding: "50px;" }}
      >
        <div>
          <button onClick={() => showCheapest()}>самый дешевый</button>
          самый дешевый
          {isCheapest && <Ad {...cheapest}></Ad>}
        </div>
        <div>
          <button onClick={() => showexpencive()}>самый дорогой</button>
          самый дорогой
          {isExpencive && <Ad {...expencive}></Ad>}
        </div>
      </div>

      <button onClick={() => init()}>перерандомить</button>

      <div className={style.cont}>
        {data.map((el, index) => (
          <Ad key={`${getRandomSymbols(10)}`} {...el}></Ad>
        ))}
      </div>
    </>
  );
}

export default AdBlock;
