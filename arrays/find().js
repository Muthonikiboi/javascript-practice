//example 1:find array method peeks one number 
const team = [
    { name: "Bill", age: 10 },
    { name: "Linus", age: 15 },
    { name: "Alan", age: 20 },
    { name: "Steve", age: 34 },
  ];
  
  function isAdult(member) {
    return member.age >= 18;
  }
  
  console.log(team.find(isAdult)); 
   
  let adultMember = team.find(({ age }) => age >= 18);
  
  console.log(adultMember);
  //example 2:
  function isEven(element) {
    return element % 2 == 0;
  }
  
  let randomArray = [1, 45, 8, 98, 7];
  
  let firstEven = randomArray.find(isEven);
  console.log(firstEven); 
  

  let firstOdd = randomArray.find((element) => element % 2 == 1);
  console.log(firstOdd); 