/**
  CALLBACKS E PROMISES
 */

//PROMISES
const doSomethingPromise = () => new Promise((resolve,reject)=> {
    //throw new Error('Something went wrong');
    setTimeout(function(){
        resolve('First Data');
    },1000);
});

const doOtherThingPromise = () => new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve('Second Data');
    },1000);
});

//promises em paralelo
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});

//uma de cada vez
doSomethingPromise()
    .then(data => {
        console.log(data);
        return doOtherThingPromise(); 
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log('Ops',error)); // o erro sera tratado por esse unico catch

//A QUE FOR RESOLVIDA PRIMEIRO
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
});


/**
 AS PROMISES TEM 3 ESTADOS:
   pending - pendente em execução
   , fulfilled - terminou de executar
    e rejected - aconteceu erro
 
 */







//CALLBACK
 function doSomething(callback){
     setTimeout(function(){
         callback('First Data');
     },1000);
 }

 function doOtherThing(callback){
     setTimeout(function(){
         callback('Second Data');
     },1000);
 }

 function doAll(){
    try{
     doSomething(function(data){
         var processedData = data.split('');
        try{
         doOtherThing(function(data2){
             var processedData2 = data2.split('');
            try{
            setTimeout(function(){
              console.log(processedData, processedData2);
            },1000);
        } catch(err){
            //handle error
        }//fim de trycatch
         });
        } catch(err){
            //handle error
        }//fim de trycatch
     });
    } catch(err){
        //handle error
    }//fim de trycatch
 }

 doAll();