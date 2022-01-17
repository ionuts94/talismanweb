import React from 'react';
import { useNavigate } from 'react-router-dom';
import { items } from '../../shopItems.js';
import CardItem from '../../components/CardItem/CardItem.js';
import './ShopPage.css';

const ShopPage = () => {
    const navigate = useNavigate();

    return (
        <div className="shop-page-container">
            <div className="shop-page-header">
            </div>

            <div className="main-items-container">
                {
                    Object.keys(items).map(key => 
                        <CardItem 
                            key={key+key}
                            title={key.toUpperCase()}
                            image={[items[key].mainImage]}
                            ctaText="View More"
                            onClick={() => navigate(`/shop/${key.toLowerCase()}`)}
                        />
                )}
            </div>
            
        </div>
    )
}

export default ShopPage
