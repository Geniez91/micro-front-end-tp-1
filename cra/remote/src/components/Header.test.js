import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders MyComponent with the element having id "monElement"', () => {
  const { getByTestId } = render(<Header />);

  const monElement = getByTestId('monElement');

  expect(monElement).toBeInTheDocument();
});