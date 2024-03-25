import React, { useEffect, useState } from 'react';
import WordDescription from './WordDescription';

function App() {
  const [wordData, setWordData] = useState([]);

  useEffect(() => {
    const checkTimeAndExecute = () => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();

      if (hours === 0 && minutes === 0 && seconds === 0) {
        fetchRandomWord();
      }
    };

    // Call the function initially to set the word for the day
    checkTimeAndExecute();

    // Set interval to check every second
    const interval = setInterval(() => {
      checkTimeAndExecute();
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    
    const storedWordData = localStorage.getItem('wordData');
    if (storedWordData) {
      setWordData(JSON.parse(storedWordData));
    } else {
      
      fetchRandomWord();
    }
  }, []);

  const fetchRandomWord = async () => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
      const data = await response.json();
      const word = data[0];

      fetchWordMeaning(word);
    } catch (error) {
      console.error('Error fetching random word:', error);
    }
  };

  const fetchWordMeaning = async (word) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
      const data = await response.json();
      const meaning = data[0]?.meanings[0]?.definitions[0]?.definition;
      if (meaning) {
        const newWordData = [{ word, meaning }, ...wordData]; 
        setWordData(newWordData);
        localStorage.setItem('wordData', JSON.stringify(newWordData)); 
      }
    } catch (error) {
      console.error('Error fetching word meaning:', error);
    }
  };

  return (
    <div>
      <h1 className='flex justify-center'>Vocabulary Challenge</h1>
    
      {wordData.map((item, index) => (
        <WordDescription key={index} word={item.word} meaning={item.meaning} />
      ))}
    </div>
  );
}

export default App;
