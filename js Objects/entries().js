//first example
let entry1={
    name:"Joy Elizabeth Muthoni Kiboi",
    RegNo:"C025-01-0909/2023",
    age:"20",
    gender:"female",
}

let entry2= Object.entries(entry1);
console.log(entry2);

//example 2
let entry3=
{
    name:"Joy Elizabeth Muthoni Kiboi",
    RegNo:"C025-01-0909/2023",
    age:"20",
    gender:"female",
};

let entry4=
{
    name:"Emmanuel Getange",
    RegNo:"C025-01-0983/2023",
    age:"21",
    gender:"male",
};

let entry5=
{
    name:"Lilian Kiboi",
    RegNo:"C025-01-000/2023",
    age:"17",
    gender:"female",
};


for(const[key,value] of Object.entries(entry3))
{
    console.log(`${key}: ${value}`);
}
for(const[key,value] of Object.entries(entry4))
{
    console.log(key, value);
}
for(const[key,value] of Object.entries(entry5))
{
    console.log(`key=>${key}| key=>${value}`);
}