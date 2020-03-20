/*
  manipular partes de variaveis e arrays
*/

//COM ARRAY
var arr = ['apple','banana','orange'];

var [apple,banana,orange] = arr;

console.log(apple);

/*
 é possível fazer com multidimensionais também, coloca a var dentro do [] equivalente 

 também é possível utilizar com objetos
 */

 //COM OBJETOS
 var obj = {
     name: 'Rebeca'
 };
 var {name} = obj;
 //se quiser com outro nome: {name: name2}
 console.log(name);

 /* 
   é possível fazer com nested objects
 */

 //NESTED OBJECTS
 var obj2 = {
    name: 'Rebeca',
    props: {
        age: 20,
        favoriteColors: ['black','red']
    }
};

      //dois niveis de destructuring
var{props: {age, favoriteColors: [color1,color2]}} = obj2;
console.log(age);
console.log(color1+' '+color2);


//COM ARRAY DE OBJETOS

var arrAnimals = [{name: 'Dunga',type: 'Dog'}];
var[{name: nameAnimal}] = arrAnimals;

console.log(nameAnimal);

// pode fazer com default values atribuindo por exemplo [a,b] = [0,0]