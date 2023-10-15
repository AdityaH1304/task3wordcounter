import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div>
      <h2>Responsive  Paragraph Word Counter</h2>
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleTextChange}
        rows="6"
        cols="50"
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
