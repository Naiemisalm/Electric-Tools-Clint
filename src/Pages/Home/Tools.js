import React, { useEffect, useState } from 'react';
import SingleTools from './SingleTools';

const Tools = () => {
    const [tools, setTools] = useState([]);
    // const [booking, setBooking] = useState(null);
    useEffect( () => {
        fetch('http://localhost:5000/tools')
        // fetch('Tools.json')
        .then(res=>res.json())
        .then(data=> setTools(data))
    },[])
    return (
        <div>
            <div className='py-10 grid sm:grid-cols-1 md:grid-cols--2 lg:grid-cols-3 gap-5'>
            {
                tools.map(tool=> <SingleTools
                key={tools._id}
                tool={tool}
                    tools={tools}
                    // setBooking={setBooking}
                ></SingleTools>)
            }
        </div>

        </div>
    );
};

export default Tools;