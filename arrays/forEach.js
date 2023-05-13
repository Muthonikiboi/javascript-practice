//example 1 :dcode
const numbers=[1,3,5,9,47];
numbers.forEach(function (display){
    console.log(display);
});

//dcode example 2:output with specific index
const names =["Joy", "Emmanuel","Lilian"];

names.forEach(function (output,index){
    console.log(output+"-"+index);
});

//aided example GfG
function squares (){

    items=[12,24,36];
    const copy=[];
    items.forEach(function (items){
        copy.push(items*items);
    });
    console.log(copy);
}
squares();

//array forEach programiz
let age = [6, 16, 18, 21, 22];

function computeSquare(element) {
  console.log(element * element);
}

age.forEach(computeSquare);

//example2 programiz
function salaries(element, index) {
    console.log('salary ' + index + ': ' + element);
}
const prices = [18000, 20000, 30000, 50000, 500000, 80000];

prices.forEach(salaries);

//simple code for each
let classmates=['JOY','RUTH','EMMANUEL'];

classmates.forEach(myFunction);
function myFunction(friends){
    console.log(friends);
};

//use of arrow fnction
let siblings=['Joy','Lilian','David'];

siblings.forEach(element=>{
    console.log(element);
});


//use of forEach with sets
let set = new Set([12,34,56,78,90]);

set.forEach(myFunction);
function myFunction(){
    console.log(myFunction);
};


//last example
let map=new Map();

map.set('name', 'JoyElizabeth Muthoni Kiboi');
map.set('course','Bsc Information Technology');

map.forEach(myFunction);

function myFunction(value,key){
    console.log(key+'-'+value);
};
