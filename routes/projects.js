const express = require('express');


const router = express.Router();

const projects_controller = require('../controllers/projects_controller');


// mapping router
router.get('/projects', projects_controller.projects);



module.exports = router;