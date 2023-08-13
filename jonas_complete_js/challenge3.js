/*
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.
*/

const dolphins=(10+20+10);
const koalas=(20+10+10);

const dolphinsAverage=dolphins/2;
const koalasAverage=koalas/2

console.log(koalasAverage,dolphinsAverage);

if(koalasAverage>dolphinsAverage){
    console.log("Koalas win the trophy");
}
else if(dolphinsAverage>koalasAverage){
    console.log("Dolphins win the trophy");
}
else if(koalasAverage===dolphinsAverage){
    console.log("Both win the trophy");
}
else{
    console.log("There was no winner");
}