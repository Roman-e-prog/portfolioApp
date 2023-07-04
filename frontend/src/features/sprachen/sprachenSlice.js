import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import sprachenService from './sprachenService';
const initialState = {
    sprache: {},
    allSprachen:[],
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:"",
}
export const createSprachen = createAsyncThunk('/sprachen/create', async (sprachenData, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.accessToken;
        return await sprachenService.createSprachen(sprachenData, token);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const updateSprachen = createAsyncThunk('/sprachen/update', async (updateData, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.accessToken;
        return await sprachenService.updateSprachen(updateData, token);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const deleteSprachen = createAsyncThunk('/sprachen/delete', async (sprachenId, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.accessToken;
        return await sprachenService.deleteSprachen(sprachenId, token);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const getSprachen = createAsyncThunk('/sprachen/find', async (sprachenId, thunkAPI)=>{
    try{
        return await sprachenService.getSprachen(sprachenId);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const getAllSprachen = createAsyncThunk('/sprachen/findAll', async (_, thunkAPI)=>{
    try{
        return await sprachenService.getAllSprachen();
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const sprachenSlice = createSlice({
    name:"sprachen",
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers: (builder)=>{
        (builder)
        .addCase(createSprachen.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(createSprachen.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.allSprachen.push(action.payload)
        })
        .addCase(createSprachen.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(updateSprachen.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(updateSprachen.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.sprache = action.payload;
        })
        .addCase(updateSprachen.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(deleteSprachen.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(deleteSprachen.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.allSprachen.filter((item)=>item._id !== action.payload.id)
        })
        .addCase(deleteSprachen.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getSprachen.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getSprachen.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.sprache = action.payload;
        })
        .addCase(getSprachen.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getAllSprachen.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getAllSprachen.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.allSprachen = action.payload;
        })
        .addCase(getAllSprachen.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})
export const {reset} = sprachenSlice.actions;
export default sprachenSlice.reducer;