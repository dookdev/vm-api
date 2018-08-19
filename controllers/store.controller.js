exports.getStoreID = function (req, res, next, storeid) {
    req.storeID = storeid;
    next();
};

exports.shopData = function (req, res) {
    res.json({ data: req.storeID });
};