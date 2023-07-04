const Uebermich = require('../models/Uebermich')
const ueberMichPost = async (req,res)=>{
    const newUebermich = new Uebermich(req.body);
    try{
        const savedUebermich = await newUebermich.save();
        res.status(200).json(savedUebermich);
    } catch(error){
        res.status(403)
        throw new Error("Das hat nicht geklappt")
    }
}
const ueberMichPut = async (req,res)=>{
    try{
        const updatedUebermich = await Uebermich.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new:true})
        res.status(200).json(updatedUebermich)
    } catch(error){
        res.status(404)
        throw new Error("Nicht gefunden")
    }
}
const ueberMichDelete = async (req,res)=>{
    try{
        await Uebermich.findByIdAndDelete(req.params.id)
        res.status(200).json(`Uebermich mit id ${req.params.id} wurde gelöscht`)
    } catch(error){
        res.status(404)
        throw new Error("Nicht gefunden")
    }
}
const ueberMichGet = async (req,res)=>{
    try{
        const getUebermich = await Uebermich.findById(req.params.id)
        res.status(200).json(getUebermich)
    } catch(error){
        res.status(404)
        throw new Error("Nicht gefunden")
    }
}
const ueberMichGetAll = async (req,res)=>{
    try{
        const getAllUebermich = await Uebermich.find()
        res.status(200).json(getAllUebermich)
    } catch(error){
        res.status(404)
        throw new Error("Nicht gefunden")
    }
}
module.exports = {
    ueberMichPost,
    ueberMichPut,
    ueberMichDelete,
    ueberMichGet,
    ueberMichGetAll,
}