export const dijkshtra = (grid, startNode, endNode)=>{
    const visitedNodesInOrder = [];
    startNode.distance = 0;
    let unVisitedNodes = getAllNodes(grid);
    
    while(unVisitedNodes.length > 0){
        sortNodesByDistance(unVisitedNodes);
        const currNode = unVisitedNodes.shift();
        if(currNode === endNode){
             return visitedNodesInOrder;
        } 
        if(currNode !== startNode)
        visitedNodesInOrder.push(currNode);
        currNode.isVisited = true;
        updateUnVisitedNeighbours(currNode, grid);
    }
    return visitedNodesInOrder;
}
const updateUnVisitedNeighbours = (currNode, grid)=>{
    let unVisitedNeighbours = [];
    const row = currNode.row;
    const col = currNode.col;
    if(row+1 < grid.length) unVisitedNeighbours.push(grid[row+1][col]);
    if(row-1>=0) unVisitedNeighbours.push(grid[row-1][col]);
    if(col+1 < grid[0].length) unVisitedNeighbours.push(grid[row][col+1]);
    if(col-1>=0) unVisitedNeighbours.push(grid[row][col-1]);
    unVisitedNeighbours = unVisitedNeighbours.filter((node)=> {
         return !node.isVisited}
    );
    
    for(const node of unVisitedNeighbours){
        node.prevNode = currNode;
        node.distance = currNode.distance+1;
    }
} 

const sortNodesByDistance = (unVisitedNodes)=>{
    unVisitedNodes.sort((node1, node2)=> node1.distance - node2.distance);
}
const getAllNodes = (grid)=>{
    let nodes = []
    for(const row of grid){
        for(const node of row){
            if(!node.isWall)
              nodes.push(node);
        }

    }
    return nodes;
}