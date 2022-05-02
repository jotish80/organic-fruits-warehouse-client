import React from 'react';
import { useForm } from 'react-hook-form';
import useItems from '../Hooks/useItems';

const ManageItems = () => {

    const [items , setItems] = useItems();
    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url =(`http://localhost:5000/items/${id}`);
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(item => item._id!== id );
                setItems(remaining);
            })

        }
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
         console.log(data);
         const url =`http://localhost:5000/items`;
         fetch(url, { 
             method: 'POST',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(result => {
             console.log(result); 
         })
    }
   
    return (
        <>
        <div className='w-25 mx-auto'>
            <h1>this is manage items</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("firstName")} />
                <textarea className='mb-2' placeholder='description' {...register("lastName")} />
                <input className='mb-2' placeholder='price' type="number" {...register("age")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Item"/>
            </form>
        </div>
        <div className='container row mx-auto mt-5'>
            {
                items.map(item =>
                <div className='col-md-4 border border-success gy-3 p-2' key = {item._id}>
                 <div  className=''>
                     <h4>Name: {item.name}</h4>
                     <h5>Quantity: {item.quantity}</h5>
                     <h5>Price: {item.price}</h5>
                     <button onClick={()=>handleDelete(item._id)}>Delete</button>
                </div>
                </div>
                )
            }
        </div>
        </>
    );
};

export default ManageItems;