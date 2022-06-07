import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://i.ytimg.com/vi/aW1_cV6HH5I/maxresdefault.jpg"
          alt="First slide"
          width="100%" height='500'
        />
        <Carousel.Caption>
        </Carousel.Caption>
     
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Banner;