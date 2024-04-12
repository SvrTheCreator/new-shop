import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value:0,
}

export const countInCartSlice = createSlice({
    name:'countInCart',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            if(state.value>0){
                state.value -=1
            }
        },
    }
})

export const { increment, decrement,  } = countInCartSlice.actions

export default countInCartSlice.reducer

// export const countInCartReducer = (state = defaultState, action)=>{
//     switch (action.type) {
//         case "ADD_COUNT":
//             return {...state,countInCart:state.countInCart + action.payload}
//         case "DEL_COUNT":
//             if(state.countInCart>0){
//             return {...state,countInCart:state.countInCart - action.payload}
//             }
//         default:
//             return state;
//     }
// }