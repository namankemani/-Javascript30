let age =100;
let age2 = age;
console.log(age,age2);

let name = 'Java';
let name2 =  name;
console.log(name,name2);
name = 'Javascript';
console.log(name,name2);

const players = ['Ram','Ajay','Ryan','Poppy'];
const team = players;
console.log(players,team);
team[3]= 'newPoppy';
console.log(team);
console.log(players);

const team2 = players.slice(2);
console.log(team2);

const team3 = [].concat(players);
const team4 = [...players];
team4[3] = 'yes';
console.log(team4);

const team5 = Array.from(players);
console.log(team5);

const person = {
    name: 'This one',
    age: 33
};

const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);