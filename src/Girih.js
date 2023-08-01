import { useEffect, useState } from "react";

import Tile from "./Tile";

const RATIO = 2;

function Girih() {
  return (
    <>
      {Array.from({ length: 100 / RATIO }).map((_, i) => (
        <div key={i} className={i % 2 === 0 ? "row" : "row is-row-inverted"}>
          {Array.from({ length: 100 / RATIO }).map((_, i) => (
            <Tile
              key={i}
              className={i % 2 === 0 ? "tile" : "tile is-inverted"}
            />
          ))}
        </div>
      ))}
    </>
  );
}

export default Girih;
