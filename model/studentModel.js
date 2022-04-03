const mongoose = require('mongoose');

const schema = mongoose.Schema({
    firstName: {
        type: String,
        minLength: [3, 'Min. 3 characters'],
        maxLength: [100, 'Max 100 characters'],
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        validate: {
            validator: v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v),
            message: () => 'Invalid Email'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    
    createdAt: Date,
    updatedAt: { type: Date, default: Date.now() }
});

const studentModel = mongoose.model('user',schema);

schema.index({ firstName: 1 });
schema.index({ lastName: 1 });

module.exports = studentModel;