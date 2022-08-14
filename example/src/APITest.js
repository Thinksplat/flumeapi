import React from "react";
import {
    NodeEditor,
    FlumeConfig,
    Colors
} from "node-editor";

const flumeConfig = new FlumeConfig();
flumeConfig
  .addPortType({
    type: "number",
    name: "number",
    label: "Number",
    color: Colors.red,
  })
  .addNodeType({
    type: "number",
    label: "Number",
    description: "Outputs a number",
    initialWidth: 150,
    inputs: ports => [ports.number()],
    outputs: ports => [ports.number()]
  })

function Graph({title}) {
    const [nodes, setNodes] = React.useState({

    });

 
    return (
        <div style={{ width: 400, height: 400, margin: 5 }}>
            <NodeEditor 
            portTypes={flumeConfig.portTypes}
            nodeTypes={flumeConfig.nodeTypes}
            nodes={nodes}
            onChange={setNodes}
            defaultNodes={[
                {
                  type: "number",
                  x: 0,
                  y: 0
                }
              ]}/>
        </div>)
}

export default function APITest() {
   return (<div style={{
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
   }}>
    <Graph title="one"/>
    <Graph title="two"/>
    <Graph title="three"/>
    <Graph title="four"/>
    <Graph title="five"/>
    <Graph title="six"/>
    <Graph title="seven"/>
   </div>)
}