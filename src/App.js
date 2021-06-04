import './App.css';
import Form from './components/Form'
import {useState} from 'react'
import {matchFormula, matchUnitType} from './helpers/helperFunctions'

function App() {

  // STATE hold state of input and select 
  const [inputUnit, setInputUnit] = useState({
    isLoaded: false,
    selected: ''
  })

  const [inputValue, setInputValue] = useState({
    isLoaded: false,
    value: 0
  })

  const [targetUnit, setTargetUnit] = useState({
    isLoaded: false,
    selected: ''
  })

  const [responseInput, setResponseInput] = useState({
    isLoaded: false,
    value: ''
  })

  // INPUT AND DROPDOWN HANDLERS handel input changes witin state
  const handleInputUnitSelect = (event) => {
    setInputUnit({selected: event.target.value, isLoaded: true});
    matchUnitType(inputUnit)
  }

  const handleNumericalValueInput= (event) => {
    setInputValue({value: event.target.value, isLoaded: true});
  }

  const handleTargetUnitSelect = (event) => {
    setTargetUnit({ selected: event.target.value, isLoaded: true});
    matchFormula(inputUnit, targetUnit)
  }

  const handleStudentResponseInput = (event) => {
    setResponseInput({ value: event.target.value, isLoaded: true});
  }

  const handleCheckResponseButton = (event) => {
    // setResponseInput({ value: event.target.value, isLoaded: true});
    console.log('I am clicked', event)
  }
  //

  
  return (
    <div className="App">
      <header>
        Unit Conversion Response Checker
      </header>
      <Form 
        inputUnit={inputUnit} 
        targetUnit={targetUnit} 
        inputValue={inputValue} 
        responseInput={responseInput}
        handleInputUnitSelect={handleInputUnitSelect}
        handleNumericalValueInput={handleNumericalValueInput}
        handleTargetUnitSelect={handleTargetUnitSelect}
        handleStudentResponseInput={handleStudentResponseInput}
        handleCheckResponseButton={handleCheckResponseButton}
      />
    </div>
  );
}

export default App;
