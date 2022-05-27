
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Booking = ({ SetTools, setBooking }) => {

    const [user] = useAuthState(auth);


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
        <div>
            <div>
                <div class="hero min-h-screen bg-base-200 grid  gap-3 justify-items-center  mt-2 grid-cols-2 px-28">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 className='text-3xl'>purchase</h1>


                            <form onSubmit={handleBooking} className='grid  gap-3 justify-items-center mt-2'>
                                <h3>Book:{setBooking.name}</h3>

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
    );
};

export default Booking;