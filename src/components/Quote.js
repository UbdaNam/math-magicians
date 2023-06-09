import React, { useEffect, useState } from 'react';
import style from '../styles/Quote.module.css';

const Quote = () => {
  const baseURL = 'https://api.api-ninjas.com/v1/quotes';
  const category = 'learning';
  const [quote, setQuote] = useState('');
  const [isLoding, setIsLoding] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoding(true);
      try {
        const res = await fetch(`${baseURL}?category=${category}`, {
          headers: { 'X-Api-Key': 'ol8rLaI2WXeFoWWBPY4sQA==yP7NsdMF8EyLCJWx' },
        });
        if (!res.ok) {
          throw new Error('Network response was not OK');
        }
        const data = await res.json();
        setQuote(data);
      } catch (err) {
        setHasError(true);
      }
      setIsLoding(false);
    };

    fetchQuote();
  }, [setQuote, setIsLoding]);

  return (
    <div className={style['quote-container']}>
      {isLoding && <p>Loding...</p>}
      {hasError && <p>Something went wrong!</p>}
      {quote && <p>{quote[0].quote}</p>}
    </div>
  );
};

export default Quote;
