//============import file, router dom and bootstrap===============
import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Submit from './Submit';
import { Link } from 'react-router-dom';




const Home = () => {
  return (
    //==================Start Home Section================ 
    <div className="home">

      {/*------------display header part--------------*/}
      <Header />
      {/*----------------Start Home part-------------*/}
      <div className="heading d-flex m-3">

        <div className="text-start col-6">
          <h1><span className="whiteColor">Knowing English,Increases Your<br />Chances Of Building A Career</span></h1>
          <br/>
          <h2 className="goldenrod">Let's start to learn English... </h2>
        </div>
        {/* ---------------------------- Registration Form ------------------------*/}

        <div className="col-6 text-white">
          <h1>To Registration</h1>

          <div>
{/* ----------------------------Form Field--------------------------------*/}

            <form action={Submit}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px" }}>
                <label style={{ flex: "30%" }}>Name:</label>
                <input style={{ flex: "65%", padding: "12px", outline: "none" }} type="text" placeholder=' enter your name...' className='rounded' />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px" }}>
                <label style={{ flex: "30%" }}>Email:</label>
                <input style={{ flex: "65%", padding: "12px", outline: "none" }} type="email" placeholder='enter your email...'className='rounded'/>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px" }}>
                <label style={{ flex: "30%" }}>Date Of Birth:</label>
                <input style={{ flex: "65%", padding: "12px", outline: "none" }} type="date" placeholder='enter your birth date...'className='rounded' required/>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px" }}>
                <label style={{ flex: "30%" }}>Phone:</label>
                <input style={{ flex: "65%", padding: "12px", outline: "none" }} type="number" placeholder='enter your phone number...' className='rounded'/>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px" }}>
                <label style={{ flex: "30%" }}>Address:</label>
                <input style={{ flex: "65%", padding: "12px", outline: "none" }} type="address" placeholder='enter your address...'className='rounded' />
              </div>

              <input type="checkbox" checke required="" />Terms & condition.
              {/*-----------------Button------------------ */}
              <button style={{ display: "block", float: "right", marginRight: "25px" }} className='btn btn-warning' type='/src/gif/congrats-congratulations.gif'><Link to="/submit" style={{ textDecoration:"none", color:"white" }}>Submit</Link></button>

            </form>
          </div>


        </div>
      </div>
      {/*-------------End Home Part/Section--------------*/}
    </div>

  );
};

export default Home;