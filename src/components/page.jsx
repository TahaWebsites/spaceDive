import React from 'react'
import { useLocation, Link } from "react-router-dom";
import '../styles/page.css'

function Page() {

    const location = useLocation()
    const { title, description, imageUrl, date } = location.state;
    console.log(title)

    return (
        <div className='page'>
            <div className="img">
                <img src={imageUrl} alt="" />
            </div>
            <div className="detailsPageTextContent">
                <h1>{title}</h1>
                <p>Date: {date}</p>
                <p>Credits: NASA</p>
                <p>Center: JPL</p>
                <p>{description}</p>
                <Link to='#' onClick={() => window.history.back()} className='back'>Back</Link>
            </div>
        </div>
    )
}

export default Page