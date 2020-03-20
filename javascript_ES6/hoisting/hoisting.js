//evitar erros ao usar variaveis/funcoes indefinidas

function fn(){
   // log('Hoisting de função');
    function log(value){
        console.log(value);
    }

    log('Hoisting de função');
}

fn();