import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import '../styles/media.css';

function Media() {
  const spaceKeywords = [
    "Andromeda Galaxy",
    "Black Hole Event Horizon",
    "Exoplanet Discovery",
    "Dark Matter",
    "Cosmic Microwave Background",
    "Supernova Remnants",
    "Astronomical Nebula",
    "Lunar Eclipse",
    "Stellar Nurseries",
    "Quasar Jets",
    "Solar Flare",
    "Event Horizon Telescope",
    "Astrobiology",
    "Cosmic Rays",
    "Astrocytes (Space-based biology)",
    "Red Dwarf Stars",
    "Galactic Core",
    "Interstellar Medium",
    "Mars Rover Mission",
    "Hubble Space Telescope",
    "Space-Time Continuum",
    "Intergalactic Space",
    "Voyager Probes",
    "Asteroid Belt",
    "Celestial Mechanics",
    "Magnetic Field of Planets",
    "Wormhole Theories",
    "Gamma-ray Bursts",
    "Tidal Forces",
    "Dark Energy",
    "Exoplanet Atmosphere",
    "Stellar Parallax",
    "Oort Cloud",
    "Pulsar",
    "Lagrange Points",
    "Kuiper Belt Objects",
    "Cosmic Dust Clouds",
    "Gravitational Waves",
    "Solar System Formation",
    "Zodiacal Light",
    "Star Clusters",
    "Planetesimals",
    "Ceres (Dwarf Planet)",
    "Interplanetary Space Travel",
    "Space Weather",
    "Star Formation Regions",
    "Orbital Inclination",
    "Baryonic Matter",
    "Proxima Centauri",
    "Telescope Array"
  ];

  const [userInput, setUserInput] = useState('supernova');
  const [localInput, setLocalInput] = useState();
  const [searchedData, setSearchedData] = useState(null);
  const [myFilteredCardData, setMyFilteredCardData] = useState({
    dates: [],
    description: [],
    imagesURL: [],
    title: [],
    img_id: []
  });

  useEffect(() => {
    if (userInput === '') {
      setUserInput('supernova');
    } else {
      axios
        .get(`https://images-api.nasa.gov/search?q=${userInput}`)
        .then(response => setSearchedData(response.data.collection))
        .catch(err => console.log('Error: ', err));
    }
  }, [userInput]);

  useEffect(() => {
    if (!searchedData) return;

    const updatedCardData = {
      dates: [],
      description: [],
      imagesURL: [],
      title: [],
      img_id: []
    };

    searchedData.items?.forEach((item) => {
      const date = item.data[0]?.date_created
        ? new Date(item.data[0].date_created).toLocaleDateString()
        : 'No date available';
      const description = item.data[0]?.description || 'No description available';
      const title = item.data[0]?.title || 'No title available';
      const imageUrl = item.links?.[0]?.href || '';
      const img_id = item.data[0]?.nasa_id || '';

      updatedCardData.dates.push(date);
      updatedCardData.description.push(description);
      updatedCardData.imagesURL.push(imageUrl);
      updatedCardData.title.push(title);
      updatedCardData.img_id.push(img_id);
    });

    setMyFilteredCardData(updatedCardData);
  }, [searchedData]);

  if(!searchedData) {
    return<img src='/assets/spinner.gif' alt='loading.....' style={{width: "3rem"}}/>;
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const trimmedInput = localInput.trim().toLowerCase();
      if (trimmedInput === '/random' || trimmedInput === 'random') {
        const randomIndex = Math.floor(Math.random() * spaceKeywords.length);
        setUserInput(spaceKeywords[randomIndex]);
      } else if (trimmedInput !== '') {
        setUserInput(localInput);
      }
    }
  };

  return (
    <div className='media'>
      <input
        type="text"
        value={localInput} 
        onChange={(e) => setLocalInput(e.target.value)}
        onKeyDown={handleKeyDown}
        id='userInput'
        placeholder='Search anything inside space (e.g. Moon, Asteroids, Milky Way Galaxy) or type /random for an interesting keyword'
      />

      <div className='solarDataSet'>
        {myFilteredCardData.imagesURL.map((url, index) => (
          <Card
            key={index}
            title={myFilteredCardData.title[index]}
            description={myFilteredCardData.description[index]}
            imageUrl={url}
            date={myFilteredCardData.dates[index]}
            imgID={myFilteredCardData.img_id[index]}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default Media;
