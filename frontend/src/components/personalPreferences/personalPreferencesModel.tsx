import { useState } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { resetPersonalPreferences } from '../../slices/personalPreferencesSlice';
import PersonalPreferences from './personalPreferences';

const PersonalPreferencesModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleReset = () => {
    dispatch(resetPersonalPreferences());
  };

  return (
    <div className="personal-preferences-modal">
      <Button type="primary" onClick={showModal}>
        Personal Preferences
      </Button>
      <Modal
        title="Personal Preferences"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
        footer={[
          <Button onClick={handleReset}>Reset</Button>,
          <Button type="primary" onClick={handleOk}>
            Ok
          </Button>,
        ]}
      >
        <PersonalPreferences />
      </Modal>
    </div>
  );
};

export default PersonalPreferencesModal;
