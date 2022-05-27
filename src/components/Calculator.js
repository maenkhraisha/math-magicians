import React from 'react';
import '../App.css';
import oprate from './operate';

export default class myComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: '',
      secondNumber: '',
      operation: '',
      result: '0',
    };
    this.CalculatorHandler = this.CalculatorHandler.bind(this);
    this.AcHandler = this.AcHandler.bind(this);
    this.ResultHandler = this.ResultHandler.bind(this);
  }

  CalculatorHandler(value) {
    const {
      firstNumber, operation,
    } = this.state;

    if ((value === '+' || value === '-' || value === '×' || value === '÷' || value === '%')
              && firstNumber !== '') {
      this.setState(() => ({ operation: value }), () => {
        this.setState((prevState) => ({ result: prevState.firstNumber + prevState.operation }),
          () => { });
      });
    } else if (operation === '') {
      this.setState((prevState) => ({ firstNumber: prevState.firstNumber + value }), () => {
        this.setState((prevState) => ({ result: prevState.firstNumber }), () => {
        });
      });
    } else if (operation !== '' && firstNumber !== '') {
      this.setState((prevState) => ({ secondNumber: prevState.secondNumber + value }), () => {
        this.setState((prevState) => (
          { result: prevState.firstNumber + prevState.operation + prevState.secondNumber }),
        () => { });
      });
    }
  }

  AcHandler() {
    this.setState(
      {
        firstNumber: '', secondNumber: '', operation: '', result: '0',
      },
    );
  }

  ResultHandler() {
    const res = oprate.readEqual(this.state);
    this.setState(() => ({ result: res }), () => {
    });

    this.setState(
      {
        firstNumber: '', secondNumber: '', operation: '',
      },
    );
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calc-container">
        <div className="calc-buttons">
          <div className="cell calc-result">{result}</div>
          <button type="button" className="button calc-ac" onClick={this.AcHandler}>
            <div className="cell">AC</div>
          </button>
          <button type="button" className="button calc-plus-minus" onClick={() => this.CalculatorHandler('+-')}>
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
          <button type="button" className="button calc-multiply" onClick={() => this.CalculatorHandler('×')}>
            <div className="cell">×</div>
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
          <button type="button" className="button calc-equal" onClick={this.ResultHandler}>
            <div className="cell">=</div>
          </button>
        </div>
      </div>
    );
  }
}
