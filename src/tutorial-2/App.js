import './App.css';

function App() {
  let email;
  let password;

  const changeInput = (e) => {
    const target = e.target;
    if (target.type === 'text') {
      email = target.value;
    } else {
      password = target.value;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Пожалуйста заполните все поля');
    } else {
      console.log({ email, password });
      e.target.reset();
      email = '';
      password = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={changeInput} type="text" placeholder="E-Mail" />

      <input onChange={changeInput} type="password" placeholder="Пароль" />

      <button type="submit">Войти</button>
    </form>
  );
}

export default App;
