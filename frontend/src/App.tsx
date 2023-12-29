import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider, Space } from 'antd';
import ResultsDisplay from './components/results/resultsDisplay';
import SearchBar from './components/search/searchBar';
import './App.css';
import store from './store/store';
import FavouriteTags from './components/favourites/favouriteTags';
import Logo from './components/logo/logo';
import PersonalPreferencesModal from './components/personalPreferences/personalPreferencesModel';
import QueryPrefixer from './components/queryPrefixer/queryPrefixer';
import ChatBot from './components/chatbot/ChatBotModel';
import ChatBotModal from './components/chatbot/ChatBotModel';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#020659',
            colorTextLightSolid: '#fff',
            borderRadius: 2,
            colorBgContainer: '#fff',
          },
        }}
      >
        <div className="App">
          <header className="App-header">
            <Logo />
              <div className="search-settings">
                <Space size={isMobile ? 'small' : 'large'} direction="vertical">
                  <Space
                    size={isMobile ? 'small' : 'large'}
                    direction={isMobile ? 'vertical' : 'horizontal'}
                  >
                    <PersonalPreferencesModal />
                    <FavouriteTags />
                    <QueryPrefixer />
                    <ChatBotModal />
                  </Space>
                </Space>
              </div>
          <SearchBar enableFilters={true} enableGender={true} />
          <ResultsDisplay />
          </header>

        </div>

      </ConfigProvider>
    </Provider>
  );
}

export default App;
