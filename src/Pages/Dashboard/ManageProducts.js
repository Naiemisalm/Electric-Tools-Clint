import React, { useState } from 'react';
import useTools from '../../hooks/useTools';

const ManageProducts = () => {
    const [services, setServices] = useTools();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
        <h2>Manage your services</h2>
        {
            services.map(service => <div key={service._id}>
                {/* <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5> */}
                <h5 className='text-2xl px-5'>{service.name}<button onClick={() => handleDelete(service._id)} class="btn btn-xs px-8 mt-2">Delete</button></h5>
                
            </div>)
        }
    </div>
    );
};

export default ManageProducts;