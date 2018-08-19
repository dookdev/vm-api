const notification = require('../utilitys/notification.utility');
const handle = require('../utilitys/handle');

exports.sendNotification = async function (req, res, next) {
    try {
        // await notification.send('aadda8b4-0239-4c90-8350-87a58c77b38c', 'ยินดีต้อนรับสู่ VMALL');
        await notification.send(req.device ? req.device : [], req.message ? req.message : '');
        next();
    } catch (error) {
        res.status(404).json(handle.error(error));
    }
};