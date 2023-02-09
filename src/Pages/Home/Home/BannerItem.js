import React from 'react';
import { Link } from 'react-router-dom';

const BannerItem = ({slider}) => {
  const {image, id, prev, next} = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className='slide-img'>
      <img src={image} className="w-full" alt='' />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">
       <h1 className='text-white font-bold text-6xl'>Affordable <br />
       Price for Car <br />
       Servicing
       </h1>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-5 top-2/4">
      <p className='text-white text-xl w-1/2'>There are many variations of pages of available, But The Majority Have Suffered Alteration In Some Form</p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-5 top-3/4">
      <Link to='/'><button className="btn btn-active btn-secondary mr-5">discover More</button></Link>
      <Link to='/'><button className="btn btn-outline btn-warning">Latest Project</button></Link>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
        <a href={`#slide${next}`} className="btn btn-circle">❯</a>
      </div>
    </div> 
  );
};

export default BannerItem;