import tile from "./assets/tile.svg";


const RATIO = 2

const getTile = () => <img src={tile} className="tile" />;
const getInvertedTile = () => <img src={tile} className="tile is-inverted" />;

const getRow = (children) => <div className="row">{children()}</div>;
const getInvertedRow = (children) => <div className="row is-row-inverted">{children()}</div>;

const setRatioCSSVariables = (RATIO) => {
  let root = document.querySelector(':root');
root.style.setProperty('--ratio', RATIO + "%");
}

const generateXAxis = () => {
  let tiles = [];
  for (let i = 0; i < 100 / RATIO; i++) {
    if (i % 2 === 0) {
      tiles.push(getTile());
      continue;
    }
    tiles.push(getInvertedTile());
  }
  return tiles;
};

const generateYAxis = () => {
  let rows = [];
  for (let i = 0; i < 100 / RATIO; i++) {
    if (i % 2 === 0) {
      rows.push(getRow(generateXAxis));
      continue;
    }
    rows.push(getInvertedRow(generateXAxis));
  }
  return rows;
};

function App() {
  setRatioCSSVariables(RATIO);
  return <div> {generateYAxis()}</div>;
}

export default App;
