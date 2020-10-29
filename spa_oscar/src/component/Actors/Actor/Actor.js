import React from 'react';
import { Link } from 'react-router-dom';

const Actor = (props) =>{
    return (
        <div className="main-content">
            <div><Link className="back" to="/">Back</Link></div>
            <div className="container"> 
                <div className="image-profile">
                    <h2>{props.name}</h2>
                    <p>jkjkjkjkjk</p>
                </div>
            </div>
        </div>
    );
}

export default Actor;