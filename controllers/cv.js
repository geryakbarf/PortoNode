//Constanta pemanggilan model
const Identity = require('../models/identitas');
const Skill = require('../models/kemampuan');
const History = require('../models/riwayat');
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
                        res.render('cv', {
                            pageTitle: 'CV Saya',
                            identity: identity,
                            kemampuan: skill,
                            sekolah: historySchool,
                            perusahaan: historyWork
                        });
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

