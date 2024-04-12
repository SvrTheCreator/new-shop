import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {BASE_URL} from '../api'

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async (_,thunkAPI)=>{
        try{
            const response = await userAPI.fetch("https://fakestoreapi.com/products")
            return response.data
        }catch(err){
            console.log(err);
            return thunkAPI.rejectWithValue(err)
        }
    }
);

const data = createSlice({
    name:'data',
    initialState:{
        getData:[],
        isLoading:false,
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.getData = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchData.rejected, (state) => {
            state.isLoading = false
            console.log('ошибка загрузки');
        })
    }

})

export default data.reducer