import { createSlice } from "@reduxjs/toolkit";



export const collectionSlice = createSlice({
    name : "collection",
    initialState: {
        items: JSON.parse(localStorage.getItem("collection")) || []
    },
    reducers: {
        addToCollection: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload)
                localStorage.setItem("collection",JSON.stringify(state.items))
            }
        },
        removeFromCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            )
            localStorage.setItem("collection", JSON.stringify(state.items))
            
                        
        },
        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem('collection')
                        
        }
    }
})

export const { addToCollection, removeFromCollection, clearCollection } = collectionSlice.actions

export default collectionSlice.reducer