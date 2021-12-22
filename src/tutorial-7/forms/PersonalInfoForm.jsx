import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const schema = yup
  .object({
    firstName: yup.string().min(2, 'Имя должно содержать не менее двух символов').required('Это обязательное поле'),
    lastName: yup.string().min(1, 'Фамилия должна содержать не менее одного символа'),
    email: yup.string().required('Это обязательное поле'),
    password: yup.string().min(6, 'Пароль должен быть не менее 6 символов'),
  })
  .required();

const PersonalInfoForm = ({ setFormsInfo, nextStep }) => {
  const { handleSubmit, register, formState, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
    setFormsInfo((prev) => ({ ...prev, ...values }));
    nextStep('adress')
  };

  return (
    <div>
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
            name="email"
            label="E-Mail"
            {...register('email')}
            helperText={
              formState.errors.email && formState.errors.email.message
            }
            error={!!formState.errors.email}
            fullWidth
          />
          <TextField
            name="password"
            type="password"
            label="Пароль"
            {...register('password')}
            helperText={
              formState.errors.password && formState.errors.password.message
            }
            error={!!formState.errors.password}
            fullWidth
          />
        </div>
        <br />
        <div className="row buttons">
          <Button
            onClick={reset({
              firstName: '',
              lastName: '',
              email: '',
              password: '',
            })}
            variant="contained"
            color="error"
          >
            Очистить
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            disabled={!formState.isValid}
            variant="contained"
            color="primary"
          >
            Далее
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
