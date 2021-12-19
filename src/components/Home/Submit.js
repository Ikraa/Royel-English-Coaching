// import file, router dom and bootstrap
import React from 'react';
import Gif from "../../gif/congrats-congratulations.gif";
import Header from '../Header/Header';

// ====================Submit Message Page/Submit Successful Page====================
const Submit = () => {
    return (
        <div>
            {/* ========Header Component=========== */}
            <Header/>
            {/* =============Congratulation Heading========= */}
            <div className='congratulations'>
                {/* ----------Gif------------ */}
                <img  src={Gif} alt='Congra-Logo'/>
            </div>
            {/* ==========Message Heading============= */}
            <h1 className='goldenrod m-3 p-3'>Registration successful..</h1>
            <h3 className='goldenrod m-3 p-3'>Stay with us...Thank you.</h3>
        </div>
    );
};

export default Submit;