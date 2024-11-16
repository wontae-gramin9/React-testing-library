import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// CRA locally provides JEST on default

// 1. Test name
// 2. Test function
// 3. Timeout(5s), how long to wait before aborting the test
test('renders learn react link', () => {
  render(<App />); // render App to actual DOM by render()
  const linkElement = screen.getByText(/learn react/i); // screen(=DOM).queryDom()
  expect(linkElement).toBeInTheDocument();
});