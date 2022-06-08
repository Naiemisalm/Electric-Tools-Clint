import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <div class="carousel w-full mb-10">
      <div id="slide1" class="carousel-item relative w-full">
        <img src="https://i.ytimg.com/vi/aW1_cV6HH5I/maxresdefault.jpg" alt=''  class="w-full w-50 max-h-80" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img src="https://www.thespruce.com/thmb/CAVD29LSILk7AKTIUqnGYEERvU4=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/top-electrical-tools-1152575_12_needlenosepliers_3255-0bee5993441d42ac9e5ab71611aca72a.jpg" alt='' class="w-full w-50 max-h-80" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img src="https://www.thespruce.com/thmb/sjEy3OUD5V6Cb3BmXC-gxvanZys=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/top-electrical-tools-1152575_09_tonguegroovepliers_3242-10f7403cafb44b7bb11ae89a31b8f865.jpg" alt=''class="w-full w-50 max-h-80" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img src="https://www.thespruce.com/thmb/UEGnTKJ6nJ7Rv-0xc1PeD6ROnzI=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/top-electrical-tools-1152575_06_phillipsheadscrewdriver_3259-1136f33f560241db9f34ad3d5a7cee2e.jpg"alt='' class="w-full w-50 max-h-80" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">❮</a>
          <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;