// EventEmitter 
// outra forma de lidar com programação assíncrona

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data){
        this.emit('User logged',data);
    }
}

const users = new Users();

// tem .once também
users.on('User logged', data => {
    console.log(data);
});

Users.userLogged({user: 'Rebeca Farias'});


//tem tb o EventTarget

