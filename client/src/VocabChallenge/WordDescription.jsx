import React from 'react';



const WordDescription = ({ word, meaning }) => {
  return (
    <div>
      <h2>Word of The Day: {word}</h2>
      <p>Meaning: {meaning}</p>
    </div>
  );
};

export default WordDescription;



