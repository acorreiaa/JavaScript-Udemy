//timestamp

const before = new Date('February 1 2029 7:30:58');
const how = new Date();

//console.log(now.getTims(), before.getTima());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);
console.log(`the blog was written ${days} ago`);

// converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));
console.log(before);