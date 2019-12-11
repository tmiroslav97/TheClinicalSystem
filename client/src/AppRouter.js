import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PatientHomePage from './components/Patient/PatientHomePage';
import RegPage from './pages/RegPage';
import DoctorHomePage from './pages/DoctorHomePage';
import NurseHomePage from './pages/NurseHomePage';
import ClinicCenterAdminProfile from './components/ClinicCenterAdmin/ClinicCenterAdminProfile';
import HolidayAproval from './components/HolidayAproval';
import PasswordChanger from './components/PasswordChanger';
import ClinicAdmin from './components/ClinicAdmin/CA';
import DoctorAllAtOnce from './components/ClinicAdmin/DoctorAllAtOnce';
import DoctorSearch from './components/Patient/DoctorSearch';
import ClinicSearch from './components/Patient/ClinicSearch';
import { userDataSelector } from './store/user/selectors';

const AppRouter = () => {
    const user = useSelector(userDataSelector);
    const role = user.role;
    const fristLog = user.fristLog;
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/pat" component={PatientHomePage} />
            <Route exact path="/signup" component={RegPage} />
            <Route exact path="/doc" component={DoctorHomePage} />
            <Route exact path="/prob" component={HolidayAproval} />
            <Route exact path="/ccadmin/:id" render={(props) => ((role === 'ROLE_CCADMIN' && !fristLog) ? (<ClinicCenterAdminProfile match={props.match} />) : (<Redirect to="/page-not-found" />))} />
            <Route exact path="/signup" component={RegPage} />
            <Route exact path="/change-pass" component={PasswordChanger} />
            <Route exact path="/nurse-page/:id" render={(props) => ((role === 'ROLE_NURSE' && !fristLog) ? (<NurseHomePage match={props.match} />) : (<Redirect to="/page-not-found" />))} />
            <Route exact path="/adminc" component={ClinicAdmin} />
            <Route exact path="/probs" component={DoctorAllAtOnce} />
            <Route exact path="/CA" component={ClinicAdmin} />
            <Route exact path="/search" component={DoctorSearch} />
            <Route exact path="/test" component={ClinicSearch} />
            <Route exact path="/page-not-found" component={() => <h1>Page not found!</h1>} />
            <Redirect from="*" to="/page-not-found" />
        </Switch>
    );
};

export default AppRouter;