//ENCAPSULATION:
//normal code without OOP
let baseSalary=30_000; 
let overtime=10;
let rateLimit=20;
function getPay(baseSalary,rateLimit,overtime){//code id defined with very many parameters
    return baseSalary+(overtime*rateLimit);
}
//code with 00P encapsulation
let employee = {
    baseSalary:30_000,
    overtime:10,
    rateLimit:20,
    getPay:function(){//NB: Best functions are those with no parameters.
        return this.baseSalary+(this.overtime*this.rateLimit);
    }
};
employee.getPay();