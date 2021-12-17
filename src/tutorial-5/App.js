import React from 'react';
import styles from './App.module.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function App() {
  const isMountedRef = React.useRef(false);
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
    const localComments = JSON.parse(localStorage.getItem('comments') || []);
    setComments(localComments);
  }, []);

  React.useEffect(() => {
    if (isMountedRef.current) {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
    isMountedRef.current = true;
  }, [comments]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const isNotValid = Object.values(inputValue).some((value) => value.trim() === '');
    if (isNotValid) {
      alert('Заполните все поля!');
      return;
    }
    const { fullName, email, text } = inputValue;
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

  const onRemove = (current) => {
    const newComments = comments.filter((item) => item.createdAt !== current.createdAt);
    setComments(newComments);
  }

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
                <ListItemText primary={
                  <React.Fragment>
                    <div className={styles.comment}>
                      {fullName}
                      <IconButton onClick={() => onRemove(comment)} aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </React.Fragment>
                } secondary={text} />
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
