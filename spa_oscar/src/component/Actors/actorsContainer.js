import React from 'react';
import { Route } from 'react-router-dom';
import {ActorList} from '../../data/actors-data/actors';
import Actor from './Actor/Actor'
import Actors from './Actors'

const ActorsContainer =() => {
    let actorUrl = ActorList.map(actor => {
        return (
            // console.log(`/actors/${actor.name}`)
             <Route path={`/actors/${actor.name}`} render = {() => <Actor name={actor.name} />} />
        );
    })

    return (
        <React.Fragment>
        <Route exact path="/actors" render={()=> <Actors title= "Best Actors"  />} />
            {actorUrl}
        </React.Fragment>
    );
}

export default ActorsContainer;