const students = [
    {
        name: 'Judite',
        grade: 4
    },
    {
        name: 'Jeane',
        grade: 7
    },
    {
        name: 'Janete',
        grade: 10
    }
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade>=7);
}

console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos: ');
console.log(students);