const storeModel = require('mongoose').model('store');
const generate = require('../utilitys/generate.utility');
const handle = require('../utilitys/handle');

exports.getStoreID = function (req, res, next, storeid) {
    req.storeID = storeid;
    next();
};

exports.createStore = function (req, res) {
    req.body.storeSerial = generate.serialNumber('ST', 12);
    var store = new storeModel(req.body);
    store.save(function (err, result) {
        if (err) {
            res.status(404).json(handle.error(err));
        } else {
            res.json(handle.success(result));
        }
    });
};

exports.getDeatil = function (req, res) {
    storeModel.findById(req.storeID, 'name businessType desc pic')
        .exec(function (err, result) {
            if (err) {
                res.status(404).json(handle.error(err));
            } else {
                res.json(handle.success(result));
            }
        });
};