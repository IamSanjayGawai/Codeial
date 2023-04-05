const express = require('express');

const router = express.Router();
const home_controller =require('../controllers/home_controller');

console.log('router loaded')




router.get('/', home_controller.home)

// it will exports router 
module.exports = router;