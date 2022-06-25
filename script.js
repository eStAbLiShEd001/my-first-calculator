
const num1 = parseFloat( prompt("Enter first number: "));
const operator = prompt("Enter operator(+,-,/,*)");
const num2 = parseFloat( prompt("Enter second number: "));

let result = 0;
if(isNaN(num1) || isNaN(num2)) {
    alert('Wrong input refresh the page again and provide data!')
} else{
    if(operator == '+'){
        result = num1 + num2;
        alert(result)
    } else if(operator == '-'){
        result = num1 - num2;
        alert(result)
    } else if(operator == '/'){
        result = num1 / num2;
        alert(result)
    } else if(operator = '*'){
        result = num1 * num2;  
    }
       alert(result)


}
