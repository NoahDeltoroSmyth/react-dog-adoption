import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './component/Header';
import DogAdmin from './views/DogAdmin';
import DogDetail from './views/DogDetail';
import DogEdit from './views/DogEdit';
import DogList from './views/DogList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/dogs">
            <DogList />
          </Route>
          <Route exact path="/dogs/:id">
            <DogDetail />
          </Route>
          <Route exact path="/admin">
            <DogAdmin />
          </Route>
          <Route exact path="/dogs/:id/edit">
            <DogDetail />
            <DogEdit />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
