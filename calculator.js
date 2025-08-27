function calculate(operator){
    let firstValue = Number(document.getElementById("num1").value);
    let secondValue = Number(document.getElementById("num2").value);

    let result;

    if(operator === '+'){
        result = firstValue + secondValue;
    }
    if(operator === '-'){
        result = firstValue - secondValue;
    }
    if(operator === 'x'){
        result = firstValue * secondValue;
    }
    if(operator === '÷'){
        result = firstValue / secondValue;
    }
     if(operator === '^'){
        result = firstValue ** secondValue;
    }
    document.getElementById("result").innerText = result;
}

function clearCalc(){
    document.getElementById("num1").value = "";   
    document.getElementById("num2").value = "";   
    document.getElementById("result").innerText = 0; 
}