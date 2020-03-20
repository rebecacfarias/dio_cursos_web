//AULA SOBRE TRATAMENTO DE ERROS E EXCEÇÕES

//podemos extender a classe Error
class  CustomError extends Error{
    constructor({message, data}){
        super(message);
        this.data = data;
    }
}

try{ //tenta executar
    const name = 'Rebeca Farias';
//disparar seu proprio erro:  
    const myError = new CustomError({
        message: 'My error message',
        data: {
            type: 'Server error' 
        }
    });
    throw myError;
} catch(err){ //se houver erro cai no catch, onde pode ser tratado e o código continua
    console.log('Error: ',err.message);
}finally{// comandos para executar, dando erro acima ou não;
    console.log('Continuou devido ao try catch');
}

