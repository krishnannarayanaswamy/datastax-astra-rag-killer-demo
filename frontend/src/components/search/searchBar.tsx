import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchProducts } from '../../slices/resultsSlice';
import { AppDispatch } from '../../store/store';
import { Select } from 'antd';

import './searchBar.css';
import { setFilters } from '../../slices/filtersSlice';
import { setGender } from '../../slices/genderSlice';

interface Option {
  value: string | null;
  label: string;
}

type SearchBarProps = {
  enableFilters: boolean;
  enableGender: boolean;
};

const whatSeasonAreYouAfterOptions: Option[] = [
  { value: null, label: 'None' },
  { value: 'Winter', label: 'Winter' },
  { value: 'Summer', label: 'Summer' },
  { value: 'Fall', label: 'Fall' },
  { value: 'Spring', label: 'Spring' },
];

const whatGenderAreYouAfterOptions: Option[] = [
  { value: null, label: 'None' },
  { value: 'Men', label: 'Men' },
  { value: 'Women', label: 'Women' },
];

const SearchBar = ({ enableFilters = true, enableGender = true}: SearchBarProps) => {
  const [query, setQuery] = useState<string>('');
  //const [filters, setFilters] = useState<string>('');
  //const [gender, setGender] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const favourites = useSelector((state: RootState) => state.favourites.terms);
  const personalPreferences = useSelector(
    (state: RootState) => state.personalPreferences.preferences,
  );
  const style = useSelector((state: RootState) => state.searchStyle.style);
  const filters = useSelector((state: RootState) => state.filters.filters);
  const gender = useSelector((state: RootState) => state.gender.gender);

  const handleSubmit = () => {
    dispatch(
      fetchProducts({
        query,
        filters,
        gender,
        personalPreferences,
        favourites,
        style,
      }),
    );
  };

  const handleQueryChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleFilterChange = (value: any | null) => {
    dispatch(setFilters(value));
  };

  const handleGenderChange = (value: any | null) => {
    dispatch(setGender(value));
  };


  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search for this..."
        value={query}
        onChange={handleQueryChange}
        onKeyDown={handleKeyPress}
      />
      {enableFilters && (
      <Select
          placeholder="Give me options for (optional)"
          options={whatGenderAreYouAfterOptions}
          onChange={handleFilterChange}
          style={{ width: 200 }}
          value={filters === null ? undefined : filters}
      />
      )}
      <button className="search-button" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
