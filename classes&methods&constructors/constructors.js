//simple constructor code
function School() {
        this.name = 'Dedan Kimathi University of Technology',
            this.location = 'Mathari';
    }
const school=new School();
console.log(school);

//multiple objects constructor function
function Hotel(){
    this.name='Bantu Africa Resort',
    this.location='Nyeri',
    this.foods=function(){
        console.log('We offer many delicoucies');
    }
}

const hotel=new Hotel();
console.log(hotel);
console.log(hotel.name);
console.log(hotel.location);
const  hotel1=new Hotel();
console.log(hotel1);


//constructor parameters
function Person(name,RegNo,hometown,){
    this.name=name,
    this.hometown=hometown,
    this.RegNo,
    this.me=function(){
        return('Hi'+''+this.name);
    }
}
const person1=new Person('Joy','Nyeri','C025-01-099999/3456');
const person2=new Person('Emmanuel','Kiambu','C025-01-099999/3456');

console.log(person1);
console.log(person1);

