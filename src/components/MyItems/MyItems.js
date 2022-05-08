
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
 
const MyItems = () => {
    const [user] = useAuthState(auth);
    const[orders, setOrders] = useState([]);
   
    useEffect(() => {
        const email = user.email;
        fetch(`https://sheltered-fortress-61368.herokuapp.com/orders?email=${email}`)
        .then(res =>res.json())
        .then(data=> setOrders(data))
         
    },[]);

     // deleting items by logged user
     const handleDelete = (id) => {
         
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = (`https://sheltered-fortress-61368.herokuapp.com/orders/${id}/${user.email}`);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    const remaining = orders.filter(order=> order._id !== id)
                   setOrders(remaining);
                })
        }
    }
    return (
        <div >
            <h1 className='text-center mt-5'>My all items </h1>
            <div className='container row mx-auto mt-5 text-center'>
                {
                    orders.map(order =>
                        <div class="card border-0 mb-3" style={{width: '15rem'}}>
                            <img src={order.img} class="card-img-top"  />
                            <div class="card-body">
                                <h5 class="card-title">Name: {order.name}</h5>
                                <h5 class="card-title">Quantity: {order.quantity}  </h5>
                                <h5 class="card-title">Price: {order.price}  </h5>
                                <button onClick={()=>handleDelete(order._id)} class="btn btn-success">Delete</button>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default MyItems;