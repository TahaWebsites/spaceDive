import { Link } from 'react-router-dom'
import '../styles/landing.css'

function Landing() {
    return (
        <>
            <div className="landingPage">
                <div className="hero">
                    <h1 className='heading'>DIVE INTO SPACE LIKE NEVER BEFORE</h1>
                    <h3>EXPLORE THE UNIVERSE LIKE NEVER BEFORE—DISCOVER BREATHTAKING IMAGERY, FASCINATING FACTS, AND REAL-TIME DATA FROM NASA. YOUR JOURNEY THROUGH SPACE STARTS HERE, WHERE CURIOSITY MEETS THE COSMOS.</h3>
                    <div className="buttons">
                        <a href="#explore">START EXPLORING</a>
                        <a href="#technicalDetails">FEATURES</a>
                    </div>
                </div>
                <div className="img">
                    <img src="/assets/img.webp" alt="" />
                </div>
            </div>
            <section id="explore">
                <div className="exploreText">
                    <h2>ABOUT THIS WEB PRODUCT</h2>
                    <p>The goal of this application is to create a REACT front-end for the REST APIs that are found in the <Link to='https://api.nasa.gov/?search=apod' target='_blank'>api.nasa.gov</Link> catalog. These APIs expose a wealth of images and information, such as data on comets, measurements of mars, and real-time imagery of earth.</p>
                </div>
                <div className="exploreCards">
                    <div className="card card1">
                        <img src="./assets/earthBanner.PNG" alt="" />
                        <div className="cardContent">
                            <h3>EARTH</h3>
                            <p>EXPLORE OUR HOME PLANET—DISCOVER ITS BEAUTY, CLIMATE, AND EVER-CHANGING LANDSCAPE FROM SPACE</p>
                        </div>
                        <div className="cardButtons">
                            <Link to='/earth' className='cardButton'>Check it Out</Link>
                            <Link to='https://epic.gsfc.nasa.gov/' className='cardButton' target='_blank'>About Data</Link>
                        </div>
                    </div>
                    <div className="card card1">
                        <img src="./assets/solarSystemBanner.PNG" alt="" />
                        <div className="cardContent">
                            <h3>SOLAR SYSTEM</h3>
                            <p>JOURNEY THROUGH OUR SOLAR SYSTEM—UNVEIL THE MYSTERIES OF PLANETS, MOONS, AND BEYOND</p>
                        </div>
                        <div className="cardButtons">
                            <Link to='/solarSystem' className='cardButton'>Check it Out</Link>
                            <Link to='https://images.nasa.gov/#/' className='cardButton' target='_blank'>About Data</Link>
                        </div>
                    </div>
                    <div className="card card1">
                        <img src="./assets/marsBanner.PNG" alt="" />
                        <div className="cardContent">
                            <h3>MARS</h3>
                            <p>DIVE INTO THE WORLD OF MARS, SPACE ROCKS, THEIR ORIGINS, AND POTENTIAL IMPACTS.</p>
                        </div>
                        <div className="cardButtons">
                            <Link to='/mars' className='cardButton'>Check it Out</Link>
                            <Link to='https://github.com/corincerami/mars-photo-api' className='cardButton' target='_blank'>About Data</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="technicalDetails">
                <div className="technicalDetailsContent">
                    <h2>TECHNICAL DETAILS</h2>
                    <p> This project utilizes NASA's APIs to provide real-time data, high-resolution imagery, and detailed information about Earth and the Solar System. Built with React.js. The website dynamically fetches and displays data from sources like NASA’s Astronomy Picture of the Day (APOD) API. Interactive elements, including embedded iframes for live satellite views, enhance user engagement. Optimized for performance, the application follows a modular architecture, ensuring scalability and efficient state management.</p>
                </div>
                <div className="technical technical1">
                    <img src="./assets/ss2.2.png" alt="Picture" />
                    <div className="technicalContent">
                        <h2> <lord-icon
                            src="https://cdn.lordicon.com/gvtjlyjf.json"
                            trigger="hover"
                            colors="primary:#646cff,secondary:#646cff"
                            style={{ width: "50px", height: "50px", margin: "0 1rem 0 0" }}>
                        </lord-icon> REACT.JS</h2>
                        <p>React.js is a popular JavaScript library for building dynamic user interfaces. It uses reusable components, virtual DOM for efficient updates, and supports state management, making web applications fast, scalable, and maintainable.</p>

                        <h2>
                            <lord-icon
                                src="https://cdn.lordicon.com/ubpgwkmy.json"
                                trigger="hover"
                                colors="primary:#646cff,secondary:#646cff"
                                style={{ width: "50px", height: "50px", margin: "0 1rem 0 0" }}>
                            </lord-icon>
                            REACT.JS ROUTES</h2>
                        <p>React.js routing enables seamless navigation in single-page applications. Using React Router, it defines routes, links components to URLs, supports dynamic routing, nested routes, and ensures smooth transitions without full page reloads.</p>

                        <h2>
                            <lord-icon
                                src="https://cdn.lordicon.com/jkpegboq.json"
                                trigger="hover"
                                colors="primary:#646cff,secondary:#646cff"
                                style={{ width: "50px", height: "50px", margin: "0 1rem 0 0" }}>
                            </lord-icon>
                            REACT HOOKS</h2>
                        <p>React Hooks let you use state and lifecycle features in functional components. Common hooks include useState, useEffect, and useRef. They simplify logic reuse, side effects, and state management in modern React apps.</p>
                    </div>
                </div>
                <div className="technical technical2">
                    <img src="./assets/ss2Cropped.png" alt="Picture" />
                    <div className="technicalContent">
                        <h2>
                            <lord-icon
                                src="https://cdn.lordicon.com/yvjimpju.json"
                                trigger="hover"
                                colors="primary:#646cff,secondary:#646cff"
                                style={{ width: "50px", height: "50px", margin: "0 1rem 0 0" }}>
                            </lord-icon>
                            AXIOS</h2>
                        <p>Axios is a promise-based HTTP client for JavaScript. It simplifies making asynchronous HTTP requests to APIs, supports request/response interception, automatic JSON data transformation, and works in both browsers and Node.js.</p>

                        <h2>
                            <lord-icon
                                src="https://cdn.lordicon.com/cplzsudc.json"
                                trigger="hover"
                                colors="primary:#646cff,secondary:#646cff"
                                style={{ width: "50px", height: "50px", margin: "0 1rem 0 0" }}>
                            </lord-icon>
                            SERVERLESS FUNCTIONS</h2>
                        <p>Serverless functions are small, single-purpose functions run in cloud environments without managing servers. They automatically scale, execute on demand, and are commonly used for APIs, webhooks, and backend tasks in modern applications.</p>

                        <h2>
                            <lord-icon
                                src="https://cdn.lordicon.com/xqdfobxg.json"
                                trigger="hover"
                                colors="primary:#646cff,secondary:#646cff"
                                style={{ width: "50px", height: "50px", margin: "0 1rem 0 0" }}>
                            </lord-icon>
                            RESTful API</h2>
                        <p>A RESTful API (Representational State Transfer) is an architectural style for designing networked applications. It uses standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources, ensuring stateless communication and scalability.</p>
                    </div>
                </div>
            </section>
            <section id="techUsed">
                <a href="www.javascript.com" target='_blank'>
                    <i class="fa-brands fa-js"></i>
                    <h2>JAVASCRIPT</h2>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'>
                    <i class="fa-brands fa-css3-alt"></i>
                    <h2>CSS</h2>
                </a>
                <a href="react.dev" target='_blank'>
                    <i class="fa-brands fa-react"></i>
                    <h2>REACT JS</h2>
                </a>
                <a href="https://github.com/TahaWebsites" target='_blank'>
                    <i class="fa-brands fa-github"></i>
                    <h2>GITHUB</h2>
                </a>
                <a href="https://nodejs.org/en" target='_blank'>
                    <i class="fa-brands fa-node-js  "></i>
                    <h2>NODE.JS</h2>
                </a>
                <a href="onrender.com" target='_blank'>
                    <i class="fa-solid fa-server"></i>
                    <h2>ONRENDER</h2>
                </a>
            </section>
        </>
    )
}

export default Landing