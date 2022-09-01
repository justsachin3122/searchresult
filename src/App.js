import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import PokemonsList from './containers/pokemonList';
import Message from './containers/infoMessages';

function App() {
  return (
    <Router>
      <div className="header-Nav">
        <div className="flex-start">
          <Link className="clear-link" to="/">
           <center> <h1 className="self-center color-black">Search Result Page with Redux Concepts using PokeAPI</h1></center>
          </Link>
        </div>
        <Message />
      </div>
      <div>
        <Switch>
          <Route exact path="/pokemon/:number">
          </Route>
          <Route exact path="/">
            <PokemonsList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
