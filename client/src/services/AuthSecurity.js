import HttpBaseClient from './HttpBaseClient';
import { history } from '../index';

const FINALPOINTS = {
    LOGIN: '/sec/login',
    REGISTRATION: '/sec/registration',
    CHANGE_PASSWORD: '/sec/change-password'
};

class AuthSecurityService extends HttpBaseClient {
    login = async credentials => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.LOGIN,
                credentials
            );
            if (data.role === 'ROLE_PATIENT') {
                history.push('/pat');
            } else if (data.role === 'ROLE_CCADMIN') {
                if (data.firstLog) {
                    history.push('/change-pass');
                } else {
                    history.push('/ccadmin/' + data.id);
                }

            } else if (data.role === 'ROLE_DOCTOR') {
                history.push('/doc');
            } else if (data.role === 'ROLE_NURSE') {
                history.push('/nurse-page/' + data.id);
            } else if (data.role === 'ROLE_ADMINC') {
                history.push('/adminc');
            } else {
                alert('Nije odobren pristup sistemu!');
            }

            localStorage.setItem('token', data.token);
            localStorage.setItem('email', data.email);
            localStorage.setItem('role', data.role);
            localStorage.setItem('userID', data.userID);

            /* this.AuthenticatorAssertionResponse({
                Authorization: `Bearer ${data.token}`
            }); */
            return { data };

        } catch (error) {
            console.log(error.response.data);
        }
    };

    registration = async userData => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.REGISTRATION,
                userData
            );

            history.push('/');

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    changePassword = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.CHANGE_PASSWORD,
                payload
            );

            //putting new token in local storage
            localStorage.setItem('token', data.token);

            if (data.role === 'ROLE_PATIENT') {
                history.push('/pat');
            } else if (data.role === 'ROLE_CCADMIN') {
                history.push('/ccadmin/' + data.id);
            } else if (data.role === 'ROLE_DOCTOR') {
                history.push('/doc');
            } else if (data.role === 'ROLE_NURSE') {
                history.push('/nurse-page/' + data.id);
            } else if (data.role === 'ROLE_ADMINC') {
                history.push('/adminc');
            } else {
                alert('Nije odobren pristup sistemu!');
            }

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

}

export default new AuthSecurityService(); 