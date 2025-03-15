import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'


function Card(props) {

    const { title, description, imageUrl, date, imgID } = props;
    return (
        <div className='cardComponent'>
            <img className='cardImg' src={imageUrl} alt="" />
            <div className="cardTextContent">
                <p>{date}</p>
                <p>{title}</p>
                <Link to='/detailsPage' state={{ title: title, imageUrl: imageUrl, date: date, description: description }}>Details</Link>
            </div>
        </div>
    )
}

export default Card 