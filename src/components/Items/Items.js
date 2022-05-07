import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../Hooks/useItems';
import ItemCard from '../ItemCard/ItemCard';
import './Items.css';

const Items = () => {
    const [items, setItems] = useItems();
    return (
        <div id='items' className='container mx-auto text-center row mt-5 mb-5'>
            <h1>Items</h1>
            {
                items.map(item => <ItemCard item={item} key={item._id} />)
            }
            <Link to='/manageitems'><button className='btn btn-link fs-5 mt-5 text-center text-success mb-5'>Manage Inventories</button></Link>
        </div>
    );
};

export default Items;