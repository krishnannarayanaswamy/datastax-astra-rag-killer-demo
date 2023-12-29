import { useState } from 'react';
import { Button, Modal } from 'antd';

import ChatBot from './ChatBot';

const ChatBotModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="chat-bot-modal">
      <Button type="primary" onClick={showModal}>
        AI Assistant
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
        footer={[
          <Button type="primary" onClick={handleOk}>
            Close
          </Button>,
        ]}
      >
        <ChatBot />
      </Modal>
    </div>
  );
};

export default ChatBotModal;
