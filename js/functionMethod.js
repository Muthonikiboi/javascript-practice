//APPLY() METHOD
//to output largest number using apply method
var arr=[1,2,3,4];
var max=Math.max.apply(null,arr);
console.log(max);
//display the smallest numeber
var arr=[1,2,3,4];
var min=Math.min.apply(null,arr);
console.log(min);
//push elements into an array
var array=[1,2,3,4];
var newarray=[5,6,7,8];
array.push.apply(array,newarray);
console.log(array);
//pop elements out of an array using apply
var array=[1,2,3,4,5,6,7,8];
var pop=[2,3,4,5];
array.pop.apply(array,pop);               // wrong didn't display the pop array
console.log(array);


//BIND() METHOD
let karma={
    x:"Fuck you",
    getx:function(){
        return this.x;
    }
}
var zakix=karma.getx;
console.log(zakix());
var joyx=zakix.bind(karma);
console.log(joyx());
//grocerry
let groccery={
    veg:"green vegitables",
    getveg:function(){
        return this.veg;
    },

    vegi:"Broccolli",
    getvegi:function(){
        return this.vegi;
    },

    price:"Ksh 150",
    getprice:function(){
        return this.price;
    }
};

var vegtable=groccery.getveg;
var vegtable=vegtable.bind(groccery);
 console.log(vegtable());

 var vegtable=groccery.getvegi;
 var vegtable=vegtable.bind(groccery);
 console.log(vegtable());

 const joy=groccery.getprice;
 const zaki=joy.bind(groccery);
 console.log("The price is:"+zaki());

 //practice on bind method
 var lily={
    t:"bakery",
    z:"cookies",

    gett:function(){
        return this.t;
    },

    getz:function(){
        return this.z;
    }
 }
 var bakeryt=lily.gett;
 console.log(bakeryt());
 var baket=bakeryt.bind(lily);
 console.log(baket());

 var bakeryz=lily.getz;
 console.log(bakeryz());
 var baket=bakeryz.bind(lily);
 console.log(baket());

 var appartmeents={
    place:"Nyeri",
    location:"Kimathi",
    name:"Vivian's",
    app_price:"Ksh 8,000",

    getplace:function(){
        return this.place;
    },
    getlocation:function(){
        return this.location;
    },
    getname:function(){
        return this.name;
    },
    getappprice:function(){
        return this.app_price;
    }
 }

 var pla=appartmeents.getplace;
 var place=pla.bind(appartmeents);
 console.log("The place is located in:"+place());

 var loca=appartmeents.getlocation;
 var location=loca.bind(appartmeents);
 console.log("It's location:"+location());

 var na=appartmeents.getname;
 var nam=na.bind(appartmeents);
 console.log("The name of the hostel:"+nam());

 var app_price=appartmeents.getappprice;
 var app_pri=app_price.bind(appartmeents);
 console.log("The rent:"+ app_pri());

 //CALL() METHOD
 //To add two numbers
 
 function sum(f,g)
 {
    return f+g;
 }
 var addition=sum.call(this,15,23);
 console.log("The addition is:"+addition);

 //addition example2
 function add(a,b,c,d)
 {
    return a+b+c+d;
 }
 var adding=add.call(this,12,45,67,89);
 console.log("the sum is: "+adding);

 //multiplication with and without the call method
 function product(x,y,z){
    return x*y*z;
 }
 var multiply=product.call(this,23,45,67);   //this is with the call
console.log("Product with call:"+multiply);

var multi=product(16,56,45);
console.log("product without call:"+multi);

//object defintion(real life application)
const person={
  firstName:"Joy Elizabeth",
  secondName:"Kiboi",
  gender:"female",
  age:"20 years",
}
function display(){
    const output=`My name is ${this.firstName} ${this.secondName}.I am a ${this.gender}.I am ${this.age}`;
    console.log(output);
}
display.call(person);

//LENGTH METHOD
//function method
function get1(a,b){
}
console.log("The length is:"+get1.length);
