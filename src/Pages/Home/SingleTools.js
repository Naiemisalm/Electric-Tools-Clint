import React from 'react';

const SingleTools = ({tool}) => {
    const {name, img, price, AvailableQuantity, minimumQuantity,description} = tool;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <h4>Price: {price}</h4>
          <h4>Available Quantity : {AvailableQuantity}</h4>
          <h4>Minimum Quantity: {minimumQuantity}</h4>
          <p> {description}</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default SingleTools;