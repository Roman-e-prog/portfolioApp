import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import berufsstationenService from './berufsstationenService';
const initialState = {
    berufsstation: {},
    allBerufsstationen:[],
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:"",
}
export const createBerufsstationen = createAsyncThunk('/berufsstationen/create', async (berufsstationenData, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.accessToken;
        return await berufsstationenService.createBerufsstationen(berufsstationenData, token);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const updateBerufsstationen = createAsyncThunk('/berufsstationen/update', async (updateData, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.accessToken;
        return await berufsstationenService.updateBerufsstationen(updateData, token);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const deleteBerufsstationen = createAsyncThunk('/berufsstationen/delete', async (berufsstationenId, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.accessToken;
        return await berufsstationenService.deleteBerufsstationen(berufsstationenId, token);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const getBerufsstation = createAsyncThunk('/berufstationen/find', async (berufstationenId, thunkAPI)=>{
    try{
        return await berufsstationenService.getBerufsstation(berufstationenId);
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const getAllBerufsstationen = createAsyncThunk('/berufsstationen/findAll', async (_, thunkAPI)=>{
    try{
        return await berufsstationenService.getAllBerufsstationen();
    }  catch(error){
        const message = (error.response 
            && error.response.data 
            && error.response.data.message) 
            || error.message 
            || error.toString();
        return thunkAPI.rejectWithValue(message);
    }   
})
export const berufsstationenSlice = createSlice({
    name:"berufsstationen",
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers: (builder)=>{
        (builder)
        .addCase(createBerufsstationen.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(createBerufsstationen.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.allBerufsstationen.push(action.payload)
        })
        .addCase(createBerufsstationen.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(updateBerufsstationen.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(updateBerufsstationen.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.berufsstation = action.payload;
        })
        .addCase(updateBerufsstationen.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(deleteBerufsstationen.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(deleteBerufsstationen.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.allBerufsstationen.filter((item)=>item._id !== action.payload.id)
        })
        .addCase(deleteBerufsstationen.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getBerufsstation.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getBerufsstation.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.berufsstation = action.payload;
        })
        .addCase(getBerufsstation.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getAllBerufsstationen.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getAllBerufsstationen.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.allBerufsstationen = action.payload;
        })
        .addCase(getAllBerufsstationen.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})
export const {reset} = berufsstationenSlice.actions;
export default berufsstationenSlice.reducer;