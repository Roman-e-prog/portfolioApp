import axios from 'axios';

const API_URL = `${window.location.origin}/api/referenzen/`;

const createReferenzen = async (referenzenData, token)=>{
    const config ={
        headers:{
            'Content-Type':'application/json',
            token: `Bearer ${token}`,
        }
    }
    const response = await axios.post(API_URL, referenzenData, config);
    return response.data;
}
const updateReferenzen = async (updateData, token)=>{
    const config ={
        headers:{
            token: `Bearer ${token}`,
        }
    }
    const response = await axios.put(API_URL + updateData.id, updateData.referenzenData, config);
    return response.data;
}
const deleteReferenzen = async (referenzenId, token)=>{
    const config ={
        headers:{
            token: `Bearer ${token}`,
        }
    }
    const response = await axios.delete(API_URL + referenzenId, config);
    return response.data;
}
const getReferenzen = async (referenzenId)=>{
    const getUrl = `find/${referenzenId}`
    const response = await axios.get(API_URL + getUrl);
    return response.data;
}
const getAllReferenzen = async ()=>{
    const response = await axios.get(API_URL + 'find/');
    return response.data;
}
const referenzenService = {
    createReferenzen,
    updateReferenzen,
    deleteReferenzen,
    getReferenzen,
    getAllReferenzen,
}
export default referenzenService;