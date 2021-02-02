//exemple 1 - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort();//coloca os nomes em ordem alfabetica
names.reverse(); //troca a ordem
console.log(names);

//exemple 2 - sorting numbers
const scoresEx2 = [10, 50, 20, 5, 35, 70, 45];

//scoresEx2.sort();//coloca o numero em ordem crescente
//scoresEx2.reverse();//is is without ".sort" just change the order of here
//console.log(scoresEx2);

scoresEx2.sort((a,b) => a - b);
console.log(scoresEx2);


//example 3 - sorting objects
const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
];

players.sort((a,b) => {
    if(a.score > b.score){
        return -1;
    }else if (b.scorre > a.score){
        return 1;
    } else {
        return 0;
    }
});

players.sort((a,b) => b.score - a.score);

console.log(players);