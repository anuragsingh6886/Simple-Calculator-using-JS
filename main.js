
var sequence = '';

const handleClick = (digit) => {
    digit = digit.toString();
    sequence += digit;
    updateDisplay();
}

const handleDelete = () => {
    sequence = sequence.slice(0, sequence.length - 1);
    updateDisplay();
}

const handleReset = () => {
    sequence = ''
    updateDisplay();
}

const updateDisplay = () => {
    document.getElementById('display').innerHTML = sequence;
}

const handleEquate = () => {
    if(sequence == '' || sequence == undefined || sequence.length == 1){
        return
    }
    operatorArr = ['+','-','x','/'];
    let numArr = [];
    let opArr = [];
    let val = '';
    for (let x of sequence){
        if(operatorArr.includes(x)){
            numArr.push(parseFloat(val));
            opArr.push(x);
            val = '';
        }
        else{
            val+=x;
        }
    }

    if(val != ''){
        numArr.push(parseFloat(val));
    }

    var result = numArr.shift();
    for(let i= 0; i < numArr.length; i++){
        let operator = opArr[i];
        let b = numArr[i];
        if(operator == '+'){
            result = add(result,b)
        }
        if(operator == '-'){
            result = subtract(result,b)
        }
        if(operator == 'x'){
            result = multiply(result,b)
        }
        if(operator == '/'){
            result = divide(result,b)
        }
    }

    sequence = result.toString();
    updateDisplay();
    
}

const add = (a,b) => {
    const result = a + b;
    return result;
}

const subtract = (a,b) => {
    const result = a - b;
    return result;
}

const multiply = (a,b) => {
    const result = a*b;
    return result;
}

const divide = (a,b) => {
    const result = a/b;
    return result;
}