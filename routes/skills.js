const express = require('express');


const router = express.Router();


const skills_controller = require('../controllers/skills_controller');


console.log('router loaded');



// mapping router
router.get('/skills', skills_controller.skills);



module.exports = router;