import React, { useEffect, useState } from "react";
import Node from "./Node";
import "./Grid.css";
import AnimateDijkshtra from "../Animations/AnimateDijkshtra";
import AnimateBfs from "../Animations/AnimateBfs";
import AnimateAStar from "../Animations/AnimateAStar";

export default function Grid(props) {
  const { grid, runAlgo, algo, resetGrid, setGrid, setRunAlgo } = props;
  const [mouseIsPressed, setMousePressed] = useState(false);
  const [wall, setWall] = useState([]);

  const algorithm = {
    dijkshtra: <AnimateDijkshtra setGrid={setGrid} grid={grid} />,
    bfs: <AnimateBfs setGrid={setGrid} grid={grid} />,
    aStar: <AnimateAStar grid={grid} setGrid={setGrid} />,
  };
  useEffect(() => {
    resetGrid();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    updateGridWithWall(grid, wall);
    // eslint-disable-next-line
  }, [wall]);

  useEffect(() => {
    if (runAlgo) {
      setRunAlgo(false);
    }
    // eslint-disable-next-line
  }, [runAlgo]);

  const updateGridWithWall = (grid, wall) => {
    if (grid.length === 0) return;
    let newGrid = grid.slice();

    let row = wall[0];
    let col = wall[1];
    let node = grid[row][col];
    let newNode = { ...node, isWall: !node.isWall };
    newGrid[row][col] = newNode;

    setGrid(newGrid);
  };

  return (
    <>
      <div className="grid-container">
        {grid.map((row, rowId) => (
          <div key={rowId} className="grid-row">
            {row.map((node, nodeId) => {
              return (
                <Node
                  key={nodeId}
                  node={node}
                  setWall={setWall}
                  mouseIsPressed={mouseIsPressed}
                  setMousePressed={setMousePressed}
                />
              );
            })}
          </div>
        ))}
      </div>

      {runAlgo ? algorithm[algo] : <></>}
    </>
  );
}
