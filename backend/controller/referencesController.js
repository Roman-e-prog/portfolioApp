const Referenzen = require('../models/References')
const referenzenPost = async (req,res)=>{
    const newReferenz = new Referenzen({
        projectTitle:req.body.projectTitle,
        projectPurpose:req.body.projectPurpose,
        projectDescription:req.body.projectDescription,
        generalInformation:req.body.generalInformation,
        structureList:req.body.structureList.split(','),
        link:req.body.link,
    });
    try{
        const savedReferenz = await newReferenz.save();
        res.status(200).json(savedReferenz);
    } catch(error){
        res.status(403)
        throw new Error("Das hat nicht geklappt")
    }
}
const referenzenPut = async (req,res)=>{
    try{
        const updateReferenzData = {
            projectTitle: req.body.projectTitle,
            projectPurpose:req.body.projectPurpose,
            projectDescription:req.body.projectDescription,
            generalInformation:req.body.generalInformation,
            structureList: typeof req.body.structureList === "string" ? req.body.structureList.split(',') : req.body.structureList,
            link:req.body.link,
        }
        const updatedReferenz = await Referenzen.findByIdAndUpdate(req.params.id, updateReferenzData, {new:true})
        res.status(200).json(updatedReferenz)
    } catch(error){
        res.status(404)
        console.log(error);
        throw new Error("Nicht gefunden")
    }
}
const referenzenDelete = async (req,res)=>{
    try{
        await Referenzen.findByIdAndDelete(req.params.id)
        res.status(200).json(`Referenz id ${req.params.id} wurde gelöscht`)
    } catch(error){
        res.status(404)
        throw new Error("Nicht gefunden")
    }
}
const referenzenGet = async (req,res)=>{
    try{
        const getReferenz = await Referenzen.findById(req.params.id)
        res.status(200).json(getReferenz)
    } catch(error){
        res.status(404)
        throw new Error("Nicht gefunden")
    }
}
const referenzenGetAll = async (req,res)=>{
    try{
        const getAllReferenzen = await Referenzen.find()
        res.status(200).json(getAllReferenzen)
    } catch(error){
        res.status(404)
        throw new Error("Nicht gefunden")
    }
}
module.exports = {
    referenzenPost,
    referenzenPut,
    referenzenDelete,
    referenzenGet,
    referenzenGetAll,
}