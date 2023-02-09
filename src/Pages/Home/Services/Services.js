import React, { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([])
  fetch('services.json')
  .then(res => res.json())
  .then(data => setServices(data))
  return (
    <div className='py-10'>
      <div>
        <p className="text-2xl text-orange-600 text-center">Services</p>
        <h1 className='text-4xl font-bold text-center'>Our Service Area</h1>
        <p className="text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
        {
          services.map(service => (<ServiceCard
          key={service._id}
          service={service}
          ></ServiceCard>))
        }
      </div>
      <div className='flex justify-center'>
        <button className='btn btn-outline btn-error'>Mor Services</button>
        </div>
    </div>
  );
};

export default Services;