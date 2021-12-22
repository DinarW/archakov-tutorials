import React from 'react';

import SearchForm from './components/SearchForm';
import UserInfoBlock from './components/UserInfoBlock';
import './style.css';

const App = () => {
  const [userInfo, setUserInfo] = React.useState({});

  return (
    <div id="app">
      <div className="app-container">
        <SearchForm setUserInfo={setUserInfo} />
        {!!Object.keys(userInfo).length && (
          <UserInfoBlock userInfo={userInfo} />
        )}
      </div>
    </div>
  );
};

export default App;
