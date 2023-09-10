import { dijkshtra } from "../Algorithms/dijkshtra";

import React from 'react'

export default function AnimateDijkshtra({setGrid, grid}) {
   
    const animateDijkshtra = (visitedNodeInOrder, shortestPath) => {
        for (let i = 0; i <= visitedNodeInOrder.length; i++) {
          if (i === visitedNodeInOrder.length) {
            setTimeout(() => {
              animateShortestPath(shortestPath);
            }, 12 * i);
            return;
          }
          setTimeout(() => {
            let node = visitedNodeInOrder[i];
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
      function findShortestPath(endNode) {
        let shortestPath = [];
        let currNode = endNode;
        while (currNode.prevNode !== null) {
          shortestPath.unshift(currNode);
          currNode = currNode.prevNode;
        }
        return shortestPath;
      }
      const visualiseDijkshtra = () => {
        const startNode = grid[8][15];
        const endNode = grid[12][34];
        const visitedNodeInOrder = dijkshtra(grid, startNode, endNode);
        const shortestPath = findShortestPath(endNode);
        animateDijkshtra(visitedNodeInOrder, shortestPath);
      };
      visualiseDijkshtra();
  return (
    <>
      
    </>
  )
}

