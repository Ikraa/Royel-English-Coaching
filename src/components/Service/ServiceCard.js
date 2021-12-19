// ===========================Import File and necessary data=============== 
import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css';

//===============Start Service section and Props===================
const ServiceCard = (props) => {
  console.log(props.service);
  //================Data destructuring==============
  const { topicTitle, img, link, imgTittle } = props.service;
  return (
    <div>
      <div>
        {/*==================Card section================*/}
        <div className="card-info">
          <div className="card_container">
            <div className="cardOne">
              <div class="image-card">
                <img style={{width:"100%",height:"100%"}} src={img} alt="" />
                <div class="card-title mt-2">
                  <h3>{imgTittle} <br /><br/>
                    <a href={link}><Button variant="warning text-white">Details</Button></a>
                  </h3>
                </div>
              </div>
              <p>{topicTitle}</p>
            </div>
          </div>
        </div>
      </div>
      {/*===================End Service Section==================*/}
    </div>
  );
};

export default ServiceCard;