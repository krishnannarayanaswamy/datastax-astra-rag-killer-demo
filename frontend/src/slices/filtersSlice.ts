import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  filters: string | null;
}

const initialState: FiltersState = {
  filters: null,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<string | null>) => {
      state.filters = action.payload;
    },
    resetFilter: (state) => {
      state.filters = null;
    },
  },
});

export const { setFilters, resetFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
