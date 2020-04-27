
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

function Home(props){

    return(
            <div className="container">
                <h1 style={{textAlign:'center'}}>Welcome to the Libarry</h1>
                <p style={{textAlign:'center'}}><Link to="/books">Click here</Link> to see available books </p>
            </div>
    );
}

export default Home;