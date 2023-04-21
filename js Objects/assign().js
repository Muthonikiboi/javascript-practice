var assigning1={
    a:"FUCK YOU!!!!!",
    b:"I LOVE YOU.",
    c:"COME ON NIGGA."
};
var assigning2={
    x:"SSUP NIGGA",
    y:"FUCK YOU BITCH",
    z:"OOH!FUCK THAT"
};
let assigning3=Object.assign({
    b:"I LOVE YOU EMMANUEL",
    t:"WHATS UP BABY"
},assigning1);
let assigning4=Object.assign({
    x:"HEY NIGGA",
    z:"FUCK THAT"},assigning2);
console.log(assigning3.b,assigning3.t);
console.log(assigning4.x,assigning4.z);

var come={
    u:"come home",
    v:"Be strong",
    w:"Think twice"
};
var coming=Object.assign({u:"come home my love",p:"That's true"},come);
console.log(coming.p,coming.u);