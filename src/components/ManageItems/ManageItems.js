import React from 'react';
import { useForm } from 'react-hook-form';

const ManageItems = () => {
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
        <div className='w-50 mx-auto'>
            <h1>this is manage items</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("firstName")} />
                <textarea className='mb-2' placeholder='description' {...register("lastName")} />
                <input className='mb-2' placeholder='price' type="number" {...register("age")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add New Item"/>
            </form>
        </div>
    );
};

export default ManageItems;