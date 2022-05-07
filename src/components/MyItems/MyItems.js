import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
 
 

const MyItems = () => {
     
    const [user] = useAuthState(auth);
    console.log(user.email);
    const email =[user.email];
    console.log(email);
    
    const[items, setItems] = useState();
    

    useEffect(() => {
       fetch(`https://sheltered-fortress-61368.herokuapp.com/items/${email}`)
       .then(res => res.json())
       .then(data => console.log(data))
    },[items])
    return (
        <div>
            <h1>this is my items </h1>
            
             
        </div>
    );
};

export default MyItems;