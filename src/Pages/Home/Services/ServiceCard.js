import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
  const {img, price, title} = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-white shadow-xl">
    <figure>
      <img src={img} className="p-5 rounded-3xl" alt="Service" />
      </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <div className="card-actions justify-end">
      <p className='text-orange-600 text-2xl font-semibold'>Price: ${price}</p>
      <Link to=''>
      <svg fill="none" stroke="currentColor" className='w-6 text-orange-600' stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
</svg>
      </Link>
      </div>
    </div>
  </div>
    </div>
  );
};

export default ServiceCard;