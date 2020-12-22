
// function expression
const speak = function(){
    console.log('good day!');
};

// speak();
// speak();
// speak();

// function declaration 
greet();
greet();
greet();

function greet(){
    console.log('hello there');
}

//ARGUMENTS AND ARGUMENTS

const speak = function(name, time){
    console.log(`Good ${time} ${name}`) // -- Good morning mario
};

speak('mario', 'morning'); // name = mario, time = morning

const speak = function(name = 'luigi', time = 'night'){
    console.log(`Good ${time} ${name}`)
};

speak(); // -- chamando a função
// speak('mario', 'morning') -- o jeito do primeiro exemplo
// -> Função associada ao parametro e Método assossiado ao argumento

