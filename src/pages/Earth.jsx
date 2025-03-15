import { useEffect, useState, useRef } from 'react'
import Card from '../components/Card.jsx'
import axios from 'axios'
import '../styles/earth.css'

function Earth() {
  const mainImgRef = useRef(null)
  const [fetchData, setFetchData] = useState(null);  
  const [imgIndex, setImgindex] = useState(0);
  const [archiveData, setArchiveData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${import.meta.env.VITE_API_KEY}`)
      .then(response => {
        setFetchData(response.data);
      })
      .catch(err => console.log("Error fetching EPIC data:", err));

    axios.get('https://images-api.nasa.gov/search?q=earth')
      .then(response => {
        setArchiveData(response.data.collection);
      })
      .catch(err => console.log("Error fetching Archive data:", err));

  }, []);

  if (!fetchData || !archiveData) {
    return <img src='/assets/spinner.gif' alt='loading.....' style={{width: "3rem"}}/>;
  }

  if(!document.querySelectorAll('.thumbImg')) {
    return <img src='/assets/spinner.gif' alt='loading.....' style={{width: "3rem"}}/>; 
  }

  const myFilteredData = {
    "imageUrl": [],
    "imageNames": [],
    "date": [],
    "coords": []
  };

  const myFilteredCardData = {
    "dates": [],
    "description": [],
    "imagesURL": [],
    "title": [],
    "img_id": []
  };

  if (fetchData && Array.isArray(fetchData)) {
    fetchData.forEach((item) => {
      let dateConversion = new Date(item.date);

      myFilteredData.imageNames.push(item.image);

      const year = dateConversion.getFullYear();
      let month = dateConversion.getMonth() + 1;
      let date = dateConversion.getDate();
      month = month < 10 ? `0${month}` : month;
      date = date < 10 ? `0${date}` : date;
      const time = dateConversion.toLocaleString('en-GB', { hour12: false });

      myFilteredData.date.push(`${date}-${month}-${year}`);
      const myUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${date}/png/${item.image}.png`;
      myFilteredData.imageUrl.push(myUrl);
      myFilteredData.coords.push(item.centroid_coordinates);
    });
  }

  if (archiveData && archiveData.items) {
    archiveData.items.forEach((item) => {
      const date = new Date(item.data[0]?.date_created).toLocaleDateString();
      const description = item.data[0]?.description || "No description available";
      const title = item.data[0]?.title;
      const imageUrl = item.links?.[0]?.href 
      const img_id = item.data[0]?.nasa_id

      myFilteredCardData.dates.push(date);
      myFilteredCardData.description.push(description);
      myFilteredCardData.imagesURL.push(imageUrl);
      myFilteredCardData.title.push(title);
      myFilteredCardData.img_id.push(img_id);
    });
  }

  const handleImgThumbnail = (e) => {
    setImgindex(Number(e.target.dataset.index));
    if (mainImgRef.current) {
      mainImgRef.current.src = myFilteredData.imageUrl[imgIndex];
    }
  };

  const rotateEarthHandler = (e) => {
    e.preventDefault();
    setImgindex((prevIndex) => (prevIndex === 12 ? 1 : prevIndex + 1));
  };

  return (
    <div className="earthPage">
      <div className="mainEarthPage">
        <div className="thumbnails">
          {myFilteredData.imageUrl.map((item, index) => (
            <img key={index} data-index={index} onClick={handleImgThumbnail} className="thumbImg" src={item} alt="Earth.png" />
          ))}
        </div>
        <img ref={mainImgRef} className="mainImg" src={myFilteredData.imageUrl[imgIndex]} alt="Earth.png" />
        <div className="mainDetails">
          <div className='earthDate'>
            {myFilteredData.date[imgIndex] ? <h2>
              <lord-icon
                src="https://cdn.lordicon.com/uphbloed.json"
                trigger="hover"
                colors="primary:#fff,secondary:#fff"
                style={{ width: "50px", height: "50px", margin: "0 1rem 0 0" }}>
              </lord-icon>
              {myFilteredData.date[imgIndex]}</h2> : <p>Loading...</p>}
          </div>
          <div className='earthDetails'>
            <div className="earthCard">
              <p>Latitude</p>
              {myFilteredData.coords[imgIndex]?.lat ? <p>{myFilteredData.coords[imgIndex].lat}</p> : <p>Loading...</p>}
            </div>
            <div className="earthCard">
              <p>Longitude</p>
              {myFilteredData.coords[imgIndex]?.lon ? <p>{myFilteredData.coords[imgIndex].lon}</p> : <p>Loading...</p>}
            </div>
            <div className="earthCard">
              <p>Sun Position</p>
              <p>Right</p>
            </div>
            <div className="earthCard">
              <p>Satellite Position</p>
              <p>Top</p>
            </div>
            <div className="earthCard">
              <p>Camera</p>
              <p>EPIC</p>
            </div>
            <div className="earthCard">
              <p>SpaceCraft</p>
              <p>JNOAA DSCOVR</p>
            </div>
          </div>
          <div className='earthButtons'>
            <a href="#" onClick={rotateEarthHandler}>Rotate Earth</a>
            <a href="#earthArchives">View Archives</a>
          </div>
        </div>
      </div>

      <div id='earthArchives' className="earthArchives">
        {myFilteredCardData.imagesURL.map((url, index) => (
          <Card key={index} title={myFilteredCardData.title[index]} description={myFilteredCardData.description[index]} imageUrl={url} date={myFilteredCardData.dates[index]} imgID={myFilteredCardData.img_id[index]} />
        ))}
      </div>
    </div>
  );
}

export default Earth;
