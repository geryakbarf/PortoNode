const Project = require('../models/project');
//method untuk menampilkan halaman project
exports.showProject = (req, res, next) => {
    Project.findAll().then(project =>{
        res.render('project', {
            pageTitle: 'Project Saya',
            project: project
        });
    }).catch(err =>{
        console.log(err)
    });
}
