import { useEffect, useState } from "react";
import Shape from "./Shape";

const isEven = (i) => i % 2 === 0;

const setRatioCSSVariables = (ratio) => {
  document.documentElement.style.setProperty("--ratio", ratio + "%");
};

const generateColumns = (ratio) => {
  const shapes = [];
  for (let i = 0; i < 100 / ratio; i++) {
    shapes.push(
      <Shape className={!isEven(i) ? "tile is-inverted" : "tile"}/>
    )
  }
  return shapes;
};

const generateRows = (ratio) => {
  const rows = [];
  for (let i = 0; i < 100 / ratio; i++) {
    rows.push(
      <div key={i} className={!isEven(i) ? "row is-row-inverted" : "row"}>
        {generateColumns(ratio)}
      </div>
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
