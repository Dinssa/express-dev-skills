const { getAll, getOne } = require('../models/person');

function index(req, res, next) {
    res.render('team/index', { team: getAll() });
}

function show(req, res, next) {
    res.render('team/show', { person: getOne(req.params.id) });
}

module.exports = {
    index,
    show
}