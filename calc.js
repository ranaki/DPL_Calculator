//get two number values
//get an operator
//apply the operator to the values
//display the result
console.log("loading");



function calcResult() {
    var num1 = Number(document.getElementById("myInput1").value);
    var num2 = Number(document.getElementById("myInput2").value);
    var operator = document.getElementById("myOperator").value;

    console.log("num1 = " + num1);
    console.log("num2 = " + num2);
    console.log("opeerator = " + operator);
    // console.log("calculate this");
    var resultLab = document.getElementById("calc-result");
    // console.log("resultLab " + resultLab )
    
    if (num2 === 0 && operator === '/')
    {
        return resultLab.innerHTML = "Cannot divide by 0";
    }
    switch(operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        result = 'Not a valid operator';
    }

    resultLab.innerHTML = "Result = " + result;
}