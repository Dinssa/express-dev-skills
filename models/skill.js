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

function updateOne(selected, updatedSkill){
    database.skills[database.skills.indexOf(selected)] = updatedSkill;
}

function deleteOne(selected){
    database.skills.splice(database.skills.indexOf(selected), 1);
}
    
module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne
}