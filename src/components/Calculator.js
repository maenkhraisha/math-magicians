import React, { useState } from 'react';
import '../App.css';
import calc from './logic/calculate';

const calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const CalculatorHandler = (buttonName) => {
    const { total: newTotal, next: newNext, operation: newOperation } = calc(
      { total, next, operation },
      buttonName,
    );

    setTotal(newTotal);
    setNext(newNext);
    setOperation(newOperation);
  };

  return (
    <div className="calc-container">
      <div className="calc-buttons">
        <div className="cell calc-result">
          {total}
          {operation}
          {next}
        </div>
        <button type="button" className="button calc-ac" onClick={() => CalculatorHandler('AC')}>
          <div className="cell">AC</div>
        </button>
        <button type="button" className="button calc-plus-minus" onClick={() => CalculatorHandler('+/-')}>
          <div className="cell">+/-</div>
        </button>
        <button type="button" className="button calc-mode" onClick={() => CalculatorHandler('%')}>
          <div className="cell">%</div>
        </button>
        <button type="button" className="button calc-division" onClick={() => CalculatorHandler('÷')}>
          <div className="cell ">÷</div>
        </button>
        <button type="button" className="button calc-seven" onClick={() => CalculatorHandler('7')}>
          <div className="cell">7</div>
        </button>
        <button type="button" className="button calc-eight" onClick={() => CalculatorHandler('8')}>
          <div className="cell">8</div>
        </button>
        <button type="button" className="button calc-nine" onClick={() => CalculatorHandler('9')}>
          <div className="cell">9</div>
        </button>
        <button type="button" className="button calc-multiply" onClick={() => CalculatorHandler('x')}>
          <div className="cell">x</div>
        </button>
        <button type="button" className="button calc-four" onClick={() => CalculatorHandler('4')}>
          <div className="cell">4</div>
        </button>
        <button type="button" className="button calc-five" onClick={() => CalculatorHandler('5')}>
          <div className="cell">5</div>
        </button>
        <button type="button" className="button calc-six" onClick={() => CalculatorHandler('6')}>
          <div className="cell">6</div>
        </button>
        <button type="button" className="button calc-minus" onClick={() => CalculatorHandler('-')}>
          <div className="cell">-</div>
        </button>
        <button type="button" className="button calc-one" onClick={() => CalculatorHandler('1')}>
          <div className="cell">1</div>
        </button>
        <button type="button" className="button calc-two" onClick={() => CalculatorHandler('2')}>
          <div className="cell">2</div>
        </button>
        <button type="button" className="button calc-three" onClick={() => CalculatorHandler('3')}>
          <div className="cell">3</div>
        </button>
        <button type="button" className="button calc-plus" onClick={() => CalculatorHandler('+')}>
          <div className="cell">+</div>
        </button>
        <button type="button" className="button calc-zero" onClick={() => CalculatorHandler('0')}>
          <div className="cell">0</div>
        </button>
        <button type="button" className="button calc-dot" onClick={() => CalculatorHandler('.')}>
          <div className="cell">.</div>
        </button>
        <button type="button" className="button calc-equal" onClick={() => CalculatorHandler('=')}>
          <div className="cell">=</div>
        </button>
      </div>
    </div>
  );
};

export default calculator;
