import React from 'react';
import useItems from '../Hooks/useItems';

const Items = () => {
    const [items, setItems] = useItems();
    return (
        <div>
            <h2>Items</h2>
            {
                items.map(item => <li>{item.name}</li>)
            }
        </div>
    );
};

export default Items;