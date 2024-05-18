const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
    {
        string: String,
        cute_name: String,
        uuid: String,
        username: String,
        data: Object
    },
    {
        timestamps: true,
        collection: "profiles"
    }
);

const cachedProfile = mongoose.model('profiles', profileSchema);

module.exports = cachedProfile;