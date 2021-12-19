// Import File and necessary data 
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import CourseCard from './CourseCard';
import "./CourseCard";
import { jsonCourse } from '../../data/jsonCourse';


const Course = () => {
    //======================handle Api and fetch data======================
    const [courses, setCourse] = useState(jsonCourse);

    // useEffect(() => {
    //     fetch("./courseList.json")
    //         .then(res => res.json())
    //         .then(data => setCourse(data))
    // }, [])


    return (

        <div>
            <Header />

            <div className='container'>
                <div className="row">
                    {
                        courses.map(course =>
                            <CourseCard
                            key={course._id}
                            course={course}
                            ></CourseCard>
                            
                    )
                    }
                </div>

            </div>
        </div>
    );
};

export default Course;