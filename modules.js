//const xyz = require('./people') // here we load people file to modules file , when running modules file  it loads people  and runs it

//console.log(xyz);
//console.log(people); //gives an error because it can't access people's content from here it has to be exported first

// after exporting people and ages we can call them writing xyz.people , xyz.ages

//console.log(xyz.people, xyz.ages);


// another way is by using the name of what I want to require

const {people, ages} = require('./people') // this is the style to be used later to require multiple things from another file
console.log (people,ages);


// os object
const os = require('os');
console.log(os.platform(), os.homedir()); // os operating system object good to be used to get information about the current used os or platform.