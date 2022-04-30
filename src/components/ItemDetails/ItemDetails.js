import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {

    const {itemsId} = useParams();
    const [items, setItems] = useState({});


    useEffect(() =>{
        fetch('../../items.json')
        .then(res => res.json())
        .then(data => {
            const items = data.filter(item => item.id == itemsId)
            setItems(items[0])
        })
    },[]);


    return (
        <div>
            <h1>this is item details</h1>
        </div>
    );
};

export default ItemDetails;