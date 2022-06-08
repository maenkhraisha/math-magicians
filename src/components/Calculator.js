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

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calc-container">
        <div className="calc-buttons">
          <div className="calc-result">
            {total}
            {operation}
            {next}
          </div>
          <button type="button" className="button calc-ac" onClick={() => this.CalculatorHandler('AC')}>
            <div className="cell">AC</div>
          </button>
          <button type="button" className="button calc-plus-minus" onClick={() => this.CalculatorHandler('+/-')}>
            <div className="cell">+/-</div>
          </button>
          <button type="button" className="button calc-mode" onClick={() => this.CalculatorHandler('%')}>
            <div className="cell">%</div>
          </button>
          <button type="button" className="button calc-division" onClick={() => this.CalculatorHandler('÷')}>
            <div className="cell ">÷</div>
          </button>
          <button type="button" className="button calc-seven" onClick={() => this.CalculatorHandler('7')}>
            <div className="cell">7</div>
          </button>
          <button type="button" className="button calc-eight" onClick={() => this.CalculatorHandler('8')}>
            <div className="cell">8</div>
          </button>
          <button type="button" className="button calc-nine" onClick={() => this.CalculatorHandler('9')}>
            <div className="cell">9</div>
          </button>
          <button type="button" className="button calc-multiply" onClick={() => this.CalculatorHandler('x')}>
            <div className="cell">x</div>
          </button>
          <button type="button" className="button calc-four" onClick={() => this.CalculatorHandler('4')}>
            <div className="cell">4</div>
          </button>
          <button type="button" className="button calc-five" onClick={() => this.CalculatorHandler('5')}>
            <div className="cell">5</div>
          </button>
          <button type="button" className="button calc-six" onClick={() => this.CalculatorHandler('6')}>
            <div className="cell">6</div>
          </button>
          <button type="button" className="button calc-minus" onClick={() => this.CalculatorHandler('-')}>
            <div className="cell">-</div>
          </button>
          <button type="button" className="button calc-one" onClick={() => this.CalculatorHandler('1')}>
            <div className="cell">1</div>
          </button>
          <button type="button" className="button calc-two" onClick={() => this.CalculatorHandler('2')}>
            <div className="cell">2</div>
          </button>
          <button type="button" className="button calc-three" onClick={() => this.CalculatorHandler('3')}>
            <div className="cell">3</div>
          </button>
          <button type="button" className="button calc-plus" onClick={() => this.CalculatorHandler('+')}>
            <div className="cell">+</div>
          </button>
          <button type="button" className="button calc-zero" onClick={() => this.CalculatorHandler('0')}>
            <div className="cell">0</div>
          </button>
          <button type="button" className="button calc-dot" onClick={() => this.CalculatorHandler('.')}>
            <div className="cell">.</div>
          </button>
          <button type="button" className="button calc-equal" onClick={() => this.CalculatorHandler('=')}>
            <div className="cell">=</div>
          </button>
      </div>
    </div>
  );
};

export default calculator;
