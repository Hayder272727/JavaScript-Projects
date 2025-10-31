// =====================================
// 🧮 JavaScript Calculator Application
// Author: Hayder Hasan
// Description: Fully functional calculator with basic operations
// =====================================

// ===== Define calculator object =====
// This object holds the current state of the calculator.
const calculator = {
  displayValue: '0',              // What is currently shown on the screen
  firstOperand: null,             // The first number entered
  waitingForSecondOperand: false, // Whether the calculator is waiting for a second input
  operator: null                  // The selected mathematical operator
};

// ===== Update the calculator display =====
// This function refreshes the display value on screen.
function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}

// Initialize display when page loads
updateDisplay();

// ===== Handle all button clicks =====
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const { target } = event;   // Detect which button was clicked
  const { value } = target;   // Get the button’s value

  // Ignore clicks that are not on buttons
  if (!target.matches('button')) return;

  // Check what type of button was pressed and handle accordingly
  switch (value) {
    case '+':
    case '-':
    case '*':
    case '/':
      handleOperator(value);   // Handle operator buttons
      break;
    case '=':
      handleOperator(value);   // Handle equal sign
      break;
    case 'all-clear':
      resetCalculator();       // Handle clear button
      break;
    case '.':
      inputDecimal(value);     // Handle decimal input
      break;
    default:
      // Handle number buttons (0–9)
      if (Number.isInteger(parseFloat(value))) {
        inputDigit(value);
      }
  }

  // Update the screen after each click
  updateDisplay();
});

// ===== Function to handle number inputs =====
function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  // If waiting for the next number, replace display with new digit
  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    // Otherwise, append the digit to the current display
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}

// ===== Function to handle decimal points =====
function inputDecimal(dot) {
  // Prevent adding multiple decimal points
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

// ===== Function to handle math operations =====
function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  // If an operator is already active and waiting for next number, replace it
  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  // If there’s no first operand, store the input value as firstOperand
  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    // Perform the calculation if operator exists
    const result = performCalculation[operator](firstOperand, inputValue);
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`; // Round to avoid float issues
    calculator.firstOperand = result;
  }

  // Prepare for next number entry
  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

// ===== Object that defines all operations =====
const performCalculation = {
  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  '=': (firstOperand, secondOperand) => secondOperand
};

// ===== Reset calculator to its initial state =====
function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}
