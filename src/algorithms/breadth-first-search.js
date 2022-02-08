import Graph from "../data-structures/graph";
import Queue from "../data-structures/queue";

function BFS(graph, startValue) {
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
  const queue = new Queue();
  queue.enqueue(startNode);
  while (!queue.isEmpty()) {
    let currentNode = queue.dequeue();
    if (!visitedNodesHash[currentNode.value]) {
      visitedNodesHash[currentNode.value] = true;
    }

    currentNode.edges.forEach(node => {
      if (!visitedNodesHash[node.value]) {
        queue.enqueue(node);
      }
    });
  }
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

BFS(graph, "a");
/*
  a =>
  c =>
  f =>
  d =>
  b => 
  e =>
*/
