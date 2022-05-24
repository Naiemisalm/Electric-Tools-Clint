import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {

    const { purchaseId } = useParams();
    const [tools, SetTools] = useState({});

    useEffect(() => {
        const url = (`http://localhost:5000/tools/${purchaseId}`)
        fetch(url)
            .then(res => res.json())
            .then(data => SetTools(data))
    }, [purchaseId]);


    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={tools.img} alt="" /></figure>
        <div class="card-body">
          <h2 class="card-title">{tools.name}</h2>
          <h4>Price: {tools.price}</h4>
          <h4>Available Quantity : {tools.available}</h4>
          <h4>Minimum Quantity: {tools.minimum}</h4>
          <p> {tools.description}</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Purchase;