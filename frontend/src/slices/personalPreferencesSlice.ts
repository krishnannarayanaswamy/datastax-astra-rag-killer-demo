import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { personalPreferences } from '../types/types';

const initialState: personalPreferences = {
  preferences: null,
};

export const personalPreferencesSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setPersonalPreferences: (state, action: PayloadAction<string>) => {
      state.preferences = action.payload;
    },
    resetPersonalPreferences: (state) => {
      state.preferences = initialState.preferences;
    },
  },
});

export const { setPersonalPreferences, resetPersonalPreferences } = personalPreferencesSlice.actions;

export default personalPreferencesSlice.reducer;
