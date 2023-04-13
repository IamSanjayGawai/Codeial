const express = require('express');

const router = express.Router();
const users_controller =require('../controllers/users_controller');

console.log('router loaded')



// mapping router
router.get('/profile', users_controller.profile);
router.get('/sign-up', users_controller.signup)
router.get('/sign-in', users_controller.signin)

// calling create function from  users_controller for creating new signup 
router.post('/create', users_controller.create)

// it will exports router 
module.exports = router;