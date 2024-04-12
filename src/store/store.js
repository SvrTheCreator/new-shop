import { configureStore } from "@reduxjs/toolkit"
import getDataSlice from "./getDataSlice"
import countInCartReducer from './countInCartSlice'
import loadingSlice from "./loadingSlice"




export const store = configureStore({
    reducer: {
        data:getDataSlice,
        countInCart:countInCartReducer,
        loading:loadingSlice
    }
})