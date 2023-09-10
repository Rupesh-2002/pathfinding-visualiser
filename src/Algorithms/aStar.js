const heuristic = (position0, position1) => {
  let d1 = Math.abs(position1.row - position0.row);
  let d2 = Math.abs(position1.col - position0.col);
  return d1 + d2;
};

const getNeighbours = (node, grid) => {
  // console.log(node)
  let cols = grid[0].length;
  let rows = grid.length;
  let i = node.row;
  let j = node.col;
  let neighbors = [];
  if (i < rows - 1 && !grid[i + 1][j].isWall) {
    neighbors.push(grid[i + 1][j]);
  }
  if (i > 0 && !grid[i - 1][j].isWall) {
    neighbors.push(grid[i - 1][j]);
  }
  if (j < cols - 1 && !grid[i][j + 1].isWall) {
    neighbors.push(grid[i][j + 1]);
  }
  if (j > 0 && !grid[i][j - 1].isWall) {
    neighbors.push(grid[i][j - 1]);
  }
  return neighbors;
};

const aStar = (startNode, endNode, grid) => {
  let openSet = [];
  let closedSet = [];
  openSet.push(startNode);
  while (openSet.length > 0) {
    let lowestIndex = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[lowestIndex].f) {
        lowestIndex = i;
      }
    }
    let current = openSet[lowestIndex];

    if (current === endNode) {
      return closedSet;
    }

    openSet.splice(lowestIndex, 1);

    closedSet.push(current);

    let neighbors = getNeighbours(current, grid);

    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];

      if (!closedSet.includes(neighbor)) {
        let possibleG = current.g + 1;

        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        } else if (possibleG >= neighbor.g) {
          continue;
        }

        neighbor.g = possibleG;
        neighbor.h = heuristic(neighbor, endNode);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.prevNode = current;
      }
    }
  }

  //no solution by default
  return [];
};

export default aStar;