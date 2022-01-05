import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import DogForm from './component/DogForm';
import Header from './component/Header';
import DogDetail from './views/DogDetail';
import DogEdit from './views/DogEdit';
import DogList from './views/DogList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <DogList />
          </Route>
          <Route path="/dogs/:id">
            <DogDetail />
          </Route>
          <Route path="/admin">
            <DogForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
