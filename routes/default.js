//Constanta untuk pemanggilan modul
const express = require('express');
const router = express.Router();
const cvController = require('../controllers/cv');
const projectController = require('../controllers/project');
//Konfigurasi route
router.get('/', cvController.showHome);
router.get('/project', projectController.showProject);
router.get('/cv',cvController.showCV);
//Export const router menjadi module
module.exports = router;
