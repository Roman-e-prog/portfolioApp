const mongoose = require('mongoose');

const ReferenzenSchema = new mongoose.Schema({
    projectTitle:{type:String, required: true},
    projectPurpose:{type:String, required: true},
    projectDescription:{type:String, required: true},
    generalInformation:{type:String, required: true},
    structureList:{type:[{type:String}], required: true},
    link:{type:String, required: true},
}, {timestamps:true})

module.exports = mongoose.model("Referenzen", ReferenzenSchema);