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
    
module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne
}