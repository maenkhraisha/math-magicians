import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import operate from '../logic/operate';

describe('Test the Oprate function', () => {
    test('5 + 3 to be 8', () => {
      expect(operate(5, 3, '+')).toEqual('8');
    });
    test('15 - 7 to be 8', () => {
        expect(operate(15, 7, '-')).toEqual('8');
      });
});