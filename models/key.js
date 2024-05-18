const mongoose = require('mongoose');

const keySchema = new mongoose.Schema(
    {
        uses: Number,
        discord: Number,
        key: String,

    },
    {
        timestamps: true,
        collection: "api"
    }
);

keySchema.statics.incrementUsesBy1 = function(apiKey) {
    return this.findOneAndUpdate(
        { apiKey: apiKey },
        { $inc: { uses: 1 } },
        { new: true }
    ).exec();
};

const apiKey = mongoose.model('api', keySchema);

module.exports = apiKey;