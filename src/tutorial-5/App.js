import React from 'react';
import styles from './App.module.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  const [comments, setComments] = React.useState([
    {
      fullName: 'Bad Guy',
      email: 'some.mail.com',
      text: 'Anata no ken wa ka to onaji kurai tsuyoidesu',
      createdAt: 'Thu Oct 14 2021 13:41:01',
    },
    {
      fullName: 'Кенсиро',
      email: 'somesome@mail.com',
      text: 'Omae wa mou shindeiru...',
      createdAt: 'Thu Oct 14 2021 13:43:02',
    },
    {
      fullName: 'Bad Guy',
      email: 'some.mail.com',
      text: 'Nani?',
      createdAt: 'Thu Oct 14 2021 13:45:12',
    },
  ]);

  const [inputValue, setInputValue] = React.useState({
    fullName: '',
    email: '',
    text: '',
  });

  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  React.useEffect(() => {
    const localComments = JSON.parse(localStorage.getItem('comments'));
    if (localComments) {
      setComments(localComments);
    } else {
      localStorage.setItem('comments', JSON.stringify([]));
    }
  }, []);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, text } = inputValue;
    if (!fullName || !email || !text) {
      alert('Заполните все поля!');
      return;
    }
    setComments([
      ...comments,
      { fullName, email, text, createdAt: new Date() },
    ]);
    setInputValue({
      fullName: '',
      email: '',
      text: '',
    });
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.reviews}>
        <h2>Отзывы:</h2>
        <List className={styles.List}>
          {comments.map((comment) => {
            const { text, fullName } = comment;
            return (
              <ListItem key={comment.createdAt} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary={fullName} secondary={text} />
              </ListItem>
            );
          })}
        </List>
      </div>
      <div className={styles.feedback}>
        <h2>Обратная связь:</h2>
        <form className={styles.container}>
          <TextField
            className={styles.textField}
            value={inputValue.fullName}
            onChange={onChangeInput}
            name="fullName"
            id="outlined-basic"
            label="Имя"
            variant="outlined"
          />
          <TextField
            className={styles.textField}
            value={inputValue.email}
            onChange={onChangeInput}
            name="email"
            id="outlined-basic"
            label="Почта"
            variant="outlined"
          />
          <TextField
            className={styles.textField}
            value={inputValue.text}
            onChange={onChangeInput}
            name="text"
            id="outlined-multiline-static"
            label="Текст..."
            multiline
            rows={4}
          />
          <Button onClick={onSubmit} variant="contained">
            Отправить
          </Button> 
        </form>
      </div>
    </div>
  );
}

export default App;
