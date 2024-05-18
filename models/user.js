const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        discord: Number,
        uuid: String,
    },
    {
        timestamps: true,
        collection: "users"
    }
);

const userData = mongoose.model('users', userSchema);

module.exports = userData;