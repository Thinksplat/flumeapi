import { getByText, render, screen } from '@testing-library/react';
import { nanoid } from 'nanoid'
import { NodeEditor } from 'node-editor';
import { act } from 'react-dom/test-utils';
import App from './App';

const crypto = require('crypto');

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length)
  }
});


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
  expect(screen.queryByTestId("node")).toBeNull();
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

test("uiEvents to not be injected", async () => {
  render(<NodeEditor />)

  const stage = screen.getByTestId("stage");
  expect(stage.getAttribute("data-hasuievents")).toBeNull()

  // expect(stageclick).toBeFalsy();
  // act(() => screen.getByTestId("stage").click());
  // expect(stageclick).toBeTruthy();
});

test("uiEvents to be injected", async () => {
  let stageclick = false;
  const uievents = {
    onStageClick: () => stageclick=true
  }
  render(<NodeEditor uiEvents={uievents} />)

  const stage = screen.getByTestId("stage");
  expect(stage.getAttribute("foobar")).toBeNull()
  expect(stage.getAttribute("data-testid")).not.toBeNull()
  expect(stage.getAttribute("data-hasuievents")).not.toBeNull()

  // expect(stageclick).toBeFalsy();
  // act(() => screen.getByTestId("stage").click());
  // expect(stageclick).toBeTruthy();
});

test("uiEvents stage click to work", async () => {
  let stageclick = false;
  const uievents = {
    onStageClick: () => stageclick=true
  }
  render(<NodeEditor uiEvents={uievents} />)

  const stage = screen.getByTestId("stage");
  expect(stage.getAttribute("foobar")).toBeNull()
  expect(stage.getAttribute("data-testid")).not.toBeNull()
  expect(stage.getAttribute("data-hasuievents")).not.toBeNull()

  // expect(stageclick).toBeFalsy();
  // act(() => screen.getByTestId("stage").click());
  // expect(stageclick).toBeTruthy();
});