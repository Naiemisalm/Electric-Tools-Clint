import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Booking from '../Home/Booking';
import ToolsBooking from '../Home/ToolsBooking';
import './Purchase.css'

const Purchase = () => {
  const [tools, setTools] = useState({});
  const [booking, setBooking] = useState(null);


  return (
    <div id='grid'>
      <ToolsBooking></ToolsBooking>
      <div className='cols-6'>
        <Booking 
        SetTools ={setTools}
        setBooking={setBooking}
        ></Booking>
      </div>
    </div>
  );
};

export default Purchase;