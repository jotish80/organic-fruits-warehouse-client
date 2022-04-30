import React from 'react';
import useItems from '../Hooks/useItems';
import ItemCard from '../ItemCard/ItemCard';

const Items = () => {
    const [items, setItems] = useItems();
    return (
        <div className='container mx-auto text-center row'>
            <h2>Items</h2>
            {
                items.map(item => <ItemCard item={item} key={item.id} />)
            }
        </div>
    );
};

export default Items;