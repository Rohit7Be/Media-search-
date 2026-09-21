import { createSlice } from "@reduxjs/toolkit";



const collectionSlice = createSlice({
    name = "collection",
    initialState: {
        items: JSON.parse(localStorage.getItem("collection")) || []
    },
    reducers: {
        addToCollection: (state, action) => {

        },
        removeFromCollection: (state, action) => {
                        
        },
        clearCollection: (state, action) => {
                        
        }
    }
})