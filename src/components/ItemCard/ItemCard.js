import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCard = (props) => {

    const {id, name, price, img, description} = props.item;
    const navigate = useNavigate();

    const navigateToItemDetail = (id) => {
        navigate(`/items/${id}`)
    }

    return (
        <div className='col-md-6 col-sm-12 col-lg-4 gx-5 mt-2'>
            <div className="card" style={{width: '18rem'}}>
            <img src= {img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"> {description}</p>
                <h5>${price}</h5>
                 <button onClick={()=>navigateToItemDetail(id) } className="btn btn-primary w-100">Update Stock </button>
            </div>
        </div>
        </div>
    );
};

export default ItemCard;