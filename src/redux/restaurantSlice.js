import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchrestaurant = createAsyncThunk('restaurantList/fetchrestaurant',()=>{
  const result=  axios.get('/restaurant.json').then(respone=>respone.data.restaurants)
  console.log(result);
  return result

    })



const restaurantslice = createSlice({
    name :'restaurantList',
    initialState:{
        loading:false,//pending
        allrestaurant:[], //resolve
        error:"" //reject
    },

    extraReducers:(builder)=>{
        //builder holds the value/response from thunk
        builder.addCase(fetchrestaurant.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchrestaurant.fulfilled,(state, action )=>{
            state.loading = false
            state.allrestaurant = action.payload
            state.error =""
        })
        builder.addCase(fetchrestaurant.rejected,(state ,action)=>{
            state.loading = false
            state.allrestaurant=""
            state.error=action.error.message
        })
    },
    reducers :{
        
    }


})

export default restaurantslice.reducer