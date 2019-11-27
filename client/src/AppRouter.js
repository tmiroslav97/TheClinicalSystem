import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PatientHomePage from './components/Patient/PatientHomePage';
import RegPage from './pages/RegPage';
import DoctorHomePage from './pages/DoctorHomePage';
import ClinicCenterAdminProfile from './components/ClinicCenterAdmin/ClinicCenterAdminProfile';
import HolidayAproval from './components/HolidayAproval';
import PasswordChanger from './components/PasswordChanger';
const AppRouter = () =>{
    return(
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/pat" component={PatientHomePage}/>
            <Route exact path="/signup" component={RegPage}/>
            <Route exact path="/doc" component={DoctorHomePage}/>
            <Route exact path="/prob" component={HolidayAproval}/>
            <Route exact path="/ccadmin/:id" component={ClinicCenterAdminProfile}/>
            <Route exact path="/signup" component={RegPage}/>
            <Route exact path="/change-pass" component={PasswordChanger}/>

            <Route exact path="/page-not-found" component={() => <h1>Page not found!</h1>}/>
            <Redirect from="*" to="/page-not-found" />
        </Switch>
    );
};

export default AppRouter;