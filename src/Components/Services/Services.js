import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [service, setService]=useState([]);


    useEffect( () => {
        fetch("data.json")
        .then((res) => res.json())
        .then((data) => setService(data));
    },[]);
    return (
        
        <div>
            <h1 className='services-header'>My package
</h1>
            <div className='services-parent'>
              
              {
                service.map((service) => <Service 
                key={service._id}
                service={service}
                />)
            }
            
        </div>
        </div>
    );
};

export default Services;