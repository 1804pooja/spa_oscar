import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav';
import Home from './component/Home/Home';
import {BrowserRouter,Route} from 'react-router-dom';
import ActorsContainer from './component/Actors/actorsContainer';
import Actress from './component/Actress/Actress';
import Films from './component/Films/Films';
import Actor from './component/Actors/Actor/Actor';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route path="/films" component={Films} />
        <Route path="/actress" render = {() => <Actress /> } />
        {/* <Route path="/actors/actor" exact render = {() => <Actors title="Best Actor of the year" /> } /> */}
        <Route path="/actors" render = {() => <ActorsContainer title="Best Actor" /> } />
        
        <Route path="/" exact render={() =><Home title="Oscar Winners" />} /> 
        {/* <Home /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
