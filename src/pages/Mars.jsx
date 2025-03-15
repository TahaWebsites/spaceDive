import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/mars.css'

function Mars() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rover, setRover] = useState('curiosity');

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&api_key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => {
        setData(response.data.photos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [rover]);

  const handleRoverChange = (e) => {
    setRover(e.target.value);
  };

  if (loading) {
    return <img src='/assets/spinner.gif' alt='loading.....' style={{width: "3rem"}}/>;
  }

  return (
    <div className="marsLandingPage">
      <div className="marsTextContent">
        <h1>Mars Archive</h1>
        <div className="filterContent">
          <div className="rover" onChange={(e) => handleRoverChange(e)}>

            <select name="rover" id="rover">
              <option value="curiosity">Rover: Curiosity</option>
              <option value="opportunity">Rover: Opportunity</option>
              <option value="spirit">Rover: Spirit</option>
            </select>
          </div>
        </div>
        <div className="cameras">
          <p>FHAZ – Front Hazard Avoidance Camera</p>
          <p>RHAZ – Rear Hazard Avoidance Camera</p>
          <p>MAST – Mast Camera</p>
          <p>CHEMCAM – Chemistry and Camera Complex</p>
          <p>MAHLI – Mars Hand Lens Imager</p>
          <p>MARDI – Mars Descent Imager</p>
          <p>NAVCAM – Navigation Camera</p>
          <p>PANCAM – Panoramic Camera</p>
          <p>MINITES – Miniature Thermal Emission Spectrometer</p>

        </div>
      </div>

      <div className="marsData">
        {data.map((item, index) => {
          const cameraName = item.camera.name; // Accessing the camera's name
          return (
            <div key={index}>
              <h1>{cameraName}</h1> {/* Display the camera name */}
              <p>Earth Date: {item.earth_date}</p>
              <img
                src={item.img_src}
                alt={`Mars Image ${item.id}`}
                style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Mars;
