//Data Types
//number,boolean,string,null,undefined,symbol,bigInt
//to see the type of a value
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Joy Kiboi");
//output
//boolean
//number
//string

//methods of declairing variables in js
//let -declaire variables that can change later
let age=30;
age=31;
//const creates a variable that cannot be reassigned
const birthDay=2005;
//birthDay=2001; this brings in an error

//MATHEMATICAL OPERATORS
console.log(2**3);//this means 2^3=(2*2*2)

//assignment operator = sign
let x=10+5;//15
x+=10;//x+10  ,  //output=25
console.log(x);
x*=4;// x*4=100
x++;//x=x+1

//assueme we have these ages
const now=2037;
const ageJoy=2037-2001;
const ageDavid=2037-2017;
console.log(ageJoy,ageDavid);
console.log(ageDavid>ageJoy);//takes it as a boolean question
const averageAge=(ageDavid+ageJoy)/2;//write such a code without parenthesis you get a wrong answer
console.log(averageAge);