// Selectores: https://testing-library.com/docs/react-testing-library/api
// Tests: https://github.com/testing-library/jest-dom
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(<App />);
  const parrafo = container.querySelector("p")
  expect(parrafo.innerHTML).toBe("...");
});
