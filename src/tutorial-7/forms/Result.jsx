import React from 'react';
import Paper from '@mui/material/Paper';

const Result = ({ formsInfo }) => {
  return (
    <Paper>
      <h2>Персональная информация:</h2>
      <ul>
        <li>
          <b>Имя:</b> {formsInfo.firstName};
        </li>
        <li>
          <b>Фамилия:</b> {formsInfo.lastName};
        </li>
        <li>
          <b>Почта:</b> {formsInfo.email};
        </li>
        <li>
          <b>Пароль:</b> {formsInfo.password};
        </li>
      </ul>
      <h2>Адрес:</h2>
      <li>
        <b>Город:</b> {formsInfo.city};
      </li>
      <li>
        <b>Улица:</b> {formsInfo.street};
      </li>
      <li>
        <b>Дом:</b> {formsInfo.home};
      </li>
      <li>
        <b>Номер квартиры:</b> {formsInfo.appartament};
      </li>
    </Paper>
  );
};

export default Result;
