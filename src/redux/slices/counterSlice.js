import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    resetAmount: (state) => {
        state.value = 0
    }
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount, resetAmount } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;
