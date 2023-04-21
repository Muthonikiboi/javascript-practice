//variables in javascript
//local variable
function abc(){
    var x=29;
    console.log(x);
}
abc();

//global variable 
//global var1
let a="My name is Joy";
function bcd(){
    console.log(a);
}
bcd();

//global var2
let c="Fuck You Bitch!!!"
function ghj(){
    c="I don't give a Fuck."
}
console.log(c);  //display variable before function call=Fuck You Bitch!!!
ghj();
console.log(c); // display the variable after function call=I don't give a Fuck.