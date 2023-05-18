const database = require('../db');

function getAll(){
    return database;
}

function getOne(id){
    return database.find(person => person.id === parseInt(id));
}

module.exports = {
    getAll,
    getOne
}