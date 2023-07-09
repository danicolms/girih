import { useEffect, useState } from "react";
import tile from "./assets/tile.svg";

const getTile = () => <img src={tile} className="tile" />;
const getInvertedTile = () => <img src={tile} className="tile is-inverted" />;

const getRow = (children) => <div className="row">{children}</div>;
const getInvertedRow = (children) => (
  <div className="row is-row-inverted">{children}</div>
);

const setRatioCSSVariables = (ratio) => {
  let root = document.querySelector(":root");
  root.style.setProperty("--ratio", ratio + "%");
};

const generateXAxis = (ratio) => {
  let tiles = [];
  for (let i = 0; i < 100 / ratio; i++) {
    if (i % 2 === 0) {
      tiles.push(getTile());
      continue;
    }
    tiles.push(getInvertedTile());
  }
  return tiles;
};

const generateYAxis = (ratio) => {
  let rows = [];
  for (let i = 0; i < 100 / ratio; i++) {
    if (i % 2 === 0) {
      rows.push(getRow(generateXAxis(ratio)));
      continue;
    }
    rows.push(getInvertedRow(generateXAxis(ratio)));
  }
  return rows;
};

function App() {
  const [ratio, setRatio] = useState(2);
  const [width, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  useEffect(() => { 
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => 
      window.removeEventListener("resize",updateDimensions);
   }, [])

   useEffect(() => {
    if(width < 700){
      setRatio(6)
      return
    }

    if(width >= 700 && width < 1200){
      setRatio(4)
      return
    }

    setRatio(2)
   }, [width])

  useEffect(() => {
    setRatioCSSVariables(ratio);
  }, [ratio]);

  return <div> {generateYAxis(ratio)}</div>;
}

export default App;
