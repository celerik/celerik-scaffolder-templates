import { render, screen } from '@testing-library/react';
import {{component-name}} from '.';

test('Render {{component-name}} Component', () => {
  render(<{{component-name}} />);
  const element = screen.getByText(/{{component-name}}/i);
  expect(element).toBeInTheDocument();
});
