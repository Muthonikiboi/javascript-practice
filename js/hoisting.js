//VARIABLE HOISTING
//hoisting value gives an undefined output
// code is execudted as it is first declaired
a=5;
console.log(a);
var a;

//initialiizing 
console.log(b);
var b;

//execution before code declaration
var c;
console.log(c);
c=54; // this is because the code has been declaired on top giving it an undefined value which is displayed by the console 

//variable hoisted on top of a function
function greet(){
    b="hello";
    console.log(b);
    var b;
}
greet();
console.log(b);

//FUNCTION HOISTING
//Function hoisting before declairing it
joy();
function joy(){
    console.log("My name is Zaki_Dev");
}
//code with hoisting
zaki();
let a=function zaki(){
    console.log("Mama Mia......");
}
