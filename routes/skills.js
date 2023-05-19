const express = require('express');
const router = express.Router();

const { index, show, addSkill, createSkill, editSkill, updateSkill, deleteSkill } = require('../controllers/skills');

router.get('/', index);

router.get('/new', addSkill);

router.get('/:selected', show);

router.get('/:selected/edit', editSkill);

router.post('/', createSkill);

router.put('/:skill', updateSkill);  

router.delete('/:skill', deleteSkill);

module.exports = router;