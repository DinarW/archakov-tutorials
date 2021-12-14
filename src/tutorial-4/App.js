import React from 'react';
import './App.css';

import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

const adjectivesArr = [
  'абсолютный',
  'адский',
  'азартный',
  'активный',
  'ангельский',
  'астрономический',
  'баснословный',
  'безбожный',
  'безбрежный',
  'безвозвратный',
  'безграничный',
  'бездонный',
  'бездушный',
  'безжалостный',
  'замечательно',
  'замечательный',
  'записной',
  'запредельный',
  'заядлый',
  'звериный',
  'зверский',
  'зеленый',
  'злой',
  'злостный',
  'значительный',
  'неоспоримый',
  'неотразимый',
  'неоценимый',
  'непередаваемый',
];

const nounsArr = [
  'лгун',
  'день',
  'конь',
  'олень',
  'человек',
  'программист',
  'ребёнок',
  'конец',
  'город',
  'дурак',
];

function App() {
  const [phrases, setPhrases] = React.useState([]);

  const shuffle = (array) => {
    array.forEach((_, i) => {
      let j = Math.floor(Math.random()*(array.length - i) + i);
      [array[i], array[j]] = [array[j], array[i]];
    });
    return [array[0], array[1]];
  };

  const generatePhrase = () => {
    const [noun, ] = shuffle(nounsArr);
    const [adj1, adj2] = shuffle(adjectivesArr);
    setPhrases((prev) => [`${adj1} ${adj2} ${noun}`, ...prev]);
  };

  const clearPhrases = () => {
    setPhrases([]);
  };

  return (
    <div className="wrapper">
      {!phrases.length ? <EmptyBlock /> : <Phrase phrasesList={phrases} />}
      <button onClick={generatePhrase} className="btn btn_generate">
        Сгенерировать
      </button>
      <button onClick={clearPhrases} className="btn btn_clear">
        Очистить
      </button>
    </div>
  );
}

export default App;
