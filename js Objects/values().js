//Example1-Array Objects
const array1=['a', 'b', 'c','d'];
console.log(Object.values(array1));

//Example2
let Person={
    name:'Joy',
    school:'Dedan Kimathi University of Technology',
    age:21,
    course:'Information Technology',
}
console.log(Object.values(Person));


//Example3-array-like objcets
let obj1={
    65:'elizar',
    45:'kids',
    56:'Family',
}
console.log(Object.values(obj1));

//Example4-string
let string='Joy Elizabeth Muthoni Kiboi';
console.log(Object.values(string));