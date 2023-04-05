const express = require('express');

const router = express.Router();
const home_controller =require('../controllers/home_controller');

console.log('router loaded');




router.get('/', home_controller.home)

//
router.use('/users', require('./users'));

//
router.get('/skills', require('./skills'));

router.get('/projects', require('./projects'));

// it will exports router 
module.exports = router;