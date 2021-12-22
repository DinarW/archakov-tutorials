import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const schema = yup.object({
    city: yup.string().required('Это обязательное поле'),
    street: yup.string().required('Это обязательное поле'),
    home: yup.string().required('Это обязательное поле'),
    appartament: yup.string().required('Это обязательное поле'),
  })
  .required();

const PersonalInfoForm = ({ setFormsInfo, nextStep }) => {
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      city: '',
      street: '',
      home: '',
      appartament: '',
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    setFormsInfo((prev) => ({ ...prev, ...values }));
    nextStep('result');
  };

  return (
    <div>
      <form>
        <TextField
          name="city"
          label="Город"
          {...register('city')}
          helperText={formState.errors.city && formState.errors.city.message}
          error={!!formState.errors.city}
          fullWidth
        />
        <TextField
          name="street"
          label="Улица"
          {...register('street')}
          helperText={
            formState.errors.street && formState.errors.street.message
          }
          error={!!formState.errors.street}
          fullWidth
        />
        <TextField
          {...register('home')}
          helperText={formState.errors.home && formState.errors.home.message}
          error={!!formState.errors.home}
          name="home"
          label="Дом"
          fullWidth
        />
        <TextField
          {...register('appartament')}
          helperText={
            formState.errors.appartament && formState.errors.appartament.message
          }
          error={!!formState.errors.appartament}
          name="appartament"
          label="Номер квартиры"
          fullWidth
        />
        <br />
        <div className="row buttons">
          <Button
            onClick={reset({
              city: '',
              street: '',
              home: '',
              appartament: '',
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
