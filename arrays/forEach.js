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