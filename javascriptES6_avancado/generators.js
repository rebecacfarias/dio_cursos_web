
/* EX 1: 
function* hello(){
    console.log('Hello');
    yield;

    console.log('from');
    const value = yield;

    console.log(value);
}

const it = hello();

console.log(it.next()); // executa um trecho da func a cada next
// o value fica undefined, mas pode retornar um valor ao lado do yield;
// tam bem pode passar um valor dentro do next() para a func

console.log(it.next());
console.log(it.next('Outside'));

*/



//OUTRO EXEMPLO

function* naturalNumbers(){
    let number = 0;
    while(true){
        yield number;
        number++;
    }
}

const it = naturalNumbers(); 
console.log(it.next());
console.log(it.next());
console.log(it.next());