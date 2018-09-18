module.exports = function (mongoose) {
    const Schema = mongoose.Schema;

    var storeScrema = new Schema({
        storeSerial: {
            type: String,
            required: [true, 'storeSerial is required'],
            trim: true
        },
        name: {
            type: String,
            required: [true, 'name is required'],
            trim: true
        },
        businessType: {
            type: String,
            required: [true, 'businessType is required'],
            trim: true
        },
        desc: {
            type: String,
            default: '',
            trim: true
        },
        pic: {
            public_id: {
                type: String,
                default: Date.now
            },
            imgURL: {
                type: String,
                default: 'https://image.flaticon.com/icons/svg/321/321883.svg',
                trim: true
            }
        },
        emailList: [{
            type: String,
            default: []
        }],
        telList: [{
            type: String,
            default: []
        }],
        lineList: [{
            type: String,
            default: []
        }],
        facebookList: [{
            type: String,
            default: []
        }],
        twitterList: [{
            type: String,
            default: []
        }],
        instagramList: [{
            type: String,
            default: []
        }],
        youtubeList: [{
            type: String,
            default: []
        }],
        lat: {
            type: String,
            default: '0',
            trim: true
        },
        lng: {
            type: String,
            default: '0',
            trim: true
        },
        address: {
            type: String,
            required: [true, 'address is required'],
            trim: true
        },
        district: {
            type: String,
            required: [true, 'district is required'],
            trim: true
        },
        province: {
            type: String,
            required: [true, 'province is required'],
            trim: true
        },
        postCode: {
            type: String,
            required: [true, 'postCode is required'],
            trim: true
        },
        followNum: {
            type: Number,
            min: 0,
            default: 0,
            trim: true
        },
        views: {
            type: Number,
            min: 0,
            default: 0,
            trim: true
        },
        numberOfProduct: {
            type: Number,
            min: 0,
            default: 0,
            trim: true
        },
        storeOpen: {
            type: Boolean,
            default: true
        },
        adsPosition: [{
            status: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'nolmal'
            },
            specialImg: {
                type: String,
                default: ''
            },
            priority: {
                type: Number,
                min: 0,
                default: 0
            }
        }],
        closeStatus: {
            type: Boolean,
            default: false
        },
        createDate: {
            type: Date,
            default: Date.now
        },
        updateDate: {
            type: Date,
            default: Date.now
        },
        lastActivate: {
            type: Date,
            default: Date.now
        },
        userID: {
            type: Schema.ObjectId,
            ref: 'user',
            required: [true, 'userID ref is required'],
            trim: true
        }
    });

    mongoose.model('store', storeScrema);
};