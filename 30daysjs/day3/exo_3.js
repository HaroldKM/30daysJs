// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const date2 = new Date();
let year = date2.getFullYear();
let month = date2.getMonth() + 1;
let day = date2.getDate();
let hour = date2.getHours() >= 10 ? date2.getHours() : `0${date2.getHours()}`
let min = date2.getMinutes() >= 10 ? date2.getMinutes() : `0${date2.getMinutes()}`;
// YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${day} ${hour}:${min}`);