//get two number values
//get an operator
//apply the operator to the values
//display the result
console.log("loading");

var currentEquation = '';

function calcResult() {
    var num1 = Number(document.getElementById("myInput1").value);
    var num2 = Number(document.getElementById("myInput2").value);
    var operator = document.getElementById("myOperator").value;

    var resultLab = document.getElementById("calc-result");
    
    if (num2 === 0 && operator === '/')
    {
        return resultLab.innerHTML = "Cannot divide by 0";
    }
    switch(operator) {
    case '+':
        currentEquation = `Equation is: ${num1} + ${num2}`;
        result = num1 + num2;
        break;
    case '-':
        currentEquation = `Equation is: ${num1} - ${num2}`;
        result = num1 - num2;
        break;
    case '*':
        currentEquation = `Equation is: ${num1} * ${num2}`;
        result = num1 * num2;
        break;
    case '/':
        currentEquation = `Equation is: ${num1} / ${num2}`;
        result = num1 / num2;
        break;
    default:
        result = 'Not a valid operator';
    }
    console.log(currentEquation);

    resultLab.innerHTML = "Result = " + result;
}