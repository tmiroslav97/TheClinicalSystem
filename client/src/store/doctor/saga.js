import { take, put, call } from 'redux-saga/effects';

import {
    
    FETCH_DOCTOR_CALENDAR
} from './constants';

import {
    putDoctorData,
    putDoctorCalendarData
} from './actions';

import DoctorService from '../../services/DoctorService';
import PersonnelService from '../../services/PersonnelService';

export function* fetchDoctorCalendar(){
    const { payload } = yield take(FETCH_DOCTOR_CALENDAR);
    const { calendar } = yield call(PersonnelService.fetchCalendar, payload);
    yield put(putDoctorCalendarData(calendar));
}

