// RETURNING VALUES
const calcArea = function(radius){
    let area = 3.14 * radius**2
    return area;
// conforme abaixo, sem declarar a variavel 'area'
    return 3.14 * radius**2
}

const area = calcArea(5);
console.log(area);

const volume = calcVol(area, 2);

//const calcVol = function(area, height){
//    return area * height;
//};

//const volume = calcVol(area, 2);
//console.log(volume); 
// ==> Função criada para calcular uma área exibida no BROWSER através da variavel 'area'

// REGULAR FUNCTION ==> Exemplos acima
//const calcArea = function(radius){
//    return 3.14 * radius**2;
//}

// ARROW FUNCTION - Novo: forma reduzida de escrever a função (sem escrever 'function' e sem '{}')
//const calcArea = radius => {
//    return 3.14 * radius **2;
//}

//const calcArea = radius => 3.14 * radius **2;

//const area = calcArea(5);
//    console.log('area is: ' , area);

//PRACTICE ARROW FUNCTIONS
//==> Função Regular:
//const greet = function(){
//    return 'hello, world';
//};

//==> Função Arrow:
//const greet = () => 'hello, world';

//const exit = greet()
//console.log(exit, "it's me");

//==> Função Regular:
//const bill = function(products, tax){
//    let total = 0;
//    for(let i = 0; i < products.length; i++){
//        total += products[i] + products[i] * tax;
//    }  
//    return total;
//}

//const total = bill([10,15,30], 0.2);
//console.log('total produtos e taxa: ', total);
// => Forma reduzida de exibição ABAIXO e completa ACIMA
//console.log(bill([10,15,30], 0.2));

//==> Função Arrow:
//const bill = (products, tax) =>{
//    let total = 0;
//    for(let i = 0; i < products.length; i++){
//        total += products[i] + products[i] * tax;
//    }  
//  return total;
//}

//const total = bill([10,15,30], 0.2);
//console.log('total produtos e taxa: ', total);

// FUNCTIONS VS METHODS
//const name = 'shaun';

//functions
//const greet = () => 'hello';

//let resultOne = greet();
//console.log(resultOne);

//methods
//let resultTwo = name.toUpperCase();
//console.log(resultTwo);
 