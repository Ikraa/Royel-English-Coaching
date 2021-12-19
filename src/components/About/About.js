//============import file, router dom and bootstrap===============
import React from 'react';
import Header from '../Header/Header';
import img1 from "../../image/aboutBenner/img1.jpg";
import img2 from "../../image/aboutBenner/img2.jpg";
import img3 from "../../image/aboutBenner/img3.jpg";
import img4 from "../../image/aboutBenner/img4.jpg";
import img5 from "../../image/aboutBenner/img5.png";
import img7 from "../../image/aboutBenner/img7.png";
import { Link } from 'react-router-dom';
import "./About.css";

const About = () => {
    //==================Start About Section================ 
    return (
        <div>
            {/* ---------------Header Component----------------*/}
            <Header />
            {/* ------------------Banner Section------------- */}
            <div className='container-md'>
                <div className='coverPic' style={{ width: "1150px", padding: "133px" }}>
                    <h1 className='text-white'><b><span className='text-warning'>R</span>
                        oyel English Academy</b></h1>
                    <p className='text-white'>Best english academy</p>

                    {/* -----------------Button---------------- */}
                    <Link to="/home"><button id="startCourseButton" className='btn btn-warning text-white m-1'>Start Course <i class="fas fa-arrow-right"></i>
                    </button></Link>
                </div>
                {/* -------------------About Us Section Details----------- */}
                <div className='d-flex pt-3'>
                    <div className='col-6 aboutUs mt-3 pt-3 ms-3'>
                        <h2>
                            <br /><span className='goldenrod'><b>H</b></span>ere,</h2>
                        <p>You can get many more Facility in our center. Every year more then 2 lak student are study in our insitute. And every year more then 80 thousand student get scholarchip to higher study in abroad.<p><b>W</b>e make every student more and more perfect to help them to build up their career.</p>
                        </p>
                    </div>
                    <div className='col-6 mt-3 shadow-sm p-3 mb-5 bg-body rounded'>
                        {/* ------------------Image---------------- */}
                        <img src={img1} alt="pic" />
                    </div>
                </div>
                <div className='d-flex pt-3'>
                    <div className='col-6 mt-3 pe-3 me-3 shadow-sm p-3 mb-5 bg-body rounded'>
                        {/* ------------------Mentor Image---------------- */}
                        <img style={{ height: '350px' }} src={img2} alt="pic" />
                    </div>
                    <div className='col-6 aboutUs mt-3 pt-3 ms-3'>

                        <h2>
                            <br /><span className='goldenrod'><b>O</b></span>ur,</h2>
                        <p><b>T</b>eachers come from different educational institution with the best quality of educational skills.We have tested and trained them in various ways and kept the best quality teachers.So that student can learn with best.</p>
                    </div>
                </div>
                <div>
                    {/* -----------------Start Services Details------------ */}
                    <br />
                    <h2 className='pt-3 mt-3'><b><span className='goldenrod'>Se</span>rvices</b>
                    </h2>
                    <p className='text-start'>
                        <b>Y</b>ou can enjoy online classes at home. You can also take classes directly at home through our tutor. And especially we have all the services of all the courses available.
                        We have many more services for you. Such as online, home, evening, library, child care, special care etc.
                        <br />
                        {/* ------------------Button of Details Services-------- */}
                        <Link to="/service"><button className='btn btn-warning text-white mt-3'>Details
                        </button></Link>
                    </p>
                </div>
                {/*===================End Services Details===============*/}
                <div>
                    {/* ================== Start Some Course Box ============== */}
                    <h2 className='pt-3 mt-3'><b><span className='goldenrod'>Co</span>urse</b>
                    </h2>
                    <div className='d-flex'>
                        <div className='col-4'>
                            <Link to='/course' className='text-decoration-none'><div className='shadow p-3 mb-5 bg-body rounded me-3'>
                                <img className='boxRound' style={{ width: '95%' }} src={img3} alt='pic' />

                            </div>
                                <p className='goldenrod'><b>Kids English Learning</b></p></Link>
                        </div>
                        <div className='col-4'>
                            <Link to='/course' className='text-decoration-none'>
                                <div className='shadow p-3 mb-5 bg-body rounded me-3'>
                                    <img className='boxRound' style={{ width: '95%' }} src={img4} alt='pic' />

                                </div>
                                <p className='goldenrod'><b>English Literature</b></p>
                            </Link>
                        </div>
                        <div className='col-4'>
                            <Link to='/course' className='text-decoration-none'>
                                <div className='shadow p-3 mb-5 bg-body rounded me-3'>
                                    <img className='boxRound' style={{ width: '95%' }} src={img5} alt='pic' />

                                </div>
                                <p className='goldenrod'><b>Bussines English Learning</b></p>
                            </Link>
                        </div>

                    </div>
                    {/* ==================  End Some Course Box ============== */}

                    {/* ============= Start Youtube Notification Bell================ */}
                    <div style={{ padding: "50px" }}>
                        <div className='text-center'>
                            {/* ---------------Heading------------ */}
                            <h4>To get notification please subscribe <i class="fas fa-bell goldenrod"></i></h4>
                            {/* ----------------Link & Image---------------*/}
                            <a href="https://www.youtube.com/results?search_query=English+course" className='text-decoration-none'><img style={{ width: "200px" }} src={img7} alt='' />
                            </a>
                        </div>
                    </div>
                    {/*============= End Youtube Notification Bell================ */}
                </div>

            </div>


        </div>
    );
};

export default About;