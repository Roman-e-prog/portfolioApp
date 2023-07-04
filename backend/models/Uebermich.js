const mongoose = require('mongoose');

const UbermichSchema = new mongoose.Schema({
    content:{type:String, required: true},
}, {timestamps:true})

module.exports = mongoose.model("Uebermich", UbermichSchema);