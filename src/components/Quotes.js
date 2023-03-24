import React, { useState, useEffect, useRef } from 'react';
import './Quotes.css';

const Quote = () => {
  const [quotes, setQuotes] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    const getQuotes = async () => {
      setIsLoading(true);
      try {
        const category = 'happiness';
        const apiKey = '8vBF9RpWFlSYRkxXze3U/A==bR662D4w38AWnlA5';
        fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          method: 'GET',
          headers: { 'X-Api-Key': apiKey },
          contentType: 'application/json',
        })
          .then((res) => res.json())
          .then((data) => {
            setQuotes(data[0]);
          });
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    getQuotes();
  }, []);

  if (hasError || Number(quotes.length) === 0) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

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
