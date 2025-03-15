import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/apod.css'

function Apod() {
  const [apod, setApod] = useState(null);
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}`)
      .then(response => {
        setApod(response.data);

        const rateLimit = response.headers['x-ratelimit-limit']; 
        const rateRemaining = response.headers['x-ratelimit-remaining']; 

        console.log(`Rate Limit: ${rateLimit}`);
        console.log(`Remaining Requests: ${rateRemaining}`);
      })
      .catch(err => console.log(err)); 
  }, []); 

  useEffect(() => {
    if (apod) {
      console.log('APOD data:', apod);
    }
  }, [apod]); 

  if (!apod) {
    return <img src='/assets/spinner.gif' alt='loading.....' style={{width: "3rem"}}/>;
  }

  return (
    <div className='apod'>
      <img src={apod.url} alt={apod.title} />
      <h1>APOD (Astronomy Picture of the Day)</h1>
      <h2 onClick={() => setVisible(!visible)} className='underline'>{apod.title}</h2>
      {visible && (<div className="sidePanel">
        <h2>{apod.title}</h2>
        <p>{apod.explanation}</p>
        <button onClick={() => setVisible(false)}>Hide</button>
      </div>)}
    </div>
  );
}

export default Apod;
