module.exports = function (mongoose) {
    const Schema = mongoose.Schema;

    var versionScrema = new Schema({
        version: {
            type: String,
            trim: true,
            required: true
        },
        contents: [{
            title: {
                type: String,
                trim: true,
                required: true
            },
            detail: {
                type: String,
                trim: true,
                required: true
            },
            imgs: [{
                type: String,
                trim: true,
                default: []
            }]
        }],
        createDate: {
            type: Date,
            trim: true,
            default: Date.now
        },
        updateDate: {
            type: Date,
            trim: true,
            default: Date.now
        }
    });

    mongoose.model('version', versionScrema);
};