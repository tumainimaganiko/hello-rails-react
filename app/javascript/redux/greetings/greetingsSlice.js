import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greetings: 'Tumaini',
};

export const fetchGreetings = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await axios.get('/api/random_greeting');
    return response.data;
  },
);

const greetingsSlice = createSlice({
    name: 'greetings',
    initialState,
    reducers: {

    },
    extraReducers: (builders) => {
      builders.addCase(fetchGreetings.fulfilled, (state, action) => {
        state.greetings = action.payload;
      });
    },
})

export default greetingsSlice.reducer;
