import React from 'react';

const Booking = () => {
    return (
        <div>
            <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="font-bold text-lg text-secondary">Booking for :{name}!</h3> */}

                    <form className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        {/* <input type="text" disabled value={format(date, 'pp')} className="input input-bordered input-accent w-full max-w-xs" /> */}

                        <select name='slot' className="select select-bordered w-full max-w-xs">

                            {/* {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            } */}
                        </select>
                        {/* <input type="text" name='name' disabled value={user?.displayName || ""} className="input input-bordered input-accent w-full max-w-xs" /> */}
                        {/* <input type="text" name='email' disabled value={user?.email || ""} className="input input-bordered input-accent w-full max-w-xs" /> */}
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="submit" placeholder="Submit" className="btn btn-secondary input-accent w-full max-w-xs" />
                    </form>

                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Booking;