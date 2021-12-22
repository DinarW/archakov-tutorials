import React from 'react';
import axios from 'axios';

export const SearchForm = ({ setUserInfo }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const clickSearch = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${inputValue}`
      );
      const { bio, followers, login, name, blog, location } = data;
      setUserInfo({
        avatar: data.avatar_url,
        bio,
        followers,
        login,
        name,
        blog,
        location,
        repos: data.public_repos,
        stars: data.public_gists,
      });
      setInputValue('');
      setIsLoading(false);
    } catch (error) {
      if (error.response.status === 404) {
        alert('Пользователь с таким никнеймом не найден');
      } else {
        alert('Ошибка при получении данных :(');
      }
      console.error(error);
      setInputValue('');
      setIsLoading(false);
    }
  };

  return (
    <form className="app-form">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        className="app-input"
        placeholder="Укажите GitHub-аккаунт"
      />
      <button onClick={clickSearch} className="app-form_btn" disabled={isLoading}>{!isLoading ? 'Найти' : 'Загрузка...'}</button>
    </form>
  );
};

export default SearchForm;
