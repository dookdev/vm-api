module.exports = function (mongoose) {
    const Schema = mongoose.Schema;

    var versionScrema = new Schema({
        version: {
            type: String,
            trim: true,
            required: [true, 'version is required']
        },
        contents: {
            type: [{
                title: {
                    type: String,
                    trim: true,
                    required: [true, 'contents.title is required']
                },
                detail: {
                    type: String,
                    trim: true,
                    required: [true, 'contents.detail is required']
                },
                imgs: [{
                    type: String,
                    trim: true,
                    default: []
                }]
            }],
            required: [true, 'contents is required']
        },
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