import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PersonalInfoForm from './forms/PersonalInfoForm';
import AdressForm from './forms/AdressForm';
import Result from './forms/Result';
import './styles.css';

export default function App() {
  const [formsInfo, setFormsInfo] = React.useState({});
  const history = useNavigate();

  const nextStep = (name) => {
    history.push(name);
  };

  console.log(formsInfo);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PersonalInfoForm setFormsInfo={setFormsInfo} nextStep={nextStep} />
          }
          exact
        />
        <Route
          path="/adress"
          element={
            <AdressForm setFormsInfo={setFormsInfo} nextStep={nextStep} />
          }
        />
        <Route path="/result" element={<Result formsInfo={formsInfo} />} />
      </Routes>
    </div>
  );
}
