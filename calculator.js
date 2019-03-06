function calculator(){
let num1 = parseInt(prompt('Enter the first number for calculations'));
let op = prompt('Enter the operator');
let num2 = parseInt(prompt('Enter the second number for calculations'));

if (op === '+'){alert(num1 + num2);}
else if (op === '-'){alert(num1 - num2);}
else if (op === '*'){alert(num1 * num2);}
else if (op === '/'){alert(num1 / num2);}
else if (op === '%'){alert(num1 % num2);}
else{alert('Invalid operator');}
}