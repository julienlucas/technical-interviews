import Graph from "../data-structures/graph";

function DFS(graph, startValue) {
  let startNode = graph.getNode(startValue);
  let visitedNodesHash = graph.nodes.reduce((accumulator, currentNode) => {
    accumulator[currentNode.value] = false;
    return accumulator;
  }, {});
  /*
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false
    }
  */

  function exporeNode(node) {
    if (visitedNodesHash[node.value]) return;

    console.log(`${node.value} => `);
    visitedNodesHash[node.value] = true;
    node.edges.forEach(edge => exporeNode(edge));
  }

  exporeNode(startNode);
}

const graph = new Graph();

graph.addNode("a");
graph.addNode("b");
graph.addNode("c");
graph.addNode("d");
graph.addNode("e");
graph.addNode("f");

graph.addEdge("a", "c");
graph.addEdge("a", "b");
graph.addEdge("a", "f");
graph.addEdge("b", "d");
graph.addEdge("b", "e");
graph.addEdge("c", "f");
graph.addEdge("d", "e");
graph.addEdge("e", "b");

// DFS(graph, "a");
/*
  a =>
  c =>
  f =>
  b =>
  d => 
  e =>
*/
