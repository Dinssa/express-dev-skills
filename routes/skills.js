const express = require('express');
const router = express.Router();

const { index, show, addSkill, createSkill } = require('../controllers/skills');

router.get('/', index);

router.get('/new', addSkill);

router.get('/:selected', show);

router.post('/', createSkill);

module.exports = router;