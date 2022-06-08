import React from 'react';
import '../App.css';
import CalculatorComponent from '../components/Calculator';

const Calculator = () => (
  <div className="calculator-page">
    <h2>Let&#8217;s do some math!</h2>
    <div className="calculator-component"><CalculatorComponent /></div>
  </div>
);

export default Calculator;
