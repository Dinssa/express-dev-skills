const database = require('../db');

function getAll(){
    return database.skills;
}

function getOne(selected){
    return database.skills.find(skill => skill === selected)
}

module.exports = {
    getAll,
    getOne
}