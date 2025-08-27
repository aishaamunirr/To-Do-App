function calculate(operator){
    let firstValue = Number(document.getElementById("num1").value);
    let secondValue = Number(document.getElementById("num2").value);
    // console.log("first value; ", firstValue)
    // console.log("second value; ", secondValue)

    if(operator === '+'){
        result = firstValue + secondValue;
    }
    if(operator === '-'){
        result = firstValue - secondValue;
    }
    if(operator === '*'){
        result = firstValue * secondValue;
    }
    if(operator === '/'){
        result = firstValue / secondValue;
    }
     if(operator === '^'){
        result = firstValue ** secondValue;
    }
    document.getElementById("result").innerText = result;
}