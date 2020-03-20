const user = {
    name: 'Rebeca',
    lastName: 'Farias'
};

function getUserWithFullName(user){
    return {
        ...user,
        fullName: `${user.name} ${user.lastName};` //nova forma de concatenar, vai retornar um novo objeto com os mesmos atributos + fullName
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName); //retorne um novo objeto com os msm atributo +fullName