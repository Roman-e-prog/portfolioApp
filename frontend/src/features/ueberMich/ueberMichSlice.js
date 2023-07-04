import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import ueberMichService from './ueberMichService';
const initialState = {
    ueberMich: {},
    allUeberMich:[],
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:"",
}
export const createUeberMich = createAsyncThunk('/ueberMich/create', async (ueberMichData, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.accessToken;
        return await ueberMichService.createUeberMich(ueberMichData, token);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const updateUeberMich = createAsyncThunk('/ueberMich/update', async (updateData, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.accessToken;
        return await ueberMichService.updateUeberMich(updateData, token);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const deleteUeberMich = createAsyncThunk('/ueberMich/delete', async (ueberMichId, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.accessToken;
        return await ueberMichService.deleteUeberMich(ueberMichId, token);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const getUeberMich = createAsyncThunk('/ueberMich/find', async (ueberMichId, thunkAPI)=>{
    try{
        return await ueberMichService.getUeberMich(ueberMichId);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const getAllUeberMich = createAsyncThunk('/ueberMich/findAll', async (_, thunkAPI)=>{
    try{
        return await ueberMichService.getAllUeberMich();
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const ueberMichSlice = createSlice({
    name:"ueberMich",
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers: (builder)=>{
        (builder)
        .addCase(createUeberMich.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(createUeberMich.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.allUeberMich.push(action.payload)
        })
        .addCase(createUeberMich.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(updateUeberMich.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(updateUeberMich.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.ueberMich = action.payload;
        })
        .addCase(updateUeberMich.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(deleteUeberMich.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(deleteUeberMich.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.allUeberMich.filter((item)=>item._id !== action.payload.id)
        })
        .addCase(deleteUeberMich.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getUeberMich.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getUeberMich.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.ueberMich = action.payload;
        })
        .addCase(getUeberMich.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getAllUeberMich.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getAllUeberMich.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.allUeberMich = action.payload;
        })
        .addCase(getAllUeberMich.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})
export const {reset} = ueberMichSlice.actions;
export default ueberMichSlice.reducer;