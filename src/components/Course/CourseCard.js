import React from 'react';
import "./Course.css";

const CourseCard = (props) => {
console.log(props.course);
const {title, details, detailsLast, price, img}= props.course;

    return (

        <div className='container'>
            <div className='d-flex  m-3'>
            <div className="col-6">
                <img className="rounded-3" src={img} alt="pic" />
            </div>
            <div className="col-6 text-justify ms-3">
                <div className='mt-3 pt-3'>
                <h3 className='goldenrod'>{title}</h3>
                <p>{details} <b>{title}</b> {detailsLast}</p>
                <h3>Cost: {price}</h3>
                </div>

            </div>
            </div>
            </div>



    );
};

export default CourseCard;