import logo from './logo.svg';
import Navigation from './Components/navigation'
import {BrowserRouter as Router , Switch, Route, Redirect} from 'react-router-dom'
import PageRenderer from './page-renderer'
function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/:page" component={PageRenderer} />
        <Route path="/" render={() => <Redirect to="/home" />} />
        <Route component={() => 404} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
