import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Calculator from '../Calculator';

afterEach(() => {
  cleanup();
});

test('test when first press 0', () => {
  const { getByTestId } = render(<Calculator />);
  const result = getByTestId('result');
  const zero = getByTestId('no-zero');

  fireEvent.click(zero);

  expect(result.textContent).toBe('0');
});

test('When you add 7 and 8, expect result to be 15', () => {
  const { getByTestId } = render(<Calculator />);
  const result = getByTestId('result');
  const seven = getByTestId('no-seven');
  const add = getByTestId('plus');
  const eight = getByTestId('no-eight');
  const equal = getByTestId('equal');

  fireEvent.click(seven);
  fireEvent.click(add);
  fireEvent.click(eight);
  fireEvent.click(equal);

  expect(result.textContent).toBe('15');
});

test('When you minus 6-4 result should be 2', () => {
  const { getByTestId } = render(<Calculator />);
  const result = getByTestId('result');
  const six = getByTestId('no-six');
  const minus = getByTestId('minus');
  const four = getByTestId('no-four');
  const equal = getByTestId('equal');

  fireEvent.click(six);
  fireEvent.click(minus);
  fireEvent.click(four);
  fireEvent.click(equal);

  expect(result.textContent).toBe('2');
});
