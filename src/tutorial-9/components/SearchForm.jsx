import React from 'react';
import axios from 'axios';

export const SearchForm = ({ setUserInfo }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const timerRef = React.useRef();

  function changeInput(e) {
    const { value } = e.target;
    setInputValue(value);
    clearTimeout(timerRef.current);
    if (value) {
      timerRef.current = setTimeout(() => {
        clearTimeout(timerRef.current);
        searchUser(value);
      }, 500);
    }
  }

  const clickSearchButton = (e) => {
    e.preventDefault();
    searchUser(inputValue);
  }

  const searchUser = async (userName) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      setInputValue('');
      setIsLoading(false);
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
    } catch (error) {
      if (error?.response?.status === 404) {
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
        onChange={changeInput}
        type="text"
        className="app-input"
        placeholder="Укажите GitHub-аккаунт"
      />
      <button 
        onClick={clickSearchButton}
        className="app-form_btn"
        disabled={isLoading}
        >
        {!isLoading ? 'Найти' : 'Загрузка...'}
      </button>
    </form>
  );
};

export default SearchForm;
