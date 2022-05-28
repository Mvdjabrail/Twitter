const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    saveTwit:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Twit'
    }]
})


const User = mongoose.model("User", userSchema);

module.exports = User;