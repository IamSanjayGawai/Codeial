const express = require('express');

const router = express.Router();
const users_controller =require('../controllers/users_controller');

console.log('router loaded')



// mapping router
router.get('/profile', users_controller.profile);

// it will exports router 
module.exports = router;