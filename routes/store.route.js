const storeCtrl = require('../controllers/store.controller');
const auth = require('../config/auth');

module.exports = function (router) {
    router.route('/store')
        .post(auth.verify, storeCtrl.createStore);

    router.route('/store/:storeid')
        .get(auth.verify, storeCtrl.getDeatil);

    router.param('storeid', storeCtrl.getStoreID);
};