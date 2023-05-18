const express = require('express');
const router = express.Router();

const { index, show } = require('../controllers/skills');

router.get('/', index);

router.get('/:selected', show);

module.exports = router;