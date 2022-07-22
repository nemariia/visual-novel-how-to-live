import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toHaveTextContent(/как жить/i);
});
