add = ((a,b) => +a + +b);
subtract = ((a,b) => a-b);
multiply = ((a,b) => a*b);
divide = ((a,b) => a/b);

roundNumber = (number => Math.round(number*10)/10);

function operate(number1,number2,operator){
   if (operator == '+') return add(number1,number2);
   if (operator == '-') return roundNumber(subtract(number1,number2));
   if (operator == '*') return roundNumber(multiply(number1,number2));
   if (operator == '/') return roundNumber(divide(number1,number2));
}

function showResult(){
   displayArea.textContent = operate(firstNumber,secondNumber,operator);
   firstNumber = displayArea.textContent;
   secondNumber='';
}

function clear(){
   firstNumber='';
   secondNumber='';
   operator='';
   displayArea.textContent=0;
   equation.textContent='';
}


let isFirstNumber = true;

const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const equation =document.querySelector('#equation')
const displayArea =document.querySelector('#result')
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const errorText = document.querySelector('.error');


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
      isFirstNumber = false; // now user can enter the second number of the equation
      if(secondNumber.length > 0){
         showResult()
      } 
      operator = button.value;
      equation.textContent = `${firstNumber} ${operator}`
   })
})

equal.addEventListener('click',()=>{
   if(equation.textContent === '') errorText.textContent='You should choose a number';
   else if (secondNumber === '' || operator === '') {
      equation.textContent =  `${firstNumber} =`
      errorText.textContent = 'You should provide two numbers';
   }
   else{
      equation.textContent = `${firstNumber} ${operator} ${secondNumber} = ` 
      showResult();  
   }    
   
   
})

clearButton.addEventListener('click',clear);




