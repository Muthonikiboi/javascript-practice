//copy within 2 parameters
var home=["sitting","bathroom","kitchen","washroom","balcony","study-room"];
home.copyWithin(0,4);
console.log(home);

//3 parameters
var family=["father","mother","son","daughter","grandpa",];
family.copyWithin(0,2,3);
console.log(family);

//negative parameter
let odd=[1,3,5,7,9];
odd.copyWithin(-2);
console.log(odd);