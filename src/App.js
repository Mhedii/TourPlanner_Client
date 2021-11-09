import React from 'react';
import { Route } from 'react-router';
import './App.css';
// import "./Header/Header"

// import './Login/Login';
// import './More/More';
import './Home/Home';
// import './ContactUS/ContactUs'
import Header from './Header/Header';
import './Footer/FooterPage';
// import FooterPage from './Footer/FooterPage';
// import Login from './Login/Login';
// import More from './More/More';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import Services from './Services/Services';
// import ContactUs from './ContactUS/ContactUs';
// import NotFound from './NotFound/NotFound';
import Login from './Login/Login';
// import About from './AboutUs/AboutUs';
// // import ServiceList from './ServiceList/ServiceList';
// import MoreServices from './Services/MoreServices';
// import PrivateRoute from './PrivateRoute/PrivateRoute';
// import AuthProvider from './Context/AuthProvider';
import "bootstrap/dist/css/bootstrap.min.css";
import Add from './DashBoard/Add';
import Services from './Services/Services';
import Booking from './Booking/Booking';
import MyBooking from './DashBoard/MyBooking';
import AdminDashBoard from './Admin/AdminDashBoard';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import AboutUs from './AboutUs/AboutUs';
import FooterPage from './Footer/FooterPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">

            <Home></Home>

          </Route>
          <Route exact path="/home">

            <Home></Home>

          </Route>

          <Route path="/services">

            <Services></Services>

          </Route>

          <Route path="/add">

            <Add></Add>

          </Route>
          <Route path="/aboutus">

            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/booking/:serviceId">
            <Booking></Booking>
          </Route>
          <Route exact path="/myBooking">
            <MyBooking></MyBooking>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/admin">
            <AdminDashBoard></AdminDashBoard>
          </Route>
          <Route exact path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <FooterPage></FooterPage>
      </Router>




    </div>
  );
}

export default App;
