let obj={
    value:21,
    get number (){
        return this.value
    },
};
let objectproperties=Object.getOwnPropertyDescriptors(obj);

console.log(objectproperties);