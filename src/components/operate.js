function readEqual(state) {
  if (state.firstNumber === ''
    || state.secondNumber === ''
    || state.operation === '') {
    return 0;
  }

  if (state.operation === '+') {
    return Number(state.firstNumber) + Number(state.secondNumber);
  } if (state.operation === '-') {
    return Number(state.firstNumber) - Number(state.secondNumber);
  } if (state.operation === '×') {
    return Number(state.firstNumber) * Number(state.secondNumber);
  } if (state.operation === '÷') {
    return Number(state.firstNumber) / Number(state.secondNumber);
  } if (state.operation === '%') {
    return Number(state.firstNumber) % Number(state.secondNumber);
  }
  return 0;
}

export default { readEqual };
