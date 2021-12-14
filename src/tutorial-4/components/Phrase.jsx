function Phrase({ phrasesList }) {
  return (
    <div className="list">
      {phrasesList.map((phrase) => (
        <div key={phrase} className="block">
          <h3>{phrase}</h3>
        </div>
      ))}
    </div>
  );
}

export default Phrase;
