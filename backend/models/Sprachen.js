 const mongoose = require('mongoose');

const SprachenSchema = new mongoose.Schema({
    programmingLanguage:{type:String, required:true},
    stars:{type:Number, required:true},
    
}, {timestamps:true})

module.exports = mongoose.model("Sprachen", SprachenSchema);