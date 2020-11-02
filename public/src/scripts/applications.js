//Move applications with mouse
$(function() {
    $( "#appMove" ).draggable();
    $( "#appMove2" ).draggable();
    $( "#appMove3" ).draggable();
    $( "#appMove4" ).draggable();
    $( "#appMove5" ).draggable();
    $( "#appMove6" ).draggable();  
  });
  
//Creating Variables
var calc = document.getElementsByClassName('calculator');
var account = document.getElementsByClassName('account');
var morseCode = document.getElementsByClassName('morseCode');
var loginCompany = document.getElementsByClassName('loginCompany');
var chemicalCode = document.getElementsByClassName('chemicalCode');
var cameraVideo = document.getElementById('cameraVideo');
var cameraText = document.getElementById('cameraText');

//Functions

//Calculator
function calculatorOpen(){
  console.log("Calc Clicked");
  for (var i=0;i<calc.length;i++){
    //changed opactity according to for statement
    calc[i].style.opacity = ( calc[i].style.opacity == "-10" ? "10" : "-10");
    calc[i].style.zIndex = ( calc[i].style.zIndex == "-10" ? "10" : "-10");
  }
}
//setting calculator
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};
//digit input
function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;
  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}
function inputDecimal(dot) {
	if (calculator.waitingForSecondOperand === true) return;
  // If the `displayValue` does not contain a decimal point
  if (!calculator.displayValue.includes(dot)) {
    // Append the decimal point
    calculator.displayValue += dot;
  }
}
function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue);
  if (operator && calculator.waitingForSecondOperand)  {
    calculator.operator = nextOperator;
    return;
  }
  if (firstOperand == null) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const currentValue = firstOperand || 0;
    const result = performCalculation[operator](currentValue, inputValue);
    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }
  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}
const performCalculation = {
  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

  '=': (firstOperand, secondOperand) => secondOperand
};
function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}
function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}
updateDisplay();
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }
  if (target.classList.contains('operator')) {
    handleOperator(target.value);
		updateDisplay();
    return;
  }
  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
		updateDisplay();
    return;
  }
  if (target.classList.contains('all-clear')) {
    resetCalculator();
		updateDisplay();
    return;
  }
  inputDigit(target.value);
  updateDisplay();
}); 


//account
function accountOpen(){
  console.log("Account Clicked");
  for (var i=0;i<account.length;i++){
    //changed opacity according to for statement
    account[i].style.opacity = ( account[i].style.opacity == "-10" ? "10" : "-10");
    account[i].style.zIndex = ( account[i].style.zIndex == "-10" ? "10" : "-10");
  }
}
//morse Code
function morseOpen(){
  console.log("morse Clicked")
  for (var i=0;i<morseCode.length;i++){
    //change opaciity according to for statement
    morseCode[i].style.opacity = ( morseCode[i].style.opacity == "-10" ? "10" : "-10");
    morseCode[i].style.zIndex = ( morseCode[i].style.zIndex == "-10" ? "10" : "-10");
  }
}
function chemcialOpen(){
  for (var i=0;i<chemicalCode.length;i++){
    chemicalCode[i].style.opacity = ( chemicalCode[i].style.opacity == "-10" ? "10" : "-10");
    chemicalCode[i].style.zIndex = ( chemicalCode[i].style.zIndex == "-10" ? "10" : "-10");
  }
}
//login company
function companyLoginOpen(){
  console.log("clo Clicked")
  for (var i=0;i<loginCompany.length;i++){
    //change opaciity according to for statement
    loginCompany[i].style.opacity = ( loginCompany[i].style.opacity == "-10" ? "10" : "-10");
    loginCompany[i].style.zIndex = ( loginCompany[i].style.zIndex == "-10" ? "10" : "-10");
  }
}