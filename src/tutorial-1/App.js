import './App.css';
import Profile from './components/profile';
import ProfileClass from './components/ProfileClass';

function App() {
  return (
    <div className="App">
      <Profile name = 'Вася' registredAt = {new Date(2021, 5, 22)}/>
      <ProfileClass name= 'Саша' registredAt = {new Date(2021, 11, 28)}/>
    </div>
  );
}

export default App;
