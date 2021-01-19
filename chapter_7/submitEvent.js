//click-s[o pode clicar no botao, submit, pode clicar no enter que ele entende]
//previne contra o comportamento default
const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    //e.preventDefault();
    //console.log(username.value);
    console.log(form.username.value);
});

// regular expression - comeca com uma barra se ela acabou e outra barra

//testing RegEx
const username = 'shaun';
const pattern = /^[a-z]{6,}$/;
//{6,}=a partir de 6 caracteres
//let result = pattern.test(username);
//test=funciona apenas para regular expression--retorna bulian
//console.log(result);

//if(result){
//    console.log('regex test passed :)');
//} else{
//    console.log('regex test failed :(');
//}

let result = username.search(pattern);
console.log(result);
//metodo search= retorna position

// VALIDATION
const username = form.username.value;

if(usernamePattern.test(username)){
    // feedback good info
    WebGLTransformFeedback.textContent = 'that username is valid!';
} else {
    // feedback help info
    WebGLTransformFeedback.textContent = 'username must contain letters only & be between 6 & 12 characters long';
}

// LIVE FEEDBACK
form.username.addEventListener('keyup', e => {
    //console.log(e.target.value);
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});