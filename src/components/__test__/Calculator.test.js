import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Calculator from "../Calculator";

test("test when first press 0", () => {
    const {getByTestId } = render(<Calculator />);
    const result = getByTestId('result');
    const zero = getByTestId('no-zero');

    fireEvent.click(zero);

    expect(result.textContent).toBe('0');
});

// test("test when first press 5", () => {
//     const {getByTestId } = render(<Calculator />);
//     const result = getByTestId('result');

//     expect(result.textContent).toBe('5');
// });