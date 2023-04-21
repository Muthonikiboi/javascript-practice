let object1={};
Object.defineProperties(object1,{

    property1:
    {
        value:43,
        writable:true,
        enumerable:true,
        configurable:true,
    },

    property3:
    {
        value:67897,
        writable:true,
        enumerable:true,
        configurable:true,
    },

    property4:
    {
        value:"I LOVE EMMANUEL",
        writable:true,
        enumerable:true,
        configurable:true,
    }
     
});
console.log(object1.property1);
console.log(object1.property3);
console.log(object1.property4);


let object2={};
Object.defineProperty(object2,"property2",{
    value:"Emmanuel",
    writable:true,
    enumerable:true,
    configurable:true,
});
console.log(object2);