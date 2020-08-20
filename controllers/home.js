const Skill = require('../models/kemampuan');
const Project = require('../models/project');

//method untuk menampilkan halaman beranda
exports.showHome = (req, res, next) => {
    Skill.findAll().then(skill => {
        Project.findAll({limit: 3}).then(project => {
            res.render('home', {
                pageTitle: 'Beranda',
                kemampuan: skill,
                project: project
            });
        }).catch(err => {
            console.log(err)
        });
    }).catch(err => {
        console.log(err)
    })
}
