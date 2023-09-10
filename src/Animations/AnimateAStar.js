import React from "react";
import aStar from "../Algorithms/aStar";
const AnimateAStar = ({ grid, setGrid }) => {
  const animateAStar = (visitedNodesInOrder, shortestPath) => {
    let n = visitedNodesInOrder.length;
    for (let i = 0; i <= n; i++) {
      if (i === n) {
        setTimeout(() => {
          animateShortestPath(shortestPath);
        }, 12 * i);
        break;
      }
      setTimeout(() => {
        let { row, col } = visitedNodesInOrder[i];
        let newNode = { ...grid[row][col], animate: true };
        let newGrid = grid.slice();
        newGrid[row][col] = newNode;
        setGrid(newGrid);
      }, 10 * i);
    }
  };

  const animateShortestPath = (shortestPath) => {
    for (let i = 0; i < shortestPath.length; i++) {
      //   if (i == shortestPath.length - 1) onAnimationComplete();
      setTimeout(() => {
        let node = shortestPath[i];
        const { row, col } = node;
        node = { ...grid[row][col], inShort: true };
        let newGrid = grid.slice();
        newGrid[row][col] = node;
        setGrid(newGrid);
      }, 12 * i);
    }
  };
  const findShortestPath = (node) => {
    let shortestPath = [];
    let currNode = node;

    while (currNode.prevNode !== null) {
      shortestPath.unshift(currNode);
      currNode = currNode.prevNode;
    }
    return shortestPath;
  };
  const visualise = () => {
    let startNode = grid[8][15];
    let endNode = grid[12][34];
    let visitedNodesInOrder = aStar(startNode, endNode, grid);
    let shortestPath = findShortestPath(endNode);
    animateAStar(visitedNodesInOrder, shortestPath);
  };
  visualise();
  return <></>;
};

export default AnimateAStar;
