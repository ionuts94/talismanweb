import React from 'react';
import './CardItem.css';

const CardItem = ({ title , details, image, ctaText, onClick }) => {
    return (
        <div className="card-container" onClick={ onClick }>
            <div className="hidden-layout-container">
                <h1>{ctaText}</h1>
            </div>
            <div className="card-img-wrapper">
                <div className="image-tab" style={{ backgroundImage: `url('${image}')` }}/>
            </div>
            <h1 className="card-title">{title}</h1>
        </div>
    )
}

export default CardItem
