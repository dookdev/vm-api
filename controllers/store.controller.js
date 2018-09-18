const storeModel = require('mongoose').model('store');
const handle = require('../utilitys/handle');

exports.getStoreID = function (req, res, next, storeid) {
    req.storeID = storeid;
    next();
};

exports.getDeatil = function (req, res) {
    storeModel.findById(req.body.storeID, 'name businessType desc pic')
        .exec(function (err, result) {
            if (err) {
                res.status(404).json(handle.error(err));
            } else {
                res.json(handle.success(result));
            }
        });
};