const database = require('../db');

function getAll(){
    return database.skills;
}

function getOne(selected){
    return database.skills.find(skill => skill === selected)
}

function createOne(newSkill){
    database.skills.push(newSkill);
}

module.exports = {
    getAll,
    getOne,
    createOne
}