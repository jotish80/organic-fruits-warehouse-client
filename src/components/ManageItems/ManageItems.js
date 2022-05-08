import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import useItems from '../Hooks/useItems';

const ManageItems = () => {

    const [user] = useAuthState(auth);
    const [items, setItems] = useItems([]);
    console.log(items);

    // deleting items 
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = (`https://sheltered-fortress-61368.herokuapp.com/items/${id}`);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }

    const { register, handleSubmit } = useForm();
    
    // new item add by using react hook form
    const onSubmit = (data) => {
        console.log(data)
        const url = `https://sheltered-fortress-61368.herokuapp.com//items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...data, email: user.email })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('New item added successfully', { position: toast.POSITION.TOP_CENTER });

            })

    }

    return (
        <>
            <div className='w-25 mx-auto'>
                <ToastContainer />
                <h1 className='mt-3  mb-3' >Manage items</h1>
                <form className='d-flex flex-column shadow-lg p-3 rounded-3' onSubmit={handleSubmit(onSubmit)}>
                    <h4 className='text-center'>Add items</h4>
                    <input style={{ borderRadius: '15px', padding: '4px' }} className='mb-2' placeholder='name' {...register("name")} />
                    <input style={{ borderRadius: '15px', padding: '4px' }} className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input style={{ borderRadius: '15px', padding: '4px' }} className='mb-2' placeholder='price' type="number" {...register("price")} />
                    <input style={{ borderRadius: '15px', padding: '4px' }} className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input className='btn btn-success' style={{ borderRadius: '15px', padding: '4px' }} type="submit" value="Add Item" />
                </form>
            </div>
            <div className='container row mx-auto mt-5 text-center'>
                {
                    items.map(item =>
                        <div class="card border-0 mb-3" style={{ width: '15rem' }}>
                            <img src={item.img} class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Name: {item.name}</h5>
                                <h5 class="card-title">Quantity: {item.quantity}  </h5>
                                <h5 class="card-title">Price: {item.price}  </h5>

                                <button onClick={() => handleDelete(item._id)} class="btn btn-success">Delete</button>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    );
};

export default ManageItems;