import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should render header', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should render DashboardPage by default', () => {
    render(<App />);
    expect(screen.getByTestId('dashboardPage')).toBeInTheDocument();
  });
});
