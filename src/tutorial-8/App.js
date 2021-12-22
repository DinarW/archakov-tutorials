import React from 'react'

const App = () => {
  const [users, setUsers] = React.useState([]);
  const getUsers = async () => {
    try {
      const response = await fetch('https://61c28baf9cfb8f0017a3e5b7.mockapi.io/users');
      const result = await response.json();
      setUsers(result);
    } catch(error) {
      alert('Ошибка при получении пользователей');
      console.error(error);
    }
  };

  return (
    <div>
      <ul>
        {users.map((obj) => {
          return (
            <li key={obj.id}>
              {obj.name}
            </li>
          )
        })}
      </ul>
      <button onClick={getUsers}>Получить пользователей</button>
    </div>
  )
}

export default App;
