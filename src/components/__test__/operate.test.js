import '@testing-library/jest-dom/extend-expect';

import operate from '../logic/operate';

describe('Test the Oprate function', () => {
  test('5 + 3 to be 8', () => {
    expect(operate(5, 3, '+')).toEqual('8');
  });
  test('15 - 7 to be 8', () => {
    expect(operate(15, 7, '-')).toEqual('8');
  });
  test('16 ÷ 2 to be 5', () => {
    expect(operate(16, 2, '÷')).toEqual('8');
  });
  test('2 x 4 to be 8', () => {
    expect(operate(2, 4, 'x')).toEqual('8');
  });
  test('15 % 4 to be 3', () => {
    expect(operate(15, 4, '%')).toEqual('3');
  });
});
