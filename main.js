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
   if (operator === '/' && secondNumber === '0'){
      errorText.textContent = 'you can not divide by zero!';
      clear()
   }else{
      displayArea.textContent = operate(firstNumber,secondNumber,operator);
      firstNumber = displayArea.textContent;
      secondNumber='';
   }
}

function clear(){
   firstNumber='';
   secondNumber='';
   operator='';
   displayArea.textContent=0;
   equation.textContent='';
   errorText.textContent ='';
}

const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const equation =document.querySelector('#equation')
const displayArea =document.querySelector('#result')
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const errorText = document.querySelector('.error');
const decimalButton = document.querySelector('#decimal');

let isFirstNumber = true;
let firstNumber = '';
let secondNumber = '';
let operator = '';

numberButtons.forEach(button=>{
   button.addEventListener('click',()=>{  
      if(button.value === '.' || (firstNumber.includes('.') && isFirstNumber && button.value === '.')){
         decimalButton.disabled = true;
      }     
      errorText.textContent ='';  
      isFirstNumber ? firstNumber += button.value : secondNumber +=button.value;  
      displayArea.textContent = isFirstNumber ? firstNumber : secondNumber; 
      equation.textContent = isFirstNumber ? `${firstNumber}` :`${firstNumber} ${operator} ${secondNumber}`
   })
})

operatorButtons.forEach(button=>{
   button.addEventListener('click',()=>{
      if(button.value !== '-' && firstNumber.length === 0) errorText.textContent='You should choose a Number';
      else if(button.value === '-' && firstNumber.length === 0){
         firstNumber = '-'
         equation.textContent = `${firstNumber}`
         displayArea.textContent = firstNumber;
      }
      else{
         errorText.textContent =''; 
         isFirstNumber = false; // now user can enter the second number of the equation
         decimalButton.disabled = false;
         if(secondNumber.length > 0) showResult();
         operator = button.value;
         equation.textContent = `${firstNumber} ${operator}`
      }
   })
})

equal.addEventListener('click',()=>{
   if(firstNumber.length === 0) errorText.textContent='You should choose a number';
   else if (secondNumber === '' || operator === '') errorText.textContent = 'You should provide two numbers';
   else{
      equation.textContent = `${firstNumber} ${operator} ${secondNumber} = ` ;
      decimalButton.disabled = false;
      isFirstNumber = true;
      showResult(); 
   }    
})

clearButton.addEventListener('click',clear);




