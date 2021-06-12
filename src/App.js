import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import './App.css';
import HomeComponent from './component/HomeComponent';
import SignupComponent from './component/SignupComponent';
import LoginComponent from './component/LoginComponent';
import DashboardComponent from './component/DashboardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
        <Router>
              
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {HomeComponent}></Route>
                          <Route path = "/signup" exact component = {SignupComponent}></Route>
                          <Route path = "/login" exact component = {LoginComponent}></Route>
                          <Route path = "/dashboard" exact component = {DashboardComponent}></Route>
                          
                    </Switch>
                </div>
              
        </Router>
    </div>
  );
}

export default App;
