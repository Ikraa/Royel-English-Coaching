import React from 'react';
import '../Not Found/NotFound.css';

const NotFound = () => {
    return (
        <div className='error-404'>
            <h1>4<span className="error-0">0</span>4 <i class="fas fa-exclamation-triangle"></i></h1>
            <h3>The page is not found on this server /the url is not exist</h3>
        </div>
        // <div>
             
            
        //     <h1>404</h1>     
        //     <h3>The page is not found on this server</h3>
        // </div>
    );
};

export default NotFound;