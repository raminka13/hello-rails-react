import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GREETINGS_URL = 'http://127.0.0.1:3000/greetings/random';

export const fetchGreeting = createAsyncThunk(
  'greetings/fetchGreeting',
  async () => {
    const response = await axios.get(GREETINGS_URL);
    return response.data;
  }
);

const initialState = {
  message: [],
  status: 'idle',
};

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    });
  },
});

export default greetingsSlice.reducer;
