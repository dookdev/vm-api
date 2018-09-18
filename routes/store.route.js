const storeCtrl = require('../controllers/store.controller');
const auth = require('../config/auth');

module.exports = function (router) {
    router.route('/store/detail/:storeid')
        .get(auth.verify, storeCtrl.getDeatil);

    router.param('storeid', storeCtrl.getStoreID);
};