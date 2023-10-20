const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name: {
        type: String,
    },
    emails: {
        type:  [String],
    }
});

module.exports = mongoose.model('users', UserSchema);