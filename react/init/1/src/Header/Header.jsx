import React, { useState } from "react";

function Header() {
  const [textData] = useState([
    `статьи`,
    `посты`,
    `новости`,
    `хабы`,
    `авторы`,
    `компани`,
  ]);
  const [counters, setCounters] = useState([31, 7, 32, 61, 12, 43, 65]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        border: "1px solid black",
      }}
    >
      <div>
        <span style={{ color: "#4471cf" }}>{textData[0]}</span>
        <span>+{counters[0]}</span>
      </div>
      <div>
        <span style={{ color: "#4471cf" }}>{textData[1]}</span>
        <span>+{counters[1]}</span>
      </div>
      <div>
        <span style={{ color: "#4471cf" }}>{textData[2]}</span>
        <span>+{counters[2]}</span>
      </div>
      <div>
        <span style={{ color: "#4471cf" }}>{textData[3]}</span>
        <span>+{counters[3]}</span>
      </div>
      <div>
        <span style={{ color: "#4471cf" }}>{textData[4]}</span>
        <span>+{counters[4]}</span>
      </div>
      <div>
        <span style={{ color: "#4471cf" }}>{textData[5]}</span>
        <span>+{counters[5]}</span>
      </div>
    </div>
  );
}

export default Header;
