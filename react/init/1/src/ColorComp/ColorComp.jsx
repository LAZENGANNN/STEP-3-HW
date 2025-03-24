import React from "react";

function ColorComp(props) {
  const { type } = props;
  console.log(type, props);

  function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  function randColor(type) {
    let res = "";
    switch (type) {
      case "HEX":
        const string = "0123456789ABCDEF";
        for (let i = 0; i <= 5; i++) {
          res += string.charAt(getRandomInt(0, string.length - 1));
        }
        return `#${res}`;

      case "RGB":
        return `rgb(${getRandomInt(0, 255)},${getRandomInt(
          0,
          255
        )},${getRandomInt(0, 255)})`;

      case "RGBA":
        return `rgba(${getRandomInt(0, 255)},${getRandomInt(
          0,
          55
        )},${getRandomInt(0, 255)},${Math.random()})`;

      default:
        return `errrr`;
    }
  }

  const color = randColor(type);

  return (
    <div>
      <div
        style={{ backgroundColor: `${color}`, width: "300px", height: "200px" }}
      ></div>
      <input type="text" value={color} />
    </div>
  );
}

export default ColorComp;
