import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import './App.css';
import HomeComponent from './component/HomeComponent';
import SignupComponent from './component/SignupComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
        <Router>
              
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {HomeComponent}></Route>
                          <Route path = "/signup" exact component = {SignupComponent}></Route>
                          
                    </Switch>
                </div>
              
        </Router>
    </div>
  );
}

export default App;
