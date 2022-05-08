import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ItemDetails = () => {

    const { itemsId } = useParams();
    const [items, setItems] = useState({});
    const [quantity, setQuantity] = useState(0);
    const [change, setChanges] = useState('hello');

    useEffect(() => {
        fetch(`https://sheltered-fortress-61368.herokuapp.com/item/${itemsId}` )
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })

    }, [items]);

    const handleDeliver = () => {

        const url = `https://sheltered-fortress-61368.herokuapp.com/items/${itemsId}`
        fetch(url, {

            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => {
                res.json()

            })
            .then(data => {
                console.log(parseInt(data?.count));
                toast('Delivered', {position: toast.POSITION.TOP_CENTER});
                setQuantity(parseInt(data?.count))
                setChanges('update')
            })
        console.log(quantity);
    }



    const handleUpdateCount = () => {
        const updatedQuantity = { number: quantity };
        //send data to server
        fetch(`https://sheltered-fortress-61368.herokuapp.com/updatequantity/${itemsId}`, {

            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                toast('Quantity added successfully', {position: toast.POSITION.TOP_CENTER});
                setItems(data);
                setQuantity('');
                setChanges('something changed')
            })

    }

    return (
        <div className='container mt-5 text-center row mx-auto'>
            <ToastContainer />
            <Link to='/manageitems'><button className='btn btn-link mt-5 fs-5 text-success'>Manage Inventories</button></Link>
            <div className='col-md-6'>
                <div className="card" style={{ width: '22rem' }}>
                    <img src={items.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{items.name}</h5>
                        <p className="card-text"> {items.description}</p>
                        <h5>${items.price}</h5>
                        <h5>Quantity: {items.quantity}</h5>
                        <h5>Supplier: {items.supplierName}</h5>
                        <button onClick={handleDeliver} style={{ backgroundColor: '#7AA93C' }} className="btn w-100 text-dark fs-5">Delivered </button>
                    </div>
                </div>
            </div>
            <div style ={{marginTop: '200px'}} className='col-md-6'>
                <div className="mb-3">
                    <h3 className="form-label">Add quantity</h3>
                    <input onChange={(e) => setQuantity(e.target.value)} value={quantity} type="number" name='number' className="form-control" />
                </div>
                <button onClick={handleUpdateCount} className="btn btn-primary">Increase Quantity</button> <br />

            </div>

        </div>
    );
};

export default ItemDetails;