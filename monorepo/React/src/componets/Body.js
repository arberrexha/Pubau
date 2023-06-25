import React from 'react';
import './Body.css';

const Body = ({ step, options, selectedOption, onOptionSelect, onBack }) => {
  return (
    <div className="body">
      {step === 1 && (
        <ul className="options-list">
          {options.map((option, index) => (
            <li key={index} className="option-item">
              <button className="option-button" onClick={() => onOptionSelect(option)}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
      {step === 2 && (
        <div className="selected-option">
          <h2>Selected Option: {selectedOption}</h2>
          <button className="back-button" onClick={onBack}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default Body;
