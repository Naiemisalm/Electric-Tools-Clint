
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Booking = () => {
    const [user] = useAuthState(auth);


    const handleBooking = event => {
        event.preventDefault();
        const book = event.target.slot.value;
        console.log(book)
        
    }

    return (
        <div>
            <div>
                <div class="hero min-h-screen bg-base-200 grid  gap-3 justify-items-center  mt-2 grid-cols-3 ">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1>purchase</h1>


                            <form onSubmit={handleBooking} className='grid  gap-3 justify-items-center mt-2'>

                                <input type="text" name='name' value={user?.displayName || ""} className="input input-bordered input-accent w-50 max-w" />
                                <input type="text" name='email' value={user?.email || ""} className="input input-bordered input-accent w-full max-w-xs" />
                                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-accent w-full max-w-xs" />
                                <input type="submit" placeholder="Submit" className="btn btn-secondary input-accent w-full max-w-xs" />
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Booking;