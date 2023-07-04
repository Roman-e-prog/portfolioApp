const Berufsstationen = require('../models/Berufsstationen');
const berufsstationenPost = async (req,res)=>{
    const newBerufsstation = new Berufsstationen(req.body);
    try{
        const savedBerufsstation = await newBerufsstation.save();
        res.status(200).json(savedBerufsstation);
    } catch(error){
        res.status(403)
        throw new Error("Das hat nicht geklappt")
    }
}
const berufsstationenPut = async (req,res)=>{
    try{
        const updatedBerufstation = await Berufsstationen.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new:true})
        res.status(200).json(updatedBerufstation)
    } catch(error){
        res.status(404)
        throw new Error("Nicht gefunden")
    }
}
const berufsstationenDelete = async (req,res)=>{
    try{
        await Berufsstationen.findByIdAndDelete(req.params.id)
        res.status(200).json(`Berufsstation id ${req.params.id} wurde gelöscht`)
    } catch(error){
        res.status(404)
        throw new Error("Nicht gefunden")
    }
}
const berufsstationenGet = async (req,res)=>{
    try{
        const getBerufsstation = await Berufsstationen.findById(req.params.id)
        res.status(200).json(getBerufsstation)
    } catch(error){
        res.status(404)
        throw new Error("Nicht gefunden")
    }
}
const berufsstationenGetAll = async (req,res)=>{
    try{
        const getAllBerufsstation = await Berufsstationen.find()
        res.status(200).json(getAllBerufsstation)
    } catch(error){
        res.status(404)
        throw new Error("Nicht gefunden")
    }
}
module.exports = {
    berufsstationenPost,
    berufsstationenPut,
    berufsstationenDelete,
    berufsstationenGet,
    berufsstationenGetAll,
}