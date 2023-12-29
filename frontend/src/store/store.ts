import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import resultsReducer from '../slices/resultsSlice';
import favouritesReducer from '../slices/favouritesSlice';
import personalPreferencesSlice from '../slices/personalPreferencesSlice';
import searchStyleSlice from '../slices/searchStyleSlice';
import filtersSlice from '../slices/filtersSlice';
import genderSlice from '../slices/genderSlice';


const rootReducer = combineReducers({
  results: resultsReducer,
  favourites: favouritesReducer,
  personalPreferences: personalPreferencesSlice,
  searchStyle: searchStyleSlice,
  filters: filtersSlice,
  gender: genderSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;

export default store;
