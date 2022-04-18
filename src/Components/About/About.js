import React from 'react';
import './About.css'
import arafin from '../../images/arafin.jpeg';

const About = () => {
    return (
        <div >
            <div className='about-body'>   
                <h1>Name: Arafin</h1>
                <img src={arafin} alt="" />
                <h1>My Goals</h1>
                <hr />
                <p>I want to be a web developer with strong programming and coding skills. also improve some soft skill etc communication and time management.in future, i will want to be firstly coding. in future, i try to do a good job in a software company .</p>
            </div>
         </div>
    );
};

export default About;