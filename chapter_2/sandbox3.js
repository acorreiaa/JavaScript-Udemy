// templates strings
const title = 'Best read of 2019';
const author = 'Amanda';
const likes = 30;

// concatenation way
// let result = 'The Blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);
// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);
// creating html templates 