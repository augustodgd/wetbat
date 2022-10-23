import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DashboardPage from './DashboardPage.';

describe('<DashboardPage />', () => {
  it('should render QuoteForm', () => {
    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('quoteForm')).toBeInTheDocument();
  });

  it('should render Quotes heading', () => {
    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: 'Quotes' })).toBeInTheDocument();
  });

  it('should render QuoteTable', () => {
    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('quoteTable')).toBeInTheDocument();
  });
});
