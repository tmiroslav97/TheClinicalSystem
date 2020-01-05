import {
    PUT_APPOINTMENT_TYPES,
    FETCH_APPOINTMENT_TYPE,
    ADD_APPOINTMENT_TYPE,
    PUT_IS_FETCH_APPOINTMENT_TYPES
} from './constants';

export const fetchAppointmentType = payload => ({
    type: FETCH_APPOINTMENT_TYPE,
    payload
});

export const putAppointmentTypes = payload => ({
    type: PUT_APPOINTMENT_TYPES,
    payload
});

export const putIsFetchAppointmentTypes = payload => ({
    type: PUT_IS_FETCH_APPOINTMENT_TYPES,
    payload
});

export const addAppointmentType = payload => ({
    type: ADD_APPOINTMENT_TYPE,
    payload
});