import React, { useCallback } from "react";
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
    color: Colors.orange,
  })
  .addNodeType({
    type: "number",
    label: "Number",
    description: "Outputs a number",
    initialWidth: 150,
    inputs: ports => [ports.number()],
    outputs: ports => [ports.number()]
  })

function Graph({ title, innodes }) {

  innodes = innodes || [
    {
      type: "number",
      id: "1",
      x: 10,
      y: 10
    }
  ]

  return (
    <div style={{ width: 400, height: 400, margin: 5 }}>
      <NodeEditor
        portTypes={flumeConfig.portTypes}
        nodeTypes={flumeConfig.nodeTypes}

        defaultNodes={innodes} />
    </div>)
}

function APIGraph() {
  var apiref = React.useRef();

  const apiCallback = useCallback(api => {
    apiref.current = api;

    api.addNode({
      // nodeType: "number",
      nodeType: {
        type: "custom",
        label: "Custom Number",
        description: "Customer Description",
        inputs: [
          {
            type: "znumber",
            name: "number",
            label: "Custom Input Number Port",
            color: 'green'
          }
        ],
        outputs: [
          {
            type: "znumber",
            name: "number",
            label: "Custom output foobar Port",
            color: 'blue'
          }
        ],
        initialWidth: 100
      },
      inputData: true,
      id: "1",
      x: 10,
      y: 10
    })
  }, [])

  const uiEvents = {
    stageClicked: () => {
      console.log("onStageClick");
    },
    nodeMoved: (id,x,y) => {
      console.log("onNodeMoved", id,x,y);
    }
  }


  return (
    <div style={{ width: 400, height: 400, margin: 5 }}>
      <NodeEditor
        uiEvents={uiEvents}
        apiCallback={apiCallback} />
    </div>
  )
}

export default function APITest() {
  return (
    <div>
      <h1>API Test</h1>
      <div style={{
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Graph title="one" />
        <Graph innodes={[{
          type: "number",
          id: "1",
          x: -100,
          y: -100
        },
        {
          type: "number",
          id: "2",
          x: 10,
          y: 10
        }]} title="two" />
        <APIGraph title="three" />
        <Graph title="four" />
        <Graph title="five" />
      <Graph title="six" />
        <Graph title="seven" />
      </div>
    </div>)
}