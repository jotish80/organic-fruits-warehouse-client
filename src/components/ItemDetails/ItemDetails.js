import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetails = () => {

    const { itemsId } = useParams();
    const [items, setItems] = useState({});


    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                const items = data.filter(item => item._id == itemsId)
                setItems(items[0])
            })
    }, []);


    return (
        <div className='container mt-5 text-center row mx-auto'>
            <div className='col-md-6'>
                <div className="card" style={{ width: '22rem' }}>
                    <img src={items.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{items.name}</h5>
                        <p className="card-text"> {items.description}</p>
                        <h5>${items.price}</h5>
                        <h5>Quantity: {items.quantity}</h5>
                        <h5>Supplier: {items.supplierName}</h5>
                        <button style={{ backgroundColor: '#7AA93C' }} className="btn w-100 text-dark fs-5">Delivered </button>
                    </div>
                </div>
            </div>
            <form className='col-md-6'>
                <div className="mb-3">
                    <label className="form-label">Number</label>
                    <input type="number" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button> <br />
                 <Link to='/manageitems'><button className='btn btn-link mt-5 fs-5'>Manage Inventories</button></Link>
            </form>
        </div>
    );
};

export default ItemDetails;