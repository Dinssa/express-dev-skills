const { getAll, getOne, createOne, updateOne } = require('../models/skill');

function index(req, res, next) {
    res.render('skills/index', { title: 'All Skills', skills: getAll(), backLink: '/' });
}

function show(req, res, next) {
    res.render('skills/show', { title: 'Skill', skill: getOne(req.params.selected), backLink: '/skills' });
}

function addSkill(req, res, next) {
    res.render('skills/new', { title: 'Add Skill', backLink: '/skills' });    
}

function createSkill(req, res, next) {
    createOne(req.body.skill);
    res.redirect('/skills');
}

function editSkill(req, res, next) {
    res.render('skills/edit', { title: 'Edit Skill', skill: getOne(req.params.selected), backLink: '/skills' });
}

function updateSkill(req, res, next) {
    updateOne(req.params.skill, req.body.skill);
    res.redirect(`/skills/${req.body.skill}`);
}

module.exports = {
    index,
    show,
    addSkill,
    createSkill,
    editSkill,
    updateSkill
}