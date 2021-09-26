import { render } from '@testing-library/react';
import WeatherApp from '../layout/WeatherApp.jsx';

test('should render title', () => {
  render(<WeatherApp />);
  const linkElement = document.getElementById('title');
  expect(linkElement).toBeTruthy();
});
