import React from 'react';
import '../About/About.css'

const blog = () => {
    return (
        <div>
            <div className='about-body'>   
                
                
                <h3>Difference between authorization and authentication?</h3>
                
                <p>authorization: authentication is process of veriing the identify of a user.example:we have two thpe of user(admin and normal user) to access the website when the user try to access the website,we ask them to login its authentication part.</p>
                <p>Authorizzation:  Authorizzation is process of checking the user has access to right the system.which user are access the hole system,which users are access some part of system.
                    its Authorizzation.</p>
                    <hr />
                <h3>Why are you using firebase?</h3>
                <p>firebase provides much support. one of Firebase Authentication give us the most secure authentication systems, with improving the sign-in. It provides  identity solution,  email and password accounts, phone auth,  Google, Twitter, Facebook and GitHub login, and more</p>
<hr />
                <h3>Firebase other services</h3>
            <p>Firebase provide other Hosting,Cloud Storage,Google Analytics,Cloud Functions and more.</p>
            </div>
           
            
        </div>
    );
};

export default blog;