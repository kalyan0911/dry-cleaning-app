import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import './App.css';
import HomeComponent from './component/HomeComponent';
import SignupComponent from './component/SignupComponent';
import LoginComponent from './component/LoginComponent';
import DashboardComponent from './component/DashboardComponent';
import BookingComponent from './component/BookingComponent';
import AddBookingComponent from './component/AddBookingComponent'
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
                          <Route path = "/booking" exact component = {BookingComponent}></Route>
                          <Route path = "/booking/add" exact component = {AddBookingComponent}></Route>
                    </Switch>
                </div>
              
        </Router>
    </div>
  );
}

export default App;
