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
                required: true,
                default: ''
            },
            detail: {
                type: String,
                trim: true,
                required: true,
                default: ''
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

    versionScrema.path('contents').validate(function (contents) {
        if (!contents) { return false }
        else if (contents.length === 0) { return false }
        return true;
    }, 'version needs to have at least one content');

    mongoose.model('version', versionScrema);
};