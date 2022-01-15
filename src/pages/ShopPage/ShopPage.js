import React from 'react';
import { items } from '../../shopItems.js';
import './ShopPage.css';

const ShopPage = () => {
    console.log(items);
    return (
        <div className="shop-page-container">
            <div className="shop-page-header">
            </div>

            <div className="items-container">
                {Object.keys(items).map(key => 
                    <h1 style={{ color: 'seashell' }}>{key.toLocaleUpperCase()}</h1>
                )}
            </div>
            
        </div>
    )
}

export default ShopPage
