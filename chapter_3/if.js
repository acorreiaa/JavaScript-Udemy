// if statements - não é loop

//const age = 25;

//if(age > 20){
//    console.log('you are over 20 years old');
//}


//const ninjas = ['Amanda', 'Luzi', 'Lua', 'Sol'];

//if(ninjas.length > 2){
//    console.log("that's a lot of ninjas");
//}

// else if atatements

const password = 'p@ss12'

/*if(password.length >=12){
    console.log('that password is mighty strong, congratulation!');
} else if(password.length >=8){
    console.log('that password is long enough!');
} else {
    console.log('passowrd is not long enough');
}*/

// logical orperators - OR || and AND &&

if(password.length >=12 && password.includes('@')){
    console.log('that password is mighty strong, congratulation!');
} else if(password.length >=8 || password.includes('@') && password.length >= 5){
    console.log('that password is long enough!');
} else {
    console.log('passowrd is not long enough');
}

// logical NOT (!)

let user = false;
if(!user){
    console.log('you must be llogged in to continue');
}

console.log(!true);
console.log(!false);