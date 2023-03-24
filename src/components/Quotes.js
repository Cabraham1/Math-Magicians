import React, { useState, useEffect, useRef } from 'react';
import './Quotes.css';

const Quote = () => {
  const [quotes, setQuotes] = useState('Loading...');
  const textRef = useRef();
  const colors = ['#ffff00', '#90ee90', '#ffa500', '#ff68ff', '#a9a9e7'];

  const getQuotes = () => {
    const category = 'happiness';
    const apiKey = '8vBF9RpWFlSYRkxXze3U/A==bR662D4w38AWnlA5';
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: { 'X-Api-Key': apiKey },
      contentType: 'application/json',
    }).then((res) => res.json())
      .then((data) => {
        setQuotes(data[0]);
      });
  };
  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    textRef.current.style.color = colors[Math.floor(Math.random() * colors.length)];
  }, [quotes]);
  return (
    <>
      <div className="quote">
        <h1>{quotes[0]}</h1>
        <p ref={textRef}>{quotes.quote}</p>
        <p className="author">{quotes.author}</p>
        <div />
      </div>
    </>
  );
};
export default Quote;
