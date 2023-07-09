import { useEffect, useState } from "react";
import Shape from "./Shape";

const isEven = (i) => i % 2 === 0;

const Tile = ({ inverted }) => (
  <Shape className={inverted ? "tile is-inverted" : "tile"} />
);

const Row = ({ children, inverted }) => (
  <div className={inverted ? "row is-row-inverted" : "row"}>{children}</div>
);

const setRatioCSSVariables = (ratio) => {
  document.documentElement.style.setProperty("--ratio", ratio + "%");
};

const generateTiles = (ratio) => {
  const tiles = [];
  for (let i = 0; i < 100 / ratio; i++) {
    tiles.push(<Tile key={i} inverted={!isEven(i)} />);
  }
  return tiles;
};

const generateRows = (ratio) => {
  const rows = [];
  for (let i = 0; i < 100 / ratio; i++) {
    rows.push(
      <Row key={i} inverted={!isEven(i)}>
        {generateTiles(ratio)}
      </Row>
    );
  }
  return rows;
};

function App() {
  const [ratio, setRatio] = useState(2);
  const [width, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    const windowWidth = window.innerWidth;
    setWindowWidth(windowWidth);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (width < 700) {
      setRatio(7);
    } else if (width >= 700 && width < 1200) {
      setRatio(5);
    } else {
      setRatio(2);
    }
  }, [width]);

  useEffect(() => {
    setRatioCSSVariables(ratio);
  }, [ratio]);

  return <div>{generateRows(ratio)}</div>;
}

export default App;
