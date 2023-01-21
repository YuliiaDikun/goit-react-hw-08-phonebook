import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {status:''},
  reducers: {
    filterContacts(state, { payload }) {
      state.status = payload;
    },
  },
});
export const { filterContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
