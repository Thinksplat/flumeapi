import { queryByTestId, render, screen } from '@testing-library/react';
import { NodeEditor } from 'node-editor';
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