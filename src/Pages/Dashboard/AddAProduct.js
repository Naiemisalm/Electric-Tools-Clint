import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = (`https://aqueous-garden-58958.herokuapp.com/tools`);
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
        <div class="card w-96 bg-slate-400 shadow-xl">
            <div class="card-body">
            <form className=' flex-column block' onSubmit={handleSubmit(onSubmit)}>
                     <input className=' mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                     <input className='mb-3' placeholder='Photo Url' type ="text" {...register("img")} />
                     <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                     <input className='mb-3' placeholder='Available Quantity ' type="number" {...register("quantity")} />
                     <input className='mb-3' placeholder='Minimum Quantity ' type="number" {...register("quantity")} />
                     <textarea className='mb-3' placeholder='Discription' {...register("discription", )} />
                     <input className='btn btn-primary mx-auto' type="submit" value="Add product" />
                 </form>
                </div>
            </div>
        
    );
};

export default AddAProduct;