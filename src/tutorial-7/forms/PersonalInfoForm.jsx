import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import FormField from '../components/FormField';

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(2, 'Имя должно содержать не менее двух символов'),
    lastName: yup
      .string()
      .min(1, 'Фамилия должна содержать не менее одного символа'),
    email: yup.string().email().required('Это обязательное поле'),
    password: yup.string().min(6, 'Пароль должен быть не менее 6 символов'),
  })
  .required();

const PersonalInfoForm = ({ setFormsInfo, nextStep }) => {
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  console.log(methods);
  const onSubmit = (values) => {
    console.log(values);
    setFormsInfo((prev) => ({ ...prev, ...values }));
    nextStep('adress');
  };
  console.log(methods.formState);
  return (
    <FormProvider {...methods}>
      <form>
        <div className="row">
          <FormField name="firstName" label="Имя" />
          <FormField name="lastName" label="Фамилия" />
        </div>
        <div className="row">
          <FormField name="email" label="E-Mail" />
          <FormField name="password" label="Пароль" />
        </div>
        <br />
        <div className="row buttons">
          <Button
            onClick={methods.reset({
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
            onClick={methods.handleSubmit(onSubmit)}
            disabled={!methods.formState.isValid}
            variant="contained"
            color="primary"
          >
            Далее
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default PersonalInfoForm;
