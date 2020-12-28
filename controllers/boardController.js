const messages = require('../models/Messages');

function index(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
}

function new_get(req, res, next) {
  res.render('form', { title: 'New Message' });
}

function new_post(req, res, next) {
  const newMessage = {
    user: req.body.user,
    text: req.body.text,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect('/');
}

module.exports = {
  index,
  new_get,
  new_post,
};
