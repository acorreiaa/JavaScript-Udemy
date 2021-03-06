// Query Element
//const para = document.querySelector('p');  // singular select
//const para = document.querySelector('body > h1');
// console.log(para)

//const paras = document.querySelectorAll('p');  //plural select
//paras.forEach(para => {
//    console.log(para);
//});

//console.log(paras[2]);


// *** Get element
const title = document.getElementById('page-title'); // get an element by ID
console.log(title);

// const errors = document.getElementsByClassName('error'); // elements by their class name
// console.log(errors);
// console.log(errors[0]);
// errors.forEach(error => {
//    console.log(error) 
// });

// get elements by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);

// INNER

//const para = document.querySelector('p');
//console.log(para.innerText);
// para.innerText = 'ninjas are awesome!';   // = exibe apenas o conteudo
// para.innerText += 'ninjas are awesome!';  // += adiciona conteudo e exibe ambos

//const paras = document.querySelectorAll('p');
//paras.forEach(para => {
//    console.log(para.innerText);
//    para.innerText += ' new text';
//});

const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML = '<h2>THIS IS A NEW H2</h2>';
content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

//innertext-nao pega oq tenha sido alterado
//textcontent: enxerga MediaStreamTrackAudioSourceNode, mesmo se tiver escondido (nao liga pra css)
