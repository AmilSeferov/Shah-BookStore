import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  data: [],
  login:[],
  fillter: [],
  info:[],
  search: '',
  mycart:[],
  isLoading: false,
  error: false,
}
export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
  const data = await axios(
    "http://localhost:5000/books"
  );
  return data.data;
});


export const fetchSlice = createSlice({
  name: 'bookslist',
  initialState,
  reducers: {
    addinfo:(state,action)=>{
     state.info=[action.payload]
    },
    removeinfo:(state)=>{
      state.info=[]
     },
    login:(state,action)=>{
      state.login=[action.payload]
    },
    addcart:(state,action)=>{
      let i;
      if( state.mycart.find((item,index)=>{
        i=index
       return item.id===action.payload.id})){
        state.mycart[i].num++;
        state.mycart=[...state.mycart]
      }else{
        state.mycart=[...state.mycart,action.payload]
      }
     
      
    },
    removecart:(state,action)=>{
      state.mycart=[...state.mycart.filter(item=>item.id!==action.payload.id)]
    },
    search: (state, action) => {
      let i = action.payload.toLowerCase()
      if (action.payload.trim() === '') {
        state.fillter = state.data
      } else {

        if (state.data.filter(item => item.bookname.toLowerCase() ===i)[0]) {
          console.log(state.data[0].bookname)
          state.fillter = state.data.filter(item => item.bookname.toLowerCase() === i)
        }else{
          if (state.data.filter(item => item.booktype.toLowerCase() ===i)[0]) {
            state.fillter = state.data.filter(item => item.booktype.toLowerCase() === i)
          }
        }
      }
    }

  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.fillter = action.payload
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.isLoading = false
      state.error = true;
    });
  }
})

export const { search,addcart,removecart,login,addinfo,removeinfo } = fetchSlice.actions

export default fetchSlice.reducer