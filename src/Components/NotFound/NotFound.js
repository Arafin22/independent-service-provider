import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound'>
            <h1>OOps</h1>
            <h2>404 -page not Found</h2>
            <Link className='link-not' to="/">Home Page</Link>
            
        </div>
    );
};

export default NotFound;