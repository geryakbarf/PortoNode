const Skill = require('../models/kemampuan');
const Project = require('../models/project');
const Introduction = require('../models/introduction');

//method untuk menampilkan halaman beranda
exports.showHome = (req, res, next) => {
    Skill.findAll().then(skill => {
        Project.findAll({limit: 3}).then(project => {
            Introduction.findAll({
                where: {
                    id: 1
                }
            }).then(intro1 => {
                Introduction.findAll({
                    where: {
                        id: 2
                    }
                }).then(intro2 => {
                    res.render('home', {
                        pageTitle: 'Beranda',
                        kemampuan: skill,
                        project: project,
                        introSatu: intro1,
                        introDua: intro2
                    });
                }).catch(err => {
                    console.log(err)
                })
            }).catch(err => {
                console.log(err)
            })
        }).catch(err => {
            console.log(err)
        });
    }).catch(err => {
        console.log(err)
    })
}
