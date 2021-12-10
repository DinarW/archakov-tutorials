import parseDate from "./parseDate";

function Profile(props) {
  const correctDate = parseDate(props.registredAt);
  return (
    <div className='content'>
      <h2>Привет, <b>{props.name}!</b></h2>
      <p>Дата регистрации: {correctDate}</p>
    </div>
  )
}

export default Profile;
