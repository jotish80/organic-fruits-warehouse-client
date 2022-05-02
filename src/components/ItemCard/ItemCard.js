import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCard = (props) => {

    const {_id, name, price, img, description, supplierName, quantity} = props.item;
    const navigate = useNavigate();

    const navigateToItemDetail = (id) => {
        navigate(`/items/${id}`)
    }

    return (
        <div className='col-md-6 col-sm-12 col-lg-4 gx-5 mt-2'>
            <div className="card farmer" style={{width: '18rem'}}>
            <img src= {img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"> {description}</p>
                <h5>${price}</h5>
                <h5>Quantity: {quantity}</h5>
                <h5>Supplier: {supplierName}</h5>
                 <button style={{backgroundColor:'#7AA93C'}} onClick={()=>navigateToItemDetail(_id) } className="btn w-100 text-dark fs-5">Update Stock </button>
            </div>
        </div>
        </div>
    );
};

export default ItemCard;