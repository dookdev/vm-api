const versionModel = require('mongoose').model('version');
const handle = require('../utilitys/handle');

exports.hello = function (req, res) {
    res.send('hello api');
};

exports.checkVersion = function (req, res) {
    versionModel.findOne().sort({ createDate: -1 }).exec(function (err, result) {
        if (err) {
            res.status(404).json(handle.error(err));
        } else {
            res.json(handle.success(result));
        }
    });
};

exports.createVersion = function (req, res) {
    var version = new versionModel(req.body);
    version.save(function (err, result) {
        if (err) {
            res.status(404).json(handle.error(err));
        } else {
            res.json(handle.success(result));
        }
    });
};