import React from 'react'
import InputBox from './components/InputBox/InputBox';
import ResultsTab from './components/ResultsTab/ResultsTab';
import CalculatorProvider from './store/CalculatorProvider';

function App() {
  return (
    <CalculatorProvider>
      <ResultsTab />
      <InputBox />
    </CalculatorProvider>
  );
}

export default App;
