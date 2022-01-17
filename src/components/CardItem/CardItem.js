import React, { useState, useEffect } from 'react';
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import './CardItem.css';

const CardItem = ({ title , details, image, ctaText, onClick, showArrows }) => {
    const [currentImg, setCurrentImg] = useState(0);
    const handleImgLeft = () => {
        if (currentImg === 0) setCurrentImg(image.length - 1);
        else setCurrentImg(currentImg => currentImg - 1);
    }
    const handleImgRight = () => {
        if (currentImg === image.length - 1) setCurrentImg(0)
        else setCurrentImg(currentImg => currentImg + 1);
    }
    return (
        <div className={`${!showArrows ? 'hoverable-card-container' : null} card-container`} onClick={ onClick }>
            <div className="hidden-layout-container">
                <h1>{ctaText}</h1>
            </div>
            <div className="card-img-wrapper">
                {showArrows && <div onClick={handleImgLeft} className="image-arrow arrow-left"><IoChevronBackOutline /></div>}
                <div className="image-tab" style={{ backgroundImage: `url('${image[currentImg]}')` }}/>
                {showArrows && <div onClick={handleImgRight} className="image-arrow arrow-right"><IoChevronForward /></div>}
            </div>
            <h1 className="card-title">{title}</h1>
        </div>
    )
}

export default CardItem
