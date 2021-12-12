import parseDate from './parseDate';

function Profile({ name, registredAt }) {
  const correctDate = parseDate(registredAt);
  return (
    <div className="content">
      <h2>
        Привет, <b>{name}!</b>
      </h2>
      <p>Дата регистрации: {correctDate}</p>
    </div>
  );
}

export default Profile;
