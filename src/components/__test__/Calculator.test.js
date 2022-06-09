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

test('When you multi 12 * 11 result should be 132', () => {
  const { getByTestId } = render(<Calculator />);
  const result = getByTestId('result');
  const one = getByTestId('no-one');
  const two = getByTestId('no-two');
  const multi = getByTestId('multi');
  const equal = getByTestId('equal');

  fireEvent.click(one);
  fireEvent.click(two);
  fireEvent.click(multi);
  fireEvent.click(one);
  fireEvent.click(one);
  fireEvent.click(equal);

  expect(result.textContent).toBe('132');
});

test('When you multi 50 / 5 result should be 10', () => {
  const { getByTestId } = render(<Calculator />);
  const result = getByTestId('result');
  const five = getByTestId('no-five');
  const zero = getByTestId('no-zero');
  const division = getByTestId('division');
  const equal = getByTestId('equal');

  fireEvent.click(five);
  fireEvent.click(zero);
  fireEvent.click(division);
  fireEvent.click(five);
  fireEvent.click(equal);

  expect(result.textContent).toBe('10');
});



test('When you add -18 + 8 result should be 10', () => {
  const { getByTestId } = render(<Calculator />);
  const result = getByTestId('result');
  const one = getByTestId('no-one');
  const eight = getByTestId('no-eight');
  const plus = getByTestId('plus');
  const plusMinus = getByTestId('plus-minus')
  const equal = getByTestId('equal');

  
  fireEvent.click(one);
  fireEvent.click(eight);
  fireEvent.click(plusMinus);
  fireEvent.click(plus);  
  fireEvent.click(eight); 
  fireEvent.click(equal);

  expect(result.textContent).toBe('-10');
});