import { take, put, call } from 'redux-saga/effects';
import { history } from '../../index';

import {
    REG_CLINIC,
    FETCH_CLINICS_DATA,
    REG_CLINIC_ADMIN,
    SEARCH_CLINIC
} from './constants';

import ClinicService from '../../services/ClinicService';

import {
    putClinicsData,
    putIsFetchClinicsData,
    putPageCount
} from './actions';


export function* regClinicAdmin() {
    const { payload } = yield take(REG_CLINIC_ADMIN);
    const { data } = yield call(ClinicService.regClinicAdmin, payload);
}

export function* fetchClinicsData() {
    const { payload } = yield take(FETCH_CLINICS_DATA);
    yield put(putIsFetchClinicsData(false));
    const { data } = yield call(ClinicService.fetchClinicsData, payload);
    yield put(putClinicsData(data.clinics));
    yield put(putPageCount(data.pageCount));
    yield put(putIsFetchClinicsData(true));
}

export function* regClinic() {
    const { payload } = yield take(REG_CLINIC);
    yield put(putIsFetchClinicsData(false));
    const { data } = yield call(ClinicService.regClinic, payload);
    const { clinics } = yield call(ClinicService.fetchClinicsData, {});
    yield put(putClinicsData(clinics))
    yield put(putIsFetchClinicsData(true));
}

export function* searchClinic() {
    const { payload } = yield take(SEARCH_CLINIC);
    yield put(putIsFetchClinicsData(false));
    const { data } = yield call(ClinicService.searchClinic, payload);
    yield put(putClinicsData(data.clinics));
    yield put(putPageCount(data.pageCount));
    yield put(putIsFetchClinicsData(true));
}