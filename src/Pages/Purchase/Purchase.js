import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Booking from '../Home/Booking';
// import ToolsBooking from '../Home/ToolsBooking';
import './Purchase.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Purchase = () => {
  const [user] = useAuthState(auth);

  // const [tools, setTools] = useState({});
  // const [booking, setBooking] = useState(null);

  const { purchaseId } = useParams();
  const [tools, SetTools] = useState({});

  useEffect(() => {
    const url = (`http://localhost:5000/tools/${purchaseId}`)
    fetch(url)
      .then(res => res.json())
      .then(data => SetTools(data))
  }, [purchaseId]);

  //Booking 
  const handleBooking = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    console.log('cliked', name, email)

    const booking = {

        name: name,
        email: email,
        phone: phone
    }
    fetch('http://localhost:5000/', {
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)

    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}

  return (
    <div id='grid'>
      {/* <ToolsBooking></ToolsBooking> */}
      <div>
            <div class="card w-96 bg-base-100 shadow-xl cols-6">
        <figure><img src={tools.img} alt="" /></figure>
        <div class="card-body">
          <h2 class="card-title">{tools.name}</h2>
          <h4>Price: {tools.price}</h4>
          <h4>Available Quantity : {tools.available}</h4>
          <h4>Minimum Quantity: {tools.minimun}</h4>
          <p> {tools.description}</p>

          <div class="card-actions justify-center">
            <input type="text" placeholder="Quantity" class="input input-bordered input-secondary w-full max-w-xs" />
            <button class="btn btn-secondary text-sm">Oder</button>
          </div>
        </div>
      </div>
        </div>
      <div className='cols-6'>
      <div>
            <div>
                <div class="hero min-h-screen bg-base-200 grid  gap-3 justify-items-center  mt-2 grid-cols-2 px-28">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 className='text-3xl'>purchase</h1>


                            <form onSubmit={handleBooking} className='grid  gap-3 justify-items-center mt-2'>
                                <h3>Book:</h3>

                                <input type="text" name='name' value={user?.displayName || ""} className="input input-bordered input-accent w-50 max-w" />
                                <input type="text" name='email' value={user?.email || ""} className="input input-bordered input-accent w-full max-w-xs" />
                                <input type="number" name='quantuty' className="input input-bordered input-accent w-full max-w-xs" />
                                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-accent w-full max-w-xs" />
                                <input type="submit" placeholder="Submit" value='purchase' className="btn btn-secondary input-accent w-full max-w-xs" />
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {/* <Booking 
        SetTools ={setTools}
        setBooking={setBooking}
        ></Booking> */}
      </div>
    </div>
  );
};

export default Purchase;