import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div>
      <div className="global">
        <div className="answer-span">
          <span>0</span>
        </div>
        <div className="box-one">
          <button type="button" className="btn delete number">
            AC
          </button>
          <button type="button" className="btn  number number">
            +/-
          </button>
          <button type="button" className="btn clear number">
            %
          </button>
          <button type="button" className="btn  equal-to operator">
            ÷
          </button>
        </div>
        <div className="box-two">
          <button type="button" className="btn number">
            7
          </button>
          <button type="button" className="btn number">
            8
          </button>
          <button type="button" className="btn number">
            9
          </button>
          <button type="button" className="btn number operator">
            *
          </button>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default Calculator;
