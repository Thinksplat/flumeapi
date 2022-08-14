import { fireEvent, getByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { nanoid } from 'nanoid'
import { FlumeConfig, NodeEditor } from 'node-editor';
import { act } from 'react-dom/test-utils';
import App from './App';

const crypto = require('crypto');

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length)
  }
});

const expectNoNodes = () => expect(screen.queryByTestId("node")).toBeNull();

test('Has an API Test title', () => {
  render(<App />);
  const linkElement = screen.getByText(/API Test/i);
  expect(linkElement).toBeInTheDocument();
  // Expect it to be an h1
  expect(linkElement.tagName).toBe('H1');
});

test("Empty Node Editor Has No Nodes", () => {
  render(<NodeEditor />)
  const noeditor = screen.getByTestId("stage");
  expect(noeditor).toBeInTheDocument();
  expectNoNodes();
});

test("apiCallback should be called if provided", () => {
  let api = null;
  const apiCallback = (a) => {
    api = a;
  }

  expect(api).toBeNull();

  render(<NodeEditor apiCallback={apiCallback} />)

  expect(api).toBeTruthy();

});

const createAPI = () => {
  let api = null;

  render(<NodeEditor apiCallback={a => api = a} />)
  return api;
}

const sampleType = {
  type: "custom",
  label: "Custom Number",
  description: "Customer Description",
  inputs: [
    {
      name: "number",
      label: "Custom Input Number Port",
      color: 'green'
    }
  ],
  outputs: [
    {
      name: "number",
      label: "Custom output foobar Port",
      color: 'blue'
    }
  ],
  initialWidth: 100
}

const NewNode = name => ({
  nodeType: { ...sampleType, label: name },
  inputData: true,
  id: nanoid(),
  x: 10,
  y: 10
})

test("api can create a new node", async () => {
  const api = createAPI();
  expect(api).toBeTruthy();

  const newnode = NewNode("Custom Node")

  act(() => api.addNode(newnode));

  const numbernode = screen.getByText("Custom Node").closest("[data-testid='node']");
  expect(numbernode).toBeInTheDocument();

  const port = getByText(numbernode, "Custom Input Number Port");
  expect(port).toBeInTheDocument();

  const outport = getByText(numbernode, "Custom output foobar Port");
  expect(outport).toBeInTheDocument();
});

test("api can create a Two Differnt nodes", async () => {
  const api = createAPI();
  expect(api).toBeTruthy();

  await act(() => api.addNode(NewNode("Custom Node")).addNode(NewNode("Custom Node 2")));

  expect(screen.getByText("Custom Node")).toBeInTheDocument();
  expect(screen.getByText("Custom Node 2")).toBeInTheDocument();

});

test("api can remove nodes nodes", async () => {
  const api = createAPI();
  let node = NewNode("ToRemove");

  // no nodes
  expectNoNodes();
  act(() => api.addNode(node));

  expect(screen.getByText("ToRemove")).toBeInTheDocument();

  act(() => api.removeNode(node.id));
  expectNoNodes();
});

test("uiEvents to not be injected", async () => {
  render(<NodeEditor />)

  const stage = screen.getByTestId("stage");
  expect(stage.getAttribute("data-hasstageclick")).toBe('false')

  // expect(stageclick).toBeFalsy();
  // act(() => screen.getByTestId("stage").click());
  // expect(stageclick).toBeTruthy();
});

test("uiEvents to be injected", async () => {
  let stageclick = false;
  const uievents = {
    onStageClick: () => stageclick = true
  }
  render(<NodeEditor uiEvents={uievents} />)

  const stage = screen.getByTestId("stage");
  expect(stage.getAttribute("foobar")).toBeNull()
  expect(stage.getAttribute("data-testid")).not.toBeNull()
  expect(stage.getAttribute("data-hasstageclick")).toBe('true')

  // expect(stageclick).toBeFalsy();
  // act(() => screen.getByTestId("stage").click());
  // expect(stageclick).toBeTruthy();
});

test("clicky things work", async () => {
  let clicked = false;
  const onClick = () => clicked = true;
  const user = userEvent.setup();
  render(<button onClick={onClick}>Click Me</button>)
  await user.click(screen.getByRole('button'));
  expect(clicked).toBe(true);
});

test("uiEvents stage click to work", async () => {
  let stageclick = false;
  const uievents = {
    onStageClick: () => stageclick = true
  }
  const user = userEvent.setup();
  render(<NodeEditor uiEvents={uievents} />)

  const stage = screen.getByTestId("stage");
  expect(stage.getAttribute("data-hasstageclick")).toBe('true')

  expect(stageclick).toBe(false);

  await user.click(stage);

  expect(stageclick).toBe(true);
});

test("uiEvents context menu create node", async () => {
  const user = userEvent.setup();

  const flumeConfig = new FlumeConfig();
  flumeConfig.addNodeType({
    type: "number",
    label: "Number",
    description: "Outputs a number",
    initialWidth: 150,
  })

  render(<NodeEditor nodeTypes={flumeConfig.nodeTypes} />)

  const stage = screen.getByTestId("stage");
  expect(stage).toBeInTheDocument()

  expectNoNodes();

  fireEvent.contextMenu(stage)

  expect(screen.getByText("Add Node")).toBeInTheDocument();

  // no nodes
  expect(screen.queryByTestId("node")).toBeNull();

  await user.click(screen.getByText("Outputs a number"));

  // Context menu went away
  expect(screen.queryByText("Add Node")).toBeNull();

  // Node
  expect(screen.getByTestId("node")).toBeInTheDocument();
});


test("uiEvents context menu asks node to be created when uiEvents is set", async () => {
  let request = null;
  const uievents = {
    addNodeRequest: (type, x, y) => request = { type, x, y }
  }
  const user = userEvent.setup();

  const flumeConfig = new FlumeConfig();
  flumeConfig.addNodeType({
    type: "number",
    label: "Number",
    description: "Outputs a number",
    initialWidth: 150,
  })

  render(<NodeEditor nodeTypes={flumeConfig.nodeTypes} uiEvents={uievents} />)

  const stage = screen.getByTestId("stage");

  // no nodes
  expectNoNodes();

  fireEvent.contextMenu(stage)
  await user.click(screen.getByText("Outputs a number"));

  // Context menu went aweay
  expect(screen.queryByText("Add Node")).toBeNull();
  // Still no nodes created
  expectNoNodes();

  expect(request).toBeTruthy();
  expect(request.type).toBe("number");
});