import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Panel,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";

const initialEdges = [{ id: "1-2", source: "1", target: "2" }];
const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" }, type: "input" },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];

export function YLens() {
  const [data, setData] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    setData(json);
    // return console.log(json);
  }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  //   console.log("data", data);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Panel position="top-right">xlox</Panel>
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
