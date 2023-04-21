//Example1
let School={
    name:'DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY',
    students:'12,000',
    courses:'IT,MECHATRONICS,CS,BBIT & CIVIL'
}
let school_general=Object.keys(School);
console.log(school_general);

//Example2-Array Objects
const array=['A', 'B', 'C', 'D'];
console.log(Object.keys(array));

//Example3-Array-like Objects
const obj1={
    1:'a',
    2:'b',
    3:'c',
    4:'d',
}
console.log(Object.keys(obj1));

//Example4-Whan the numeric keys of the array likr objects are mixed up
const obj2=
{ 
    3:'Muthoni',
    1:'Joy',
    4:'Kiboi',
    2:'Elizabeth',
}
console.log(Object.keys(obj2));

//Example5-having a string 
const obj="JOY ELIZABETH MUTHONI KIBOI";
console.log(Object.keys(obj));


