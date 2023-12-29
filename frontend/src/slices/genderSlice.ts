import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GenderState {
  gender: string | null;
}

const initialState: GenderState = {
    gender: null,
};

export const genderSlice = createSlice({
  name: 'gender',
  initialState,
  reducers: {
    setGender: (state, action: PayloadAction<string | null>) => {
      state.gender = action.payload;
    },
    resetGender: (state) => {
      state.gender = null;
    },
  },
});

export const { setGender, resetGender } = genderSlice.actions;

export default genderSlice.reducer;