import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './styles.css';

const schema = yup.object({
  firstName: yup.string().min(2, 'Имя должно содержать не менее двух символов'),
  lastName: yup.string().min(1, 'Фамилия должна содержать не менее одного символа'),
  email: yup.string().email('Не верная почта').required('Это обязательное поле'),
  password: yup.string().min(6, 'Пароль должен быть не менее 6 символов'),
}).required();

export default function App() {
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(schema),
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
      <form>
        <div className="row">
          <TextField
            name="firstName"
            label="Имя"
            {...register('firstName')}
            helperText={
              formState.errors.firstName && formState.errors.firstName.message
            }
            error={!!formState.errors.firstName}
            fullWidth
          />
          <TextField
            name="lastName"
            label="Фамилия"
            {...register('lastName')}
            helperText={
              formState.errors.lastName && formState.errors.lastName.message
            }
            error={!!formState.errors.lastName}
            fullWidth
          />
        </div>
        <div className="row">
          <TextField
            {...register('email')}
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
            {...register('password')}
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
