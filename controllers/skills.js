const { getAll, getOne } = require('../models/skill');

function index(req, res, next) {
    res.render('skills/index', { title: 'All Skills', skills: getAll(), backLink: '/' });
}

function show(req, res, next) {
    res.render('skills/show', { title: 'Skill', skill: getOne(req.params.selected), backLink: '/skills' });
}

module.exports = {
    index,
    show
}