import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import referenzenService from './referenzenService';
const initialState = {
    referenz: {},
    allReferenzen:[],
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:"",
}
export const createReferenzen = createAsyncThunk('/referenzen/create', async (referenzenData, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.accessToken;
        return await referenzenService.createReferenzen(referenzenData, token);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const updateReferenzen = createAsyncThunk('/referenzen/update', async (updateData, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.accessToken;
        return await referenzenService.updateReferenzen(updateData, token);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const deleteReferenzen = createAsyncThunk('/referenzen/delete', async (referenzenId, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.accessToken;
        return await referenzenService.deleteReferenzen(referenzenId, token);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const getReferenzen = createAsyncThunk('/referenzen/find', async (referenzenId, thunkAPI)=>{
    try{
        return await referenzenService.getReferenzen(referenzenId);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const getAllReferenzen = createAsyncThunk('/referenzen/findAll', async (_, thunkAPI)=>{
    try{
        return await referenzenService.getAllReferenzen();
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const referenzenSlice = createSlice({
    name:"referenzen",
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers: (builder)=>{
        (builder)
        .addCase(createReferenzen.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(createReferenzen.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.allReferenzen.push(action.payload)
        })
        .addCase(createReferenzen.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(updateReferenzen.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(updateReferenzen.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.referenz = action.payload;
        })
        .addCase(updateReferenzen.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(deleteReferenzen.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(deleteReferenzen.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.allReferenzen.filter((item)=>item._id !== action.payload.id)
        })
        .addCase(deleteReferenzen.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getReferenzen.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getReferenzen.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.referenz = action.payload;
        })
        .addCase(getReferenzen.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getAllReferenzen.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getAllReferenzen.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.allReferenzen = action.payload;
        })
        .addCase(getAllReferenzen.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})
export const {reset} = referenzenSlice.actions;
export default referenzenSlice.reducer;