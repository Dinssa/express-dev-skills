const { getAll, getOne } = require('../models/person');

function index(req, res, next) {
    res.render('team/index', { title: 'Our Team', team: getAll(), backLink: '/' });
}

function show(req, res, next) {
    res.render('team/show', { title: 'Team Member', person: getOne(req.params.id), backLink: '/team' });
}

module.exports = {
    index,
    show
}