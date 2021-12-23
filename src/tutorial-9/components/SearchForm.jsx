import React from 'react';
import axios from 'axios';

export const SearchForm = ({ setUserInfo }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const userNotFound = React.useRef();
  const timerRef = React.useRef();
  const url = new URL(window.location.href);

  React.useEffect(() => {
    const login = url.searchParams.get('login');

    if (login) {
      searchUser(login);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function changeInput(e) {
    const { value } = e.target;
    setInputValue(value);

    clearTimeout(timerRef.current);
    if (value) {
      timerRef.current = setTimeout(() => {
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

      userNotFound.current.style.display = 'none';
      url.searchParams.set('login', userName);
      window.history.pushState(null, null, url.href);
    } catch (error) {
      if (error?.response?.status === 404) {
        userNotFound.current.style.display = 'inline';
      } else {
        alert('Ошибка при получении данных :(');
      }
      console.error(error);
    } finally {
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
      <label ref={userNotFound} className="app-form_label">Пользователь не найден</label>
    </form>
  );
};

export default SearchForm;
