import axios from 'axios';

const API_URL = `${window.location.origin}/api/sprachen/`;

const createSprachen = async (sprachenData, token)=>{
    const config ={
        headers:{
            'Content-Type':'application/json',
            token: `Bearer ${token}`,
        }
    }
    const response = await axios.post(API_URL, sprachenData, config);
    return response.data;
}
const updateSprachen = async (updateData, token)=>{
    const config ={
        headers:{
            token: `Bearer ${token}`,
        }
    }
    const response = await axios.put(API_URL + updateData.id, updateData, config);
    return response.data;
}
const deleteSprachen = async (sprachenId, token)=>{
    const config ={
        headers:{
            token: `Bearer ${token}`,
        }
    }
    const response = await axios.delete(API_URL + sprachenId, config);
    return response.data;
}
const getSprachen = async (sprachenId)=>{
    const getUrl = `find/${sprachenId}`
    const response = await axios.get(API_URL + getUrl);
    return response.data;
}
const getAllSprachen = async ()=>{
    const response = await axios.get(API_URL + 'find');
    return response.data;
}
const sprachenService = {
    createSprachen,
    updateSprachen,
    deleteSprachen,
    getSprachen,
    getAllSprachen,
}
export default sprachenService;