//dates and times
const now = new Date();

console.log(now);
console.log(typeof now);

//year, month, day, times
console.log('getFullYear:', now.getFullYear());
console.log('getMOnth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSecond:', now.getSeconds());

//timstamp
console.log('timestamps:', now.getTime());

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());