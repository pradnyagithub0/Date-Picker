import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startDate: null,
  endDate: null,
  recurrenceType: 'Daily',
};

const recurrenceSlice = createSlice({
  name: 'recurrence',
  initialState,
  reducers: {
    setStartDate(state, action) {
      state.startDate = action.payload;
    },
    setEndDate(state, action) {
      state.endDate = action.payload;
    },
    setRecurrenceType(state, action) {
      state.recurrenceType = action.payload;
    },
  },
});

export const { setStartDate, setEndDate, setRecurrenceType } = recurrenceSlice.actions;

export default recurrenceSlice.reducer;
