import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../../shopItems';
import CardItem from '../../components/CardItem/CardItem';
import './ItemsPage.css';

const ItemsPage = () => {
    const { category } = useParams();
    console.log(category);
    console.log(items[category].items)

    return (
        <div className="shop-page-container">
            <div className="shop-page-header">
            </div>
            
            <div className="items-container">
                {
                    items[category].items.map(item => 
                        <CardItem 
                            id={item.id}
                            key={item.name + item.id}
                            image={item.img}
                            title={item.name}
                            details={item.details}
                            price={item.price}
                            showArrows={true}
                        />
                    )
                }
            </div>

        </div>
    )
}

export default ItemsPage
