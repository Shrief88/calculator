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

function showResult(){
   displayArea.textContent = operate(firstNumber,secondNumber,operator);
   firstNumber = displayArea.textContent;
   secondNumber='';
}


let isFirstNumber = true;

const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const equation =document.querySelector('#equation')
const displayArea =document.querySelector('#result')
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');


let firstNumber = '';
let secondNumber = '';
let operator = '';


numberButtons.forEach(button=>{
   button.addEventListener('click',()=>{    
      isFirstNumber ? firstNumber += button.value : secondNumber +=button.value;  
      displayArea.textContent = isFirstNumber ? firstNumber : secondNumber; 
      equation.textContent = `${firstNumber} ${operator}`
   })
})

operatorButtons.forEach(button=>{
   button.addEventListener('click',()=>{
      isFirstNumber = false;
      if(secondNumber.length > 0){
         showResult()
      } 
      operator = button.value;
      equation.textContent = `${firstNumber} ${operator}`
   })
})

equal.addEventListener('click',()=>{
   equation.textContent = `${firstNumber} ${operator} ${secondNumber} = `   
   showResult();
})


