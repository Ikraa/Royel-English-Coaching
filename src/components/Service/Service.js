//=======================Import File and necessary data=============== 
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import CardService from './ServiceCard';
import { jsonService } from '../../data/jsonService';

const Service = () => {
  //======================handle Api and fetch data======================
  const [services, setService] = useState(jsonService);
  // useEffect(() => {
  //   fetch('./service.json')
  //     .then(res => res.json())
  //     .then(data => setService(data))
  // }
  //   , [])

    //==============================Start Service Part===================
  return (
    <div className='service'>
      <Header />
      <div className="container">

        <div className='row'>
        <h2 className='text-white mt-3 pt-3'>Here are our some services<span className="light-orange"> Only for You.</span></h2>
        <h3 className='text-white'><span className='light-orange'>Don't miss this </span>opportunity,grab it now..!!!</h3>
          { 

            services.map(service => <div className="col-md-4">
              <CardService
                key={service._id}
                service={service}></CardService>
            </div>

            )


          }
        </div>
      </div>
      {/*===========================End Service Section=================*/}
    </div>
  );
};


export default Service;