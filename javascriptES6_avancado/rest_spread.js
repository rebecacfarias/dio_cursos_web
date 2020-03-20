//p/ numero de args indefinido, rest operator
function sum(...args){
  console.log(args);
  return args.reduce((acc,value)=>acc+value,0); 
}
// arguments n existem em arrow functions, logo deve ser utilizado o rest
// pode também definir parametros e pegar o restante, ex: (a,b,...rest)

const multiply = (...args) => args.reduce((acc,value) => acc*value,1);

console.log(sum(5,5,5));
console.log(multiply(5,5,5));

/* o spread pega um array e transforma em argumentos
  pode ser utilizado tb em strings, objetos literais e objetos iteraveis
  pode usar o spread tb na concatenação de arrays ex novoArray = [...array,4,5,6]; os elementos de array entram no novoArray
*/

const str = 'Digital Innovation One';

function logArgs(...args){
    console.log(args);
}

logArgs(...str);

//EM OBJETOS LITERAIS:

const obj = {
    prop1: 'oi'
};

const obj2 = {
    ...obj,  //apenas para construir novos obj, a ordem das chaves faz diferença
    prop2: ', tudo bem?'
}
// cuidado que quando o ... é usado para clonar obj, se houver nested objects a referencia eh a mesma e muda o obj dos dois
// mas pode ser resolvido fazendo spread do subobjeto tb
console.log(obj2.prop1+obj2.prop2);

