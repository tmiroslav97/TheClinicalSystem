import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_APPOINTMENT_TYPE,
    ADD_APPOINTMENT_TYPE
} from './constants';

import AppointmentTypeService from '../../services/AppointmentTypeService';

import {
    putAppointmentTypes,
    putIsFetchAppointmentTypes
} from './actions';


export function* fetchAppointmentType() {
    const { payload } = yield take(FETCH_APPOINTMENT_TYPE);
    yield put(putIsFetchAppointmentTypes(false));
    const { appointmentTypes } = yield call(AppointmentTypeService.fetchAppointmentType, payload);
    yield put(putAppointmentTypes(appointmentTypes));
    yield put(putIsFetchAppointmentTypes(true));
}
export function* addAppointmentType() {
    const { payload } = yield take(ADD_APPOINTMENT_TYPE);
    const { data } = yield call(AppointmentTypeService.addAppointmentType, payload);
    yield put(putIsFetchAppointmentTypes(false));
    const { appointmentTypes } = yield call(AppointmentTypeService.fetchAppointmentType, payload);
    yield put(putAppointmentTypes(appointmentTypes));
    yield put(putIsFetchAppointmentTypes(true));
}