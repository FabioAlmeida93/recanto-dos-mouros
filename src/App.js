import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/menu' component={Menu} />
      </div>
    </Router>
  );
}

export default App;
