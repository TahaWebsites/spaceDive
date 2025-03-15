import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../styles/SolarSystem.css';
import Card from '../components/Card';

function SolarSystem() {
  const bodyRef = useRef(null);

  const [planet, setPlanet] = useState('mercury');
  const [planetData, setPlanetData] = useState();
  const [myFilteredCardData, setMyFilteredCardData] = useState({
    dates: [],
    description: [],
    imagesURL: [],
    title: [],
    img_id: []
  });

  useEffect(() => {
    function createStars() {
      const container = bodyRef.current;
      for (let i = 0; i < 1000; i++) {
        // Increase the number of stars to 1000
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = '.1px';
        star.style.height = '.1px';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.backgroundColor = "white";
        star.style.zIndex = 99;
        container.appendChild(star);
      }
    }

    createStars();

    return () => {
      const stars = document.querySelectorAll('.star');
      stars.forEach((star) => star.remove());
    };
  }, []);

  useEffect(() => {
    axios.get(`https://images-api.nasa.gov/search?q=${planet}`)
      .then(response => setPlanetData(response.data.collection))
      .catch(err => console.log(err));
  }, [planet]);

  useEffect(() => {
    if (planetData && planetData.items) {
      const updatedCardData = {
        dates: [],
        description: [],
        imagesURL: [],
        title: [],
        img_id: []
      };

      planetData.items.forEach((item) => {
        const date = new Date(item.data[0]?.date_created).toLocaleDateString();
        const description = item.data[0]?.description || "No description available";
        const title = item.data[0]?.title;
        const imageUrl = item.links?.[0]?.href || "";
        const img_id = item.data[0]?.nasa_id;

        updatedCardData.dates.push(date);
        updatedCardData.description.push(description);
        updatedCardData.imagesURL.push(imageUrl);
        updatedCardData.title.push(title);
        updatedCardData.img_id.push(img_id);
      });

      setMyFilteredCardData(updatedCardData);
    }
  }, [planetData]);

  

  return (
    <>
      <div className="body" ref={bodyRef}>
        <div className="solarContainer">
          <div className="sun">
            <img src="/assets/sun.png" alt="sun" />
          </div>
          <div className="mercury"></div>
          <div className="venus"></div>
          <div className="earth">
            <div className="moon"></div>
          </div>
          <div className="mars"></div>
          <div className="jupiter"></div>
          <div className="saturn"></div>
          <div className="uranus"></div>
          <div className="neptune"></div>
          <div className="pluto"></div>
        </div>
      </div>

      <ul className="planets">
        <li onClick={() => setPlanet('mercury')}>Mercury</li>
        <li onClick={() => setPlanet('venus')}>Venus</li>
        <li onClick={() => setPlanet('jupiter')}>Jupiter</li>
        <li onClick={() => setPlanet('saturn')}>Saturn</li>
        <li onClick={() => setPlanet('uranus')}>Uranus</li>
        <li onClick={() => setPlanet('neptune')}>Neptune</li>
        <li onClick={() => setPlanet('pluto')}>Pluto</li>
      </ul>

      <div className='planetDataSet'>
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
    </>
  );
}

export default SolarSystem;
