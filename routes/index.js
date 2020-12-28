var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Message' });
});

router.post('/new', (req, res, next) => {
  const newMessage = {
    user: req.body.user,
    text: req.body.text,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect('/');
});

module.exports = router;
