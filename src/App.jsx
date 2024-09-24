import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');
  const [highlightedText, setHighlightedText] = useState('');

  
  const countUniqueWords = (inputText) => {
    const words = inputText
      .toLowerCase()
      .match(/\b\w+\b/g); 
    if (!words) return 0;
    const uniqueWords = new Set(words);
    return uniqueWords.size;
  };

  
  const countCharacters = (inputText) => {
    const characters = inputText.match(/[a-zA-Z0-9]/g); 
    return characters ? characters.length : 0;
  };

  
  const handleReplace = () => {
    const regex = new RegExp(searchString, 'g'); 
    const replacedText = text.replace(regex, replaceString);
    setText(replacedText);
    highlightText(replacedText);
  };

  
  const highlightText = (inputText) => {
    if (!replaceString) {
      setHighlightedText(inputText);
      return;
    }
    const regex = new RegExp(`(${replaceString})`, 'g'); 
    const highlighted = inputText.replace(
      regex,
      '<mark style="background-color: yellow;">$1</mark>'
    );
    setHighlightedText(highlighted);
  };

  return (
    <div className="App">
      <h1>Text Analyzer Tool</h1>
      <textarea
        className="textarea"
        rows="10"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          highlightText(e.target.value);
        }}
        placeholder="Type here.."
      ></textarea>
      <div className="stats">
        <p>Unique Words: {countUniqueWords(text)}</p>
        <p>Characters (excluding spaces & punctuation): {countCharacters(text)}</p>
      </div>
      <div className="replacement">
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="Search string..."
        />
        <input
          type="text"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
          placeholder="Replace with..."
        />
        <button onClick={handleReplace} className='btn'>Replace</button>
      </div>
      <div className="highlighted-text" dangerouslySetInnerHTML={{ __html: highlightedText }} />
    </div>
  );
}

export default App;
