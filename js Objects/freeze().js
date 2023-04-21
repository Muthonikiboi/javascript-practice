//used to ensure that the object properties are not changed or removed and incase of changes they are not affected

let person={
    name:"JOY ELIZABETH NUTHONI KIBOI",
    age:20,
    contact:"0750649958",
    email:["kiboijoye254@gmail.com"],
};

console.log(person);;
Object.freeze(person);

let contact = "12345678";
console.log(person);

//effect on adding element inside array object 

let person2={
    name:"JOY ELIZABETH NUTHONI KIBOI",
    age:20,
    contact:"0750649958",
    email:["kiboijoye254@gmail.com"],
};

console.log(person2);

let frozenPerson=Object.freeze(person);
frozenPerson.email.push("emmanuelgetange48@gmail.com");
console.log(frozenPerson);  //the email will be added in the array and it will give an output
       