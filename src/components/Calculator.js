import React from 'react';
import '../App.css';

export default class myComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <div className="calc-buttons">
          <div className="cell calc-result">0</div>
          <div className="cell calc-ac">AC</div>
          <div className="cell calc-plus-minus">+/-</div>
          <div className="cell calc-mode">%</div>
          <div className="cell calc-division">÷</div>
          <div className="cell calc-seven">7</div>
          <div className="cell calc-eight">8</div>
          <div className="cell calc-nine">9</div>
          <div className="cell calc-multiply">×</div>
          <div className="cell calc-four">4</div>
          <div className="cell calc-five">5</div>
          <div className="cell calc-six">6</div>
          <div className="cell calc-minus">-</div>
          <div className="cell calc-one">1</div>
          <div className="cell calc-two">2</div>
          <div className="cell calc-three">3</div>
          <div className="cell calc-plus">+</div>
          <div className="cell calc-zero">0</div>
          <div className="cell calc-dot">.</div>
          <div className="cell calc-equal">=</div>
        </div>
      </div>

    );
  }
}
