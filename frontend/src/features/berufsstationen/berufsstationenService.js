import axios from 'axios';

const API_URL = `${window.location.origin}/api/berufsstationen/`;

const createBerufsstationen = async (berufsstationenData, token)=>{
    const config ={
        headers:{
            'Content-Type':'application/json',
            token: `Bearer ${token}`,
        }
    }
    const response = await axios.post(API_URL, berufsstationenData, config);
    return response.data;
}
const updateBerufsstationen = async (updateData, token)=>{
    const config ={
        headers:{
            token: `Bearer ${token}`,
        }
    }
    const response = await axios.put(API_URL + updateData.id, updateData.berufsstationenData, config);
    return response.data;
}
const deleteBerufsstationen = async (berufsstationenId, token)=>{
    const config ={
        headers:{
            token: `Bearer ${token}`,
        }
    }
    const response = await axios.delete(API_URL + berufsstationenId, config);
    return response.data;
}
const getBerufsstation = async (berufsstationenId)=>{
    const getUrl = `find/${berufsstationenId}`
    const response = await axios.get(API_URL + getUrl);
    return response.data;
}
const getAllBerufsstationen = async ()=>{
    const response = await axios.get(API_URL + 'find/');
    return response.data;
}
const berufsstationenService = {
    createBerufsstationen,
    updateBerufsstationen,
    deleteBerufsstationen,
    getBerufsstation,
    getAllBerufsstationen,
}
export default berufsstationenService;