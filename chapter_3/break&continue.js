// break and continue

const scores = [50, 25, 0, 100, 20, 10];

for(let i = 0; i < scores.length; i++){
    if(scores[i] === 0){
        continue;
    }

    console.log('tour score ', scores[i]);

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }
} 

const grade = 'P';

switch(grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B' :
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!')    
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;  
    default:
        console.log('not a valid grade');    
}

//code block - de uma chave({) até outra chave(})