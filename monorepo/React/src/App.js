import React, { useState } from 'react';
import Header from './componets/Header';
import Body from './componets/Body';
import Footer from './componets/Footer';


const App = () => {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Anti Wrinkle Treatment', 'Dermal Fillers', 'Sercret RF', 'HArmonyCA', 'Profhilo', 'FAcials', 'Sclerotherapy', 'Led'];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setStep(2);
  };

  const handleBack = () => {
    setSelectedOption('');
    setStep(1);
  };

  return (
    <div className='Container'>
      <Header step={step} />
      <Body
        step={step}
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
        onBack={handleBack}
      />
      <Footer />
    </div>
  );
};

export default App;
