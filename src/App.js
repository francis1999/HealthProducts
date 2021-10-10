
import './App.css';
import NavBar from './includes/Nav';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Index from './components/Index';

function App() {
  return (
    <Router>
      <div className="FirstPage">
        <Switch>
          <NavBar />
          <Route exact path="./components/Index" component={Index} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
