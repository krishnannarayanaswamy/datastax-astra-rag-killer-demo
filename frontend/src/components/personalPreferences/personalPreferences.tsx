import { useDispatch, useSelector } from 'react-redux';
import { setPersonalPreferences } from '../../slices/personalPreferencesSlice';

import { Input } from 'antd';
import { AppDispatch, RootState } from '../../store/store';

const { TextArea } = Input;

const PersonalPreferences = () => {
  const dispatch = useDispatch<AppDispatch>();

  const personalPreferences = useSelector(
    (state: RootState) => state.personalPreferences.preferences,
  );

  const handlePreferencesnUpdate = (e: any) => {
    dispatch(setPersonalPreferences(e.target.value));
  };

  return (
    <div className="personal-preferences">
      <TextArea
        rows={4}
        onChange={handlePreferencesnUpdate}
        value={personalPreferences === null ? '' : personalPreferences}
        placeholder="Provide some general information about your personal preferences"
      />
    </div>
  );
};

export default PersonalPreferences;
