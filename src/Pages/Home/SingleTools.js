import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTools = ({tool}) => {
    const {name, img, price, available,minimun, _id, description} = tool;
    const navigate =useNavigate();
    
    const handeleService = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <h4>Price: {price}</h4>
          <h4>Available Quantity : {available}</h4>
          <h4>Minimum Quantity: {minimun}</h4>
          <p> {description}</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary"  onClick={() => { handeleService(_id) }}>Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default SingleTools;