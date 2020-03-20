/*
SYMBOL:
 é uma maneira de gerar um identificador unico
 pode ser utilizado para gerar propriedades 'privadas'
 

const uniqueId = Symbol(); // se passar um valor eh apenas para saber do que se trata

const obj = {
    [uniqueId]: 'Rebeca'
};

console.log(obj);
console.log(Object.keys(obj));

___________________________
 WELL KNOWN SYMBOLS



//ITERATOR
const obj2 = {
    [Symbol.iterator](){}
}

const arr = [1,2,3,4];
const it = arr[Symbol.iterator]();
//console.log(it.next()); a cada next mostra um valor do array

while(true){
    let {value,done} = it.next();
    if(done)
        break;
    console.log(value);
}
// EQUIVALENTE A:
for(let value of arr){
    console.log(value);
}



//tornar um objeto iteravel
const obj = {
    values: [1,2,3,4],
    [Symbol.iterator](){
        let id = 0;

        return{
            next:() =>{
                i++;
                return { 
                   value: this.values[i],
                   done: i>this.values.length
                }
            }
        }

    }
}

const it = obj[Symbol.iterator]();

console.log(it.next());
*/


//TORNAR ITERAVEL COM GENERATOR 
const obj = {
    values: [1,2,3,4],
    *[Symbol.iterator](){
      for(var i = 0;i<this.values.length;i++){
          yield this.values[i];
      }      
    }
};

for(let value of obj){
    console.log(value);
}
