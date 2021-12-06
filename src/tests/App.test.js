import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders the app', () => {
  render(<App />);
  const myElement = screen.getByText(/hello aj/i);
  expect(myElement).toBeInTheDocument();
});
