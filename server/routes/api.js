import express from 'express';

const usercontrollers = require('../controllers/usercontrollers.js');

const router = express.Router();

// test GET route
router.get('/users/signup', (req, res) => {
  res.send({ testobject: 'hi' });
});

// routes to allow user SIGN UP
router.post('/users/signup', usercontrollers.addUser);

// router to allow user SIGN IN
router.post('/users/signin', usercontrollers.login);


// routes to allow admin ADD BOOKS
router.post('/books', usercontrollers.addUser);

// router.put('books/:bookid', );

// router.get('books', );

// router.get('books/:bookid', );

// router.get('users/:userid/books?returned=false', );

// router.post('users/:userid/books', );

// router.put('users/:userid/books', );

module.exports = { router };

