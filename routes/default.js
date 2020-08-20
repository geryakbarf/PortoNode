//Constanta untuk pemanggilan modul
const express = require('express');
const router = express.Router();
const cvController = require('../controllers/cv');
const projectController = require('../controllers/project');
const homeController = require('../controllers/home');
//Konfigurasi route
router.get('/', homeController.showHome);
router.get('/project', projectController.showProject);
router.get('/cv',cvController.showCV);
//Export const router menjadi module
module.exports = router;
