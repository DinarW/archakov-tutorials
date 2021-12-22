import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import FormField from '../components/FormField';

const schema = yup
  .object({
    city: yup.string().required('Это обязательное поле'),
    street: yup.string().required('Это обязательное поле'),
    home: yup.string().required('Это обязательное поле'),
    appartament: yup.string().required('Это обязательное поле'),
  })
  .required();

const PersonalInfoForm = ({ setFormsInfo, nextStep }) => {
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      city: '',
      street: '',
      home: '',
      appartament: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
    setFormsInfo((prev) => ({ ...prev, ...values }));
    nextStep('result');
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form>
          <FormField name="city" label="Город" />
          <FormField name="street" label="Улица" />
          <FormField name="home" label="Дом" />
          <FormField name="appartament" label="Номер квартиры" />
          <br />
          <div className="row buttons">
            <Button
              onClick={methods.reset({
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
    </div>
  );
};

export default PersonalInfoForm;
