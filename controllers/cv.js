//Constanta pemanggilan model
const Identity = require('../models/identitas');
const Skill = require('../models/kemampuan');
const History = require('../models/riwayat');
const Introduction = require('../models/introduction');
//method untuk menampilkan halaman cv
exports.showCV = (req, res, next) => {
    Identity.findAll()
        .then(identity => {
            Skill.findAll().then(skill => {
                History.findAll({
                    where: {
                        tipe: "Perusahaan"
                    }
                }).then(historyWork => {
                    History.findAll({
                        where: {
                            tipe: "Sekolah"
                        }
                    }).then(historySchool => {
                        Introduction.findAll({
                            where: {
                                id: 1
                            }
                        }).then(intro => {
                            res.render('cv', {
                                pageTitle: 'CV Saya',
                                identity: identity,
                                kemampuan: skill,
                                sekolah: historySchool,
                                perusahaan: historyWork,
                                introduction: intro
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
            });
        }).catch(err => {
        console.log(err);
    });
}

