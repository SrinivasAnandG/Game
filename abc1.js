var op=['+','-','*','/'];
function operator(){

var num1=Math.floor((Math.random()*100)+1);
var num2=Math.floor((Math.random()*100)+1);
var a=Math.floor(Math.random()*4);
document.getElementById("ques").innerHTML=num1+""+op[a]+""+num2;
var a1=num1+num2;
document.getElementById("op1").innerHTML=a1;
var a2=num1-num2;
document.getElementById("op2").innerHTML=a2;
var a3=num1*num2;
document.getElementById("op3").innerHTML=a3;
var a4=Math.floor(num1/num2);
document.getElementById("op4").innerHTML=a4;
}