 
 
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
 
 

const MyItems = () => {
     
    const [user] = useAuthState(auth);
    const[orders, setOrders] = useState([]);
    
    

    useEffect(() => {
        const email = user.email;
        fetch(`https://sheltered-fortress-61368.herokuapp.com/orders?email=${email}`)
        .then(res => res.json())
        .then(data=> setOrders(data))
         
    },[user])
    return (
        <div>
            <h1>this is my items {orders.length}</h1>
            
             
        </div>
    );
};

export default MyItems;