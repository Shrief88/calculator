add = ((a,b) => a+b);
subtract = ((a,b) => a-b);
multiply = ((a,b) => a*b);
divide = ((a,b) => a/b);

function operate(number1,number2,operator){
   if (operator == '+') return add(number1,number2);
   if (operator == '-') return subtract(number1,number2);
   if (operator == '*') return multiply(number1,number2);
   if (operator == '/') return divide(number1,number2);
}

