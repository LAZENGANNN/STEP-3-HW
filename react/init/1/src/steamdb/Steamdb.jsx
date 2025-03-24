import React from "react";
import styles from "./sdb.module.css";

import { useState } from "react";

function Steamdb() {
  function randomint() {
    return Math.floor(Math.random() * (99999 - 1111 + 1)) + 1111;
  }

  const [game] = useState("CS2");
  const [players] = useState(randomint());
  const [h24] = useState(randomint()*999);


  return (
    <div class={styles.cont}>
      <div>
        <p>Most played -{">"}</p>
        <p>{game}</p>
      </div>
      <div>
        <p>Players</p>
        <p style={{ color: " green" }} >{players}</p>
      </div>
      <div>
        <p>24h peak</p>
        <p>{h24}</p>
      </div>
    </div>
  );
}

export default Steamdb;
