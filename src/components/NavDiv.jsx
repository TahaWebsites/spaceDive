import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function NavDiv() {
    const navRef = useRef(null);
    const [navVisible, setNavVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(true);
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const startDrag = (clientX, clientY) => {
        setOffset({
            x: clientX - position.x,
            y: clientY - position.y,
        });
    };

    const mouseDownHandler = (e) => {
        e.preventDefault();
        startDrag(e.clientX, e.clientY);

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const touchStartHandler = (e) => {
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            startDrag(touch.clientX, touch.clientY);

            document.addEventListener('touchmove', touchMoveHandler);
            document.addEventListener('touchend', touchEndHandler);
        }
    };

    const mouseMoveHandler = (e) => {
        updatePosition(e.clientX, e.clientY);
    };

    const touchMoveHandler = (e) => {
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            updatePosition(touch.clientX, touch.clientY);
        }
    };

    const updatePosition = (clientX, clientY) => {
        const nav = navRef.current;
        if (!nav) return;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const navWidth = nav.offsetWidth;
        const navHeight = nav.offsetHeight;

        const newX = Math.min(Math.max(clientX - offset.x, 0), viewportWidth - navWidth);
        const newY = Math.min(Math.max(clientY - offset.y, 0), viewportHeight - navHeight);

        setPosition({ x: newX, y: newY });
    };

    const mouseUpHandler = () => {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    const touchEndHandler = () => {
        document.removeEventListener('touchmove', touchMoveHandler);
        document.removeEventListener('touchend', touchEndHandler);
    };

    const minimizeHandler = () => {
        setNavVisible(!navVisible);
        setMenuVisible(!menuVisible);
    };

    useEffect(() => {
        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
            document.removeEventListener('touchmove', touchMoveHandler);
            document.removeEventListener('touchend', touchEndHandler);
        };
    }, []);

    return (
        <div
            className='navBar'
            ref={navRef}
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
                position: 'fixed',
            }}
        >
            <div className="controls">
                {menuVisible ? (
                    <p
                        style={{ cursor: "pointer" }}
                        className='explore'
                        onClick={minimizeHandler}
                    >
                        Explore
                    </p>
                ) : (
                    <div className="parentControls">
                        <div className="firstNav"></div>
                        <div
                            className="dragBar"
                            onMouseDown={mouseDownHandler}
                            onTouchStart={touchStartHandler}
                            style={{ cursor: "grab" }}
                        ></div>
                        <div
                            className="thirdNav"
                            onClick={minimizeHandler}
                        >
                            x
                        </div>
                    </div>
                )}
            </div>
            {navVisible && (
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/solarSystem'>The Solar System</Link>
                    <Link to='/earth'>Earth</Link>
                    <Link to='/mars'>Mars</Link>
                    <Link to='/media'>Space Media</Link>
                    <Link to='/apod'>Astronomy Picture of the Day</Link>
                </ul>
            )}
        </div>
    );
}

export default NavDiv;
