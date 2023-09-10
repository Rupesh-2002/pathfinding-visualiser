import NavBar from "./NavBar";
import Grid from "./Grid";
import React, { useState } from "react";

const PathVisualiser = () => {
  const [disableAlgoRunButton, setDisableAlgoRunButton] = useState(false);
  const [grid, setGrid] = useState([]);
  const [runAlgo, setRunAlgo] = useState(false);
  const [algo, setAlgo] = useState("aStar");

  const resetGrid = () => {
    let newGrid = [];
    for (let i = 0; i < 20; i++) {
      let array = [];
      for (let j = 0; j < 45; j++) {
        let node = createNode(i, j);
        array.push(node);
      }
      newGrid.push(array);
    }
    setGrid(newGrid);
    setDisableAlgoRunButton(false);
  };
  return (
    <>
      <NavBar
        setRunAlgo={setRunAlgo}
        disableAlgoRunButton={disableAlgoRunButton}
        resetGrid={resetGrid}
        setDisableAlgoRunButton={setDisableAlgoRunButton}
        setAlgo={setAlgo}
      />
      <Grid
        resetGrid={resetGrid}
        grid={grid}
        runAlgo={runAlgo}
        algo={algo}
        setGrid={setGrid}
        setAlgo={setAlgo}
        setRunAlgo={setRunAlgo}
      />
    </>
  );
}
const createNode = (row, col) => {
    let node = {
      row: row,
      col: col,
      isStart: row === 8 && col === 15,
      isFinish: row === 12 && col === 34,
      distance: Infinity,
      isVisited: false,
      animate: false,
      prevNode: null,
      inShort: false,
      isWall: false,
      f: 0,
      g: 0,
      h: 0,
    };
    return node;
  };
export default PathVisualiser;
