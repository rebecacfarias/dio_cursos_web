/**
   entendendo conceitos: fetch, async await, eventemitter
 */

//1) FETCH
    //lidar com request
    //fetch ja gera uma promise
    //so da erro se aconteça um erro de rede
    //segundo arg é a config do request, por default é um get

 fetch('/data.json').then(responseStream => {
    if(responseStream.status === 200){
        return responseStream.json();
    }else {
        throw new Error('Request error');
    }
   })
   .then(data => {
         console.log(data);
     }).catch(err => {
         console.log('Erro: ',err);
     });
 
//2) ES7 - Async / Await
     //

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data');
    },1000);
});     

//await - aguarda resolução;
const simpleFunc = async () => {
    const data = await asyncTimer();
    const dataJSON = await fetch('/data.json').then(resStream => resStream.json());

    return dataJSON;  
};
// ja retorna uma promise resolvida
simpleFunc().then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});