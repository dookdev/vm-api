const storeCtrl = require('../controllers/store.controller');
const auth = require('../config/auth');

module.exports = function (router) {
    router.route('/store/:storeid')
        .get(auth.verify, storeCtrl.shopData);

    router.param('storeid', storeCtrl.getStoreID);
};