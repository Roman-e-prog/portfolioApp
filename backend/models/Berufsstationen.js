const mongoose = require('mongoose');

const BerufsstationenSchema = new mongoose.Schema({
    entry:{type:String, required: true},
    close:{type:String, required: true},
    textBold:{type:String, required: true},
    textNormal:{type:String, required: true},
}, {timestamps:true})

module.exports = mongoose.model("Berufsstationen", BerufsstationenSchema);