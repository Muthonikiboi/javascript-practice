let object1={
    property1:"JOY",
    property2:"20years",
}
let joy=Object.getOwnPropertyDescriptor(object1,"property1");
console.log(joy);

//if an object does not exist
let cars={
    car1:"Mercedez G-Wagon",
    car2:"Mazda Cx5",
    get number(){
        return this.car2;
    },
}
var vehicles=Object.getOwnPropertyDescriptor(cars,"car2");
console.log(vehicles);
//if an object does not exist
var vehicle=Object.getOwnPropertyDescriptor(cars,"number");
console.log(vehicle);