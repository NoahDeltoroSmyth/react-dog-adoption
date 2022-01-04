import { NavLink, Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import DogList from './views/DogList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink exact to="/">
            Home
          </NavLink>
        </header>
        <Switch>
          <Route path="/dogs">
            <DogList />
          </Route>
          <Route path="/dogs/:id"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
