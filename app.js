function btnClick(a){
    calculator.display.value+=a
}
function Equalto()
{
    calculator.display.value=eval(calculator.display.value);
}
function AC(){
    calculator.display.value="0";
}
function Del(){
    var prevalue=calculator.display.value;
    calculator.display.value=prevalue.substr(0,prevalue.length-1);
}
function Clear(){
    calculator.display.value="";
}

function fnsin(){
    calculator.display.value=Math.sin(calculator.display.value);
}
function fncos(){
    calculator.display.value=Math.cos(calculator.display.value);
}
function fntan(){
    calculator.display.value=Math.tan(calculator.display.value);
}
function fnSquare(){
    calculator.display.value=Math.pow(calculator.display.value,2);
}
function fnSquareRoot(){
    calculator.display.value=Math.pow(calculator.display.value,1/2);
}
function fnAnyPow(){
    
    calculator.display.value=Math.pow(calculator.display.value,calculator.display.value);
}
function fnAbs(){
    calculator.display.value=Math.abs(calculator.display.value);
}