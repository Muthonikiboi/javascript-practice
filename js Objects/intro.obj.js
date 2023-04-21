fuck={
    name:"Joy Kiboi",
    email:"kiboijoye@gmail.com",
    age:26
}
console.log(fuck.name+" "+fuck.email+" "+fuck.age);

miss={
    position:1. ,
    firstName:"Joy Elizabeth Kiboi",
    marks:500,
    grade:"A",
}
console.log(miss.position+" "+miss.firstName+" "+miss.marks+" "+miss.grade);

//bycreating an instance of an object
var appartments=new Object();
    appartments.title="vivian's";
    appartments.location="Kimathi";
    appartments.rent="Ksh.8,000";
    console.log(appartments.title+" "+appartments.location+" "+appartments.rent);

//by using object consructors
function were(fname,lname,id,salary){
    this.fname=fname;
    this.lname=lname;
    this.id=id;
    this.salary=salary;
}  
play=new were("Joy","Kiboi",39366756,"Ksh 500,000");
console.log(play.fname+" "+play.lname+" "+play.id+" "+play.salary);
