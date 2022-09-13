import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";


export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false
  },
  reducers: {
    setUserList: (state) => {
      
      state.loading= false
    },
    setResponseList: (state, action)=>  {
    
      state.list = action.payload; 
      state.loading= false
    }
  }
  },
);

export const { setUserList, setResponseList } = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {

};



