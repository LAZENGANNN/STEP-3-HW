import React from "react";
import s from "./ad.module.css";

function Ad({name, imgLink, price, roomsCount, liveSquare, floor, type }) {
  return (
    <div className={s.cont} >
      <div className={s.c2}>
        <img src={imgLink} alt="" />
      </div>
      <div className={s.c2}>
        <div>заголовок: {name}</div>
        <div>цена: {price}$</div>
        <div>комнат: {roomsCount}</div>
        <div>
          жилплощадь: {liveSquare} / этажей: {floor}
        </div>
        <div>тип: {type}</div>
      </div>
    </div>
  );
}

export default Ad;
