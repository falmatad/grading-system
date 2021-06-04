
import {Row, Label, Input, Button} from 'reactstrap'
import {Colxx} from './bootstrap/CustomBootstrap'
import matchedUnits from '../data/unitsWithType'
function Form(props) {
  
  return (
    
    <Row>
        {/* Initial Select Dropdown that renders with the component */}
        <Colxx xxs="2">
            <label>
              Select Input Unit of Measure
            </label>
            <select data-testid="selectInputUnit" value={props.inputUnit.selected} onChange={handleInputUnitSelect}>
              <option data-testid="select-unit" value="selectUnit">Select Unit</option>
              <option data-testid="select-fahrenheit" value="F">Fahrenheit</option>
              <option data-testid="select-kelvin" value="K">Kelvin</option>
              <option data-testid="select-rankine" value="R">Rankine</option>
              <option data-testid="select-rankine" value="C">Celsius</option>
              <option data-testid="select-liter" value="L">Liter</option>
              <option data-testid="select-gallon" value="G">Gallon</option>
              <option data-testid="select-tablespoon" value="T">Tablespoon</option>
              <option data-testid="select-cubic-inched" value="CI">Cubic-Inche</option>
              <option data-testid="select-cup" value="CP">Cup</option>
              <option data-testid="select-cubic-foot" value="CF">Cubic-Foot</option>
            </select>      
        </Colxx>
        
        {/* Numerical Input Value that renders once an input unit of measure is selected */}
        {(props.inputUnit.isLoaded && props.inputUnit.selected !== 'selectUnit') && (
        <Colxx xxs="2">
              <label>
                Enter Input Numerical Value
              </label>
              <input 
                data-testid="inputValue"
                value={props.inputValue.value}
                onChange={props.handleNumericalValueInput}
                type='number' 
              />
        </Colxx>

        )}

        {/* Target unit of measure Dropdown that renders once an input unit of measure is selected and an input numerical value is entered*/}
        {(props.inputUnit.isLoaded && props.inputUnit.selected !== 'selectUnit' && props.inputValue.isLoaded) && (
        <Colxx xxs="2">
              <label>
                Select Target Unit of Measure
              </label>
              <select data-testid="selectTargetUnit" value={props.targetUnit.selected} onChange={props.handleTargetUnitSelect}>
                {
                  matchedUnits.map((unit) => {
                    return <option data-testid={`select-target-${unit.name}`} key={unit.name} value={unit.value}>{unit.name}</option>
                  })
                }
              </select>
              {matchFormula()}      
          </Colxx>
        )}

        {/* Student response input and final check response button group that renders once input unit of measure is selected, an input numerical value is entered, and target unit of measure is selected*/}
        {(props.inputUnit.isLoaded && props.inputUnit.selected !== 'selectUnit' && props.inputNumericalValueData.isLoaded && props.targetUnit.isLoaded) && (
        <Colxx xxs="2">
               <label>
                Enter Student Response
              </label>
              <input 
                data-testid="studentResponseValue"
                value={props.responseInput.value}
                onChange={props.handleStudentResponseInput}
                type='number'
              />
              <Button data-testid="checkResponseButton" onClick={props.handleCheckResponseButton}>CHECK RESPONSE</Button>   
          </Colxx>
        )}
    </Row>
  );
}

export default Form;
