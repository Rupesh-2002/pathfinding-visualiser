import React, { useEffect } from "react";
import { bfs } from "../Algorithms/bfs.js";

const AnimateBfs = ({ grid, setGrid }) => {
  const animateBfs = (visitedNodesInOrder, shortestPath) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {   
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => { 
          animateShortestPath(shortestPath);
        }, 12 * i);
        return;
      }
      setTimeout(() => {
        let node = visitedNodesInOrder[i];
        const { row, col } = node;
        node = { ...grid[row][col], animate: true };
        let newGrid = grid.slice();
        newGrid[row][col] = node;
        setGrid(newGrid);
      }, 10 * i);
    }
  };

  const animateShortestPath = (shortestPath) => {
    for (let i = 0; i < shortestPath.length; i++) {
      setTimeout(() => {
        let node = shortestPath[i];
        const { row, col } = node;
        node = { ...grid[row][col], inShort: true };
        let newGrid = grid.slice();
        newGrid[row][col] = node;
        setGrid(newGrid);
      }, 10 * i);
    }
  };
  const findShortestPath = (endNode) => {
    let shortestPath = [];
    let currNode = endNode;

    while (currNode.prevNode !== null) {
      shortestPath.unshift(currNode);
      currNode = currNode.prevNode;
    }
    return shortestPath;
  };
  const visualiseBfs = () => {
    const startNode = grid[8][15];
    const endNode = grid[12][34];

    let visitedNodesInOrder = bfs(grid, startNode, endNode);
    const shortestPath = findShortestPath(endNode);
    // visitedNodesInOrder =[]
    animateBfs(visitedNodesInOrder, shortestPath);
  };

  visualiseBfs();
  
  return <></>;
};

export default AnimateBfs;
