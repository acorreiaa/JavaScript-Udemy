// => CALLBACKS & FOREACH
//CALLBACK
//function myFunc(callbackFunc) {
//    let value = 50;
//    callbackFunc(value);
//}

//const myFunc = (callbackFunc) => {
    // do something
//    let value = 50;
//    callbackFunc(value);
//};

//myFunc(function(value){
//    //do something
//    console.log(value);
//});

//myFunc(value =>{
    //do something
//    console.log(value);
//});

//FOREACH com CALLBACK
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

//people.forEach(function(person){
//    console.log(person);
//})

//people.forEach((person, index) => {
//    console.log(index, person);
//})
// funções que você passa como argumentos para outras funções ou métodos -- Amanda
