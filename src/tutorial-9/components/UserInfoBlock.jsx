import React from 'react';

const UserInfoBlock = ({ userInfo }) => {
  return (
    <div className="app-user">
      <div className="app-user_info">
        <div className="app-user_image">
          <img src={userInfo.avatar} alt="avatar" />
        </div>
        <div className="app-user_data">
          <h1 className="app-user_name">
            {userInfo.name}
            <span>@{userInfo.login}</span>
          </h1>
          <p className="app-user_about">{userInfo.bio}</p>
        </div>
      </div>
      <ul className="app-user_stats">
        <li className="app-user_stats-item">
          Репозитории
          <span>{userInfo.repos}</span>
        </li>
        <li className="app-user_stats-item">
          Подписчиков
          <span>{userInfo.followers}</span>
        </li>
        <li className="app-user_stats-item">
          Звёзд
          <span>{userInfo.stars}</span>
        </li>
      </ul>
      <ul className="app-user_location">
        <li className="app-user_location-item">{userInfo.location}</li>
        <li className="app-user_location-item">
          <a href={userInfo.blog}>{userInfo.blog}</a>
        </li>
      </ul>
    </div>
  );
};

export default UserInfoBlock;
