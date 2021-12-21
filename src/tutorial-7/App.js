import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './styles.css';

export default function App() {
  const { handleSubmit, register, formState, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  });

  const handleClickClear = () => {
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

  const onSubmit = (values) => {
    console.log(values);
    handleClickClear();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <TextField
            name="firstName"
            label="Имя"
            {...register('firstName', {
              required: 'Это обязательное поле!',
            })}
            helperText={
              formState.errors.firstName && formState.errors.firstName.message
            }
            error={!!formState.errors.firstName}
            fullWidth
          />
          <TextField
            name="lastName"
            label="Фамилия"
            {...register('lastName', {
              required: 'Это обязательное поле!',
            })}
            helperText={
              formState.errors.lastName && formState.errors.lastName.message
            }
            error={!!formState.errors.lastName}
            fullWidth
          />
        </div>
        <div className="row">
          <TextField
            {...register('email', {
              required: 'Это обязательное поле!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                message: 'Это неверная почта!',
              },
            })}
            helperText={
              formState.errors.email && formState.errors.email.message
            }
            error={!!formState.errors.email}
            name="email"
            label="E-Mail"
            defaultValue=""
            fullWidth
          />
          <TextField
            {...register('password', {
              required: 'Это обязательное поле!',
            })}
            helperText={
              formState.errors.password && formState.errors.password.message
            }
            error={!!formState.errors.password}
            name="password"
            type="password"
            label="Пароль"
            fullWidth
          />
        </div>
        <br />
        <div className="row">
          <Button
            onClick={handleSubmit(onSubmit)}
            disabled={!formState.isValid}
            variant="contained"
            color="primary"
          >
            Зарегистрироваться
          </Button>
          <Button
            onClick={handleClickClear}
            variant="contained"
            color="secondary"
          >
            Очистить
          </Button>
        </div>
      </form>
    </div>
  );
}
