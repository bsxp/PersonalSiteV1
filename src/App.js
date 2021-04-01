import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import MainPage from './components /pages/main'
import NavBar from './components /navBar';
import history from './utils/history'

function App() {
  return (
    <main>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
