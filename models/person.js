const database = require('../db');

function getAll(){
    return database.team;
}

function getOne(id){
    return database.team.find(person => person.id === parseInt(id));
}

module.exports = {
    getAll,
    getOne
}