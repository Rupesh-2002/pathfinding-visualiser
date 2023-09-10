import React, { useState, memo } from "react";
import "./Node.css";
function Node(props) {
  const { isStart, isFinish, animate, inShort, isWall, row, col } = props.node;
  // const {onMouseEnter, onMouseDown, onMouseUp} = props;
  const { setWall, mouseIsPressed, setMousePressed } = props;
  const extraClass = getExtraClass(isFinish, isStart, animate, inShort, isWall);

  const handleMouseDown = (row, col) => {
    // console.log(row, col)
    // console.log(getGridWithWalls)
    setWall([row, col]);
    setMousePressed(true);
  };

  const handleMouseUp = () => {
    setMousePressed(false);
  };
  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;

    setWall([row, col]);
  };
  return (
    <div
      className={`node ${extraClass}`}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseUp={() => handleMouseUp(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
    ></div>
  );
}
export default memo(Node);
// export default Node;

const getExtraClass = (isFinish, isStart, animate, inShort, isWall) => {
  if (isFinish) return "is-finish";
  else if (isStart) return "is-start";
  else if (isWall) return "node-wall";
  else if (inShort) return "node-short";
  else if (animate) return "node-visited";
  else return "";
};
