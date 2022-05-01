import React from 'react';
import useItems from '../Hooks/useItems';
import ItemCard from '../ItemCard/ItemCard';
import './Items.css';

const Items = () => {
    const [items, setItems] = useItems();
    return (
        <div className='container mx-auto text-center row mt-5 mb-5'>
            <h1>Items</h1>
            {
                items.map(item => <ItemCard item={item} key={item.id} />)
            }
        </div>
    );
};

export default Items;