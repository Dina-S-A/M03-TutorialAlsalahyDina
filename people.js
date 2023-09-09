const people = ['youshi', 'ryn','chun-li','mario'];
const ages = [20,30,40,50];

console.log(people);

//module.exports = people; // this line exports the variable people and xyz will = people now

//to export multiple values we use 
/*module.exports = {
people : people, //I am exporting property called people and its value is people they don't have to have the same name
ages : ages //I am exporting property called ages and its value is ages they don't have to have the same name 

//because they have the same name we can write it only once as follows

}*/

module.exports = {
    people,ages
}