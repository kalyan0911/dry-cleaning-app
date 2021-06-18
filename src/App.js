import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import './App.css';
import HomeComponent from './component/HomeComponent';
import SignupComponent from './component/SignupComponent';
import LoginComponent from './component/LoginComponent';
import DashboardComponent from './component/DashboardComponent';
import BookingComponent from './component/BookingComponent';
import AddBookingComponent from './component/AddBookingComponent'
import UpdateBookingComponent from './component/UpdateBookingComponent';
import CustomerItemComponent from './component/CustomerItemComponent';
import AddItemComponent from './component/AddItemComponent';
import UpdateItemComponent from './component/UpdateItemComponent';
import CustomerComponent from './component/CustomerComponent';
import UpdateCustomerComponent from './component/UpdateCustomerComponent';
import ChangePasswordComponent from './component/ChangePasswordComponent';
import AddOrderComponent from './component/AddOrderComponent';
import OrderComponent from  './component/OrderComponent';
import AddPaymentComponent from './component/AddPaymentComponent';
import PaymentComponent from './component/PaymentComponent';
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
                          <Route path = "/booking/add/:id" exact component = {AddBookingComponent}></Route>
                          <Route path = "/booking/:id" exact component = {UpdateBookingComponent}></Route>
                          <Route path = "/customerItem" exact component = {CustomerItemComponent}></Route>
                          <Route path = "/customerItem/add" exact component = {AddItemComponent}></Route>
                          <Route path = "/customerItem/:id" exact component = {UpdateItemComponent}></Route>
                          <Route path = "/profile" exact component = {CustomerComponent}></Route>
                          <Route path = "/profile/update" exact component = {UpdateCustomerComponent}></Route>
                          <Route path = "/profile/changePassword" exact component = {ChangePasswordComponent}></Route>
                          <Route path = "/order" exact component = {OrderComponent}></Route>
                          <Route path = "/order/add/:id" exact component = {AddOrderComponent}></Route>
                          <Route path = "/payment" exact component = {PaymentComponent}></Route>
                          <Route path = "/payment/pay" exact component = {AddPaymentComponent}></Route>
                    </Switch>

                </div>
              
        </Router>
    </div>
  );
}

export default App;
