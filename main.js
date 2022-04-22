add = ((a,b) => parseInt(a)+parseInt(b));
subtract = ((a,b) => a-b);
multiply = ((a,b) => a*b);
divide = ((a,b) => a/b);

function operate(number1,number2,operator){
   if (operator == '+') return add(number1,number2);
   if (operator == '-') return subtract(number1,number2);
   if (operator == '*') return multiply(number1,number2);
   if (operator == '/') return divide(number1,number2);
}




let isFirstNumber = true;
const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const display =document.querySelector('#result')
const equal = document.querySelector('#equal');
let firstNumber = '';
let secondNumber = '';
let operator = '';


numberButtons.forEach(button=>{
   button.addEventListener('click',()=>{
      
      isFirstNumber ? firstNumber += button.value : secondNumber +=button.value;    
      display.textContent = isFirstNumber ? firstNumber : secondNumber;  
   })
})

operatorButtons.forEach(button=>{
   button.addEventListener('click',()=>{
      isFirstNumber = false;
      operator = button.value;
   })
})

equal.addEventListener('click',()=>{
   display.textContent = operate(firstNumber,secondNumber,operator);
   firstNumber = display.textContent;
   secondNumber='';
})



