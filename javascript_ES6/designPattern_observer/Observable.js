class Observable{
    //manter lista de observables
    constructor(){
        this.observers = [];
    }
    // adição de subscribes no observer
    subscribe(f){
        this.observers.push(f);
    }
    // ideia de remover observer da lista
    unsubscribe(f){
        this.observers = this.observers.filter(subscriber => subscriber!==f);
    }
    //notificar, recebe um dado e pra cada observable chama a função passando o dado
    notify(data){
        this.observers.forEach(observer=>observer(data));
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');
