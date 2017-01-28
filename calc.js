//get two number values
//get an operator
//apply the operator to the values
//display the result
console.log("loading");

var currentEquationHistory = [];

function calcResult() {
    var currentEquation = "";
    var num1 = Number(document.getElementById("myInput1").value);
    var num2 = Number(document.getElementById("myInput2").value);
    var operator = document.getElementById("myOperator").value;
    var resultLab = document.getElementById("calc-result");

    // if (num1 === 0 || num2 === 0){
    //     return resultLab.innerHTML = "Please enter a numeric value for each input";
    // }
    
    if (num2 === 0 && operator === '/')
    {
        return resultLab.innerHTML = "Cannot divide by 0";
    }
    switch(operator) {
    case '+':
        currentEquation = `${num1} + ${num2}`;
        result = num1 + num2;
        break;
    case '-':
        currentEquation = `${num1} - ${num2}`;
        result = num1 - num2;
        break;
    case '*':
        currentEquation = `${num1} * ${num2}`;
        result = num1 * num2;
        break;
    case '/':
        currentEquation = `${num1} / ${num2}`;
        result = num1 / num2;
        break;
    default:
        result = 'Not a valid operator';
    }
    console.log("Current: " + currentEquation + " = " + result);
    currentEquationHistory.push(currentEquation);

    resultLab.innerHTML = "Result = " + result;

    console.log("History: " + currentEquationHistory + " = " + result);

    addToHistoryList(currentEquation + " = " + result);
}

function addToHistoryList(expression){
    var histList = document.getElementById("hist-list-id");
    var li = document.createElement("li");
    li.innerHTML = expression;
    histList.appendChild(li);
}

function clearInput(inputId){
    document.getElementById(inputId).value = '';
    // document.getElementById("myInput2").value = '';
}
