var express = require('express');
var router = express.Router();
var board_controller = require('../controllers/boardController');

/* GET home page. */
router.get('/', board_controller.index);

// GET new message page
router.get('/new', board_controller.new_get);

// POST new message page
router.post('/new', board_controller.new_post);

module.exports = router;
