import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import StockStat from './stockStats';


describe('StockStat', () => {
  it('renders label and value correctly', () => {
    render(<StockStat label="Market Cap" value="₹17,89,234 Cr" />);

    expect(screen.getByText('Market Cap')).toBeInTheDocument();
    expect(screen.getByText('₹17,89,234 Cr')).toBeInTheDocument();
  });
});