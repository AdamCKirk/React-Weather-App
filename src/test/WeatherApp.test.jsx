import { render, screen } from '@testing-library/react';
import WeatherApp from '../layout/WeatherApp.jsx';

test('renders learn react link', () => {
  render(<WeatherApp />);
  const linkElement = screen.getByElement('h1');
  console.log(linkElement)
  expect(linkElement).toBe('Notes - Update');
});
