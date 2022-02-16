import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App running', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IP Address Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
