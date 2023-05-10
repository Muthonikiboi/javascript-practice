//tofind anindex that is odd

function isOdd(element){
    return (element%2==1);
}
console.log([2,4,68,90,100].findIndex(isOdd));

console.log([68,40,90,87].findIndex(isOdd));

//real world example

const myCompany=[
    {
        name:'Joy Elizabeth Muthoni Kiboi',
        work:'FullstackDeveloper',
    },
    {
        name:'Emmanuel Getange',
        work:'SoftwareEngineer',
    },
    {
        name:'Lilian Kiboi',
        work:'Developer',
    }
]

function isEngineer(worker){
    return worker.work ==='SoftwareEngineer';
}

console.log(myCompany.findIndex(isEngineer));

console.log(myCompany[myCompany.findIndex(isEngineer)]);

//to get the age of the family

const family = [
  { name: "Lilian", age: 17 },
  { name: "Elijah", age: 18 },
  { name: "Joy", age: 21 },
  { name: "Emmanuel", age: 22 },
];
function isAdult(member) {
  return member.age >= 18;
}
console.log(family.findIndex(isAdult));
console.log(family[family.findIndex(isAdult)]);