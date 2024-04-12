import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value:false,
}

export const loadingSlice = createSlice({
    name:'loading',
    initialState,
    reducers:{
        loading:(state)=>{
            state.value +=1
        }
    }
})

export const { loading } = loadingSlice.actions

export default loadingSlice.reducer