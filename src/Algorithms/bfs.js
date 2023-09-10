const visitNeighbours= (grid, node, unVisitedNeighbours)=>{
    const row = node.row, col = node.col;

    if(row-1 >= 0  && !grid[row-1][col].isVisited && !grid[row-1][col].isWall ){
      grid[row-1][col].isVisited = true;
      grid[row-1][col].prevNode = node;
      unVisitedNeighbours.push(grid[row-1][col]);
    } 
      
    if(row+1 < grid.length && !grid[row+1][col].isVisited && !grid[row+1][col].isWall)
    {
      grid[row+1][col].isVisited = true;
      grid[row+1][col].prevNode = node;
      unVisitedNeighbours.push(grid[row+1][col]);
    } 

    if(col+1 < grid[0].length && !grid[row][col+1].isVisited && !grid[row][col+1].isWall){
      grid[row][col+1].isVisited = true;
      grid[row][col+1].prevNode = node;
      unVisitedNeighbours.push(grid[row][col+1]);
    }
    if(col-1 >= 0 && !grid[row][col-1].isVisited && !grid[row][col-1].isWall)
    {
      grid[row][col-1].isVisited = true;
      grid[row][col-1].prevNode = node;
      unVisitedNeighbours.push(grid[row][col-1]);
    } 

}

export const bfs = (grid, startNode, endNode)=>{
  
    let unVisitedNeighbours = [], visitedNodesInOrder = [];
    unVisitedNeighbours.push(startNode);
    grid[startNode.row][startNode.col].isVisited = true;

    while(unVisitedNeighbours.length !== 0){
      let currNode = unVisitedNeighbours.shift();
      
      if(currNode === endNode) break;

      visitNeighbours(grid, currNode, unVisitedNeighbours);
      visitedNodesInOrder.push(currNode);
    }
    return visitedNodesInOrder;
}