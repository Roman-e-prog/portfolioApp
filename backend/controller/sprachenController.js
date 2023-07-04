const Sprachen = require('../models/Sprachen');
const sprachenPost = async (req,res)=>{
    const newSprache = new Sprachen(req.body);
    try{
        const savedSprache = await newSprache.save();
        res.status(200).json(savedSprache);
    } catch(error){
        res.status(403)
        console.log(error);
        throw new Error("Das hat nicht geklappt")
    }
}
const sprachenPut = async (req,res)=>{
    try{
        const updatedSprache = await Sprachen.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new:true})
        res.status(200).json(updatedSprache)
    } catch(error){
        res.status(404)
        console.log(error)
        throw new Error("Nicht gefunden")
    }
}
const sprachenDelete = async (req,res)=>{
    try{
        await Sprachen.findByIdAndDelete(req.params.id)
        res.status(200).json(`Sprache mit id ${req.params.id} wurde gelöscht`)
    } catch(error){
        res.status(404)
        throw new Error("Nicht gefunden")
    }
}
const sprachenGet = async (req,res)=>{
    try{
        const getSprachen = await Sprachen.findById(req.params.id)
        res.status(200).json(getSprachen)
    } catch(error){
        res.status(404)
        throw new Error("Nicht gefunden")
    }
}
const sprachenGetAll = async (req,res)=>{
    try{
        const getAllSprachen = await Sprachen.find()
        res.status(200).json(getAllSprachen)
    } catch(error){
        res.status(404)
        throw new Error("Nicht gefunden")
    }
}
module.exports = {
    sprachenPost,
    sprachenPut,
    sprachenDelete,
    sprachenGet,
    sprachenGetAll,
}