import { render, screen, fireEvent } from '@testing-library/react';
import userEvent  from '@testing-library/user-event';
import App from './App';
import Form from './components/Form'

// test if react components render
test('Renders App', () => {
  render(<App />);
  const appTitle = screen.getByText(/Unit Conversion Response Checker/i);
  
  expect(appTitle).toBeInTheDocument();
});

test('Renders Input Unit Selector', () => {
  render(<Form />);
  const inputUnitSelector = screen.getByTestId('selectInputUnit');

  expect(inputUnitSelector).toBeInTheDocument();


});

test('Simulate Input Unit Selection', () => {
  const { getByTestId, getByText } = render(<Form />);

  userEvent.selectOptions(getByTestId('selectInputUnit'), 'R');
  //simulate select 
  expect((getByText('Select Unit')).selected).toBeFalsy()
  expect((getByText('Fahrenheit')).selected).toBeFalsy()
  expect((getByText('Kelvin')).selected).toBeFalsy()
  expect((getByText('Rankine')).selected).toBeTruthy()
  expect((getByText('Liter')).selected).toBeFalsy()
  expect((getByText('Gallon')).selected).toBeFalsy()
})

test('Renders Numerical Value Input', () => {
  const { getByTestId } = render(<Form />);

  userEvent.selectOptions(getByTestId('selectInputUnit'), 'L');

  const numericalValueInput = getByTestId('inputValue');
  expect(numericalValueInput).toBeInTheDocument();
  
})


test('Simulate Numerical Value Input ', () => {

  const setup = () => {
    const utils = render(<Form />);
  
    userEvent.selectOptions(utils.getByTestId('selectInputUnit'), 'L');
  
    const input = utils.getByTestId('inputValue')
    return {
      input,
      ...utils,
    }
  }

  const { input } = setup()

  fireEvent.change(input, { target: { value: '32' } })
  //simulate select 
  expect(input.value).toBe('32')
})

test('Renders Target Unit Selector', () => {
  const utils = render(<Form />);
  const setup = () => {
    userEvent.selectOptions(utils.getByTestId('selectInputUnit'), 'L');
  
    const input = utils.getByTestId('inputValue')
    return {
      input,
      ...utils,
    }
  }

  const { input } = setup()

  fireEvent.change(input, { target: { value: '32' } })
  const targetUnitSelector = utils.getByTestId('selectTargetUnit');

  expect(targetUnitSelector).toBeInTheDocument();
});

test('Simulate Target Unit Selection', () => {
  const utils = render(<Form />);

  userEvent.selectOptions(utils.getByTestId('selectInputUnit'), 'L');

  const setup = () => {
    const input = utils.getByTestId('inputValue')
    return {
      input,
      ...utils,
    }
  }

  const { input } = setup()

  fireEvent.change(input, { target: { value: '32' } })
  
  userEvent.selectOptions(utils.getByTestId('selectTargetUnit'), 'G');
  //simulate select 
  expect((utils.getByTestId('select-target-Gallon')).selected).toBeTruthy()
  expect((utils.getByTestId('select-target-Liter')).selected).toBeFalsy()

  
})

test('Renders Student Response Input', () => {
  const utils = render(<Form />);
  const setup = () => {
    userEvent.selectOptions(utils.getByTestId('selectInputUnit'), 'L');
  
    const input = utils.getByTestId('inputValue')
    return {
      input,
      ...utils,
    }
  }

  const { input } = setup()

  fireEvent.change(input, { target: { value: '32' } })

  userEvent.selectOptions(utils.getByTestId('selectTargetUnit'), 'G');

  const studentResponseInput = utils.getByTestId('studentResponseValue');
  expect(studentResponseInput).toBeInTheDocument();
})

test('Renders Check Response Button', () => {
  const utils = render(<Form />);
  

  const checkResponseButton = utils.getByTestId('checkResponseButton');
  expect(checkResponseButton).toBeInTheDocument();
})



