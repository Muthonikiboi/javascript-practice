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

//strings and tamplete literals
  //normal string
  const myName='Joy Elizabeth Kiboi';
  const birthYear=2004;
  const year=2023;
  const job='Software Engineer';

  const joy="I'm "+ myName +" a "+ (year-birthYear)+" year old "+job+".";
  console.log(joy);
  //templete literals(assemple multiple pieces into one string)
  //we use dollar sign
  const joyNew = `I'm ${myName} a ${year-birthYear} year old ${job}`;
  console.log(joyNew);

  //if else statements
  const ageSarah =15;

  if(ageSarah>=18) {
    console.log('Sarah gets a driving licence');
  }else{
    const yearsLeft=18-ageSarah;
    console.log(`Sarah is too young.Wait another ${yearsLeft} years.`)
  }

  //TYPE CONVERSION AND COERSION



  //booleans
  //&&-and for T ,A and B should be T
  // ||-or for T ,A or B should either be T or F
  //  !-change the value of a valuable
   

  //CONDITIONAL TARNERY OPERATOR
  const hisage=21;
  hisage>=18 ? console.log('He has an ID ') : console.log('He is still a child');
  
  const herAge=21;
  const gettingID = herAge >=18 ? 'Accept': 'Reject';
  console.log(gettingID);

  console.log(`Her age is above 18 so she got an ${herAge>=18 ? 'Accept' : 'Reject'}`);

  //USE OF STRICT MODE IN JS
  //strict mode in a function
  'use strict';//always in the beginning of the full code 
  //NB:in the center or below a code strict mode does not execute
  myvariable=9;//this produces an error

  //strict mode in a function
  myvar=9;
  console.log(myvar);//output=9

  function hello(){
    //applicable only for this function
    'use strict';
    String='Hello';//this throws an error
  }
  hello(); 

//FUNCTIONS IN JS
function student(name,regNo){
  const students=`The student name is ${name} while their registration is ${regNo}`;
  return students;
}

console.log(student("Joy Kiboi","C025-01-09888/34"));

const pupil=student("Lilian","2345678987");
console.log(pupil);

//arrow functions
const getGraduationYear=joiningYear=>joiningYear+4;
const graduation = getGraduationYear(2021);
console.log(`My garduation year is ${graduation}`);