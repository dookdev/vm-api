module.exports = function (mongoose) {
    const Schema = mongoose.Schema;

    var userScrema = new Schema({
        name: {
            type: String,
            trim: true,
            required: [true, 'name is required']
        },
        email: {
            type: String,
            trim: true,
            required: [true, 'email is required'],
            unique: [true, 'email must be unique']
        },
        tel: {
            type: String,
            trim: true,
            default: ''
        },
        liked: [{
            type: Schema.ObjectId,
            ref: 'product',
            trim: true,
            default: []
        }],
        favorite: [{
            type: Schema.ObjectId,
            ref: 'product',
            trim: true,
            default: []
        }],
        followed: [{
            type: Schema.ObjectId,
            ref: 'store',
            trim: true,
            default: []
        }],
        password: {
            type: String,
            trim: true,
            required: [true, 'password is required']
        },
        birthDay: {
            type: String,
            trim: true,
            default: ''
        },
        gender: {
            type: String,
            enum: ['ชาย', 'หญิง', 'male', 'female'],
            trim: true,
            required: [true, 'gender is required']
        },
        address: {
            type: String,
            trim: true,
            default: ''
        },
        pic: {
            public_id: {
                type: String,
                trim: true,
                default: Date.now
            },
            imgURL: {
                type: String,
                trim: true,
                default: 'default.svg'
            },
            sourceType: {
                type: String,
                enum: ['default', 'facebook', 'cloudinary'],
                trim: true,
                default: 'default'
            }
        },
        loginType: {
            type: String,
            enum: ['custom', 'facebook'],
            trim: true,
            default: 'custom'
        },
        token: {
            type: String,
            trim: true,
            default: ''
        },
        devices: [{
            type: String,
            trim: true,
            default: []
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

    mongoose.model('user', userScrema);
};