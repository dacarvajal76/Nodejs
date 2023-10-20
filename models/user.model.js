const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type:  [String],
    }
});

module.exports = mongoose.model('users', UserSchema);