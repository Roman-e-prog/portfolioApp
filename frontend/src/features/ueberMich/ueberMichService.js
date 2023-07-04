import axios from 'axios';

const API_URL = 'http://localhost:5000/api/ueberMich/';

const createUeberMich = async (ueberMichData, token)=>{
    const config ={
        headers:{
            'Content-Type':'application/json',
            token: `Bearer ${token}`,
        }
    }
    const response = await axios.post(API_URL, ueberMichData, config);
    return response.data;
}
const updateUeberMich = async (updateData, token)=>{
    const config ={
        headers:{
            token: `Bearer ${token}`,
        }
    }
    const response = await axios.put(API_URL + updateData.id, updateData.ueberMichData, config);
    return response.data;
}
const deleteUeberMich = async (ueberMichId, token)=>{
    const config ={
        headers:{
            token: `Bearer ${token}`,
        }
    }
    const response = await axios.delete(API_URL + ueberMichId, config);
    return response.data;
}
const getUeberMich = async (ueberMichId)=>{
    const getUrl = `find/${ueberMichId}`
    const response = await axios.get(API_URL + getUrl);
    return response.data;
}
const getAllUeberMich = async ()=>{
    const response = await axios.get(API_URL + 'find/');
    return response.data;
}
const ueberMichService = {
    createUeberMich,
    updateUeberMich,
    deleteUeberMich,
    getUeberMich,
    getAllUeberMich,
}
export default ueberMichService;