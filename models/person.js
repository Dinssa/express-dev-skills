const database = require('../db');

function getAll(){
    return database;
}

function getOne(id){
    return database[id];
}

module.exports = {
    getAll,
    getOne
}