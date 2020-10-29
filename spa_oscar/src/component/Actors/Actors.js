import React from 'react';
import {ActorList} from '../../data/actors-data/actors.js'
import './Actors.css';
import {Link, Route} from 'react-router-dom';


const Actors =(props) => {

    let actors = ActorList.map(actor => {
        return (
            <div className="actor-container">
                 <Link to={`/actors/${actor.name}`}>
                    <div className="actor-image" style={{backgroundImage: "url("+ actor.img_src + ")"}}></div>
                    {/* <div className="team-image" style ={ { backgroundImage: "url("+Imagename+")" } }></div> */}
                    </Link> 
                <h3>{actor.Name}</h3>
            </div>
    );
    });


    return (
        <div className="main-content">
        <div><Link to="/" className="back">Back </Link></div>
        <h2>{props.title}</h2>
            <div className="container">
               
                {actors}
            </div>
            
        </div>
      
    );
}

export default Actors;