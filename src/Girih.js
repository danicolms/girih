import Tile from "./Tile";

// If you change this value, remember to
// change the width of the tile in the style.css.
// accordingly.
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
