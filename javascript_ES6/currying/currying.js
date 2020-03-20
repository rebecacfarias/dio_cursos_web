function soma(a,b){
    return function(b){
        return a+b;
    }
}
/* 
na primeira função, recebe o primeiro parametro
depois, vai recebendo o segundo
*/

const soma2 = soma(2);

console.log(soma(2));
console.log(soma(3));
console.log(soma(4));
console.log(soma(5));
