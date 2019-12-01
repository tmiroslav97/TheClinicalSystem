import {
    PUT_CCADMIN_DATA,
    FETCH_CCADMIN_DATA,
    FETCH_REG_REQS_DATA,
    PUT_REG_REQS_DATA,
    APPROVE_REG_REQ,
    REJECT_REG_REQ,
    REG_CC_ADMIN,
    REG_CLINIC,
    FETCH_CLINICS_DATA,
    PUT_CLINICS_DATA,
    REG_CLINIC_ADMIN,
    ADD_MEDICINE,
    PUT_MEDICINE_DATA,
    ADD_DIAGNOSE,
    PUT_DIAGNOSE_DATA,
    FETCH_MEDICINES_DATA
} from './constants';

export const fetchMedicinesData = payload => ({
    type: FETCH_MEDICINES_DATA,
    payload
});

export const addDiagnose = payload => ({
    type: ADD_DIAGNOSE,
    payload
});

export const putDiagnoseData = payload => ({
    type: PUT_DIAGNOSE_DATA,
    payload
});

export const addMedicine = payload => ({
    type: ADD_MEDICINE,
    payload
});

export const putMedicineData = payload => ({
    type: PUT_MEDICINE_DATA,
    payload
});

export const regClinicAdmin = payload => ({
    type: REG_CLINIC_ADMIN,
    payload
});

export const putClinicsData = payload => ({
    type: PUT_CLINICS_DATA,
    payload
});

export const regClinic = payload => ({
    type: REG_CLINIC,
    payload
});

export const fetchClinicsData = payload => ({
    type: FETCH_CLINICS_DATA,
    payload
});

export const putCCAdminData = payload => ({
    type: PUT_CCADMIN_DATA,
    payload
});

export const fetchCCAdminData = payload => ({
    type: FETCH_CCADMIN_DATA,
    payload
});

export const fetchRegReqsData = payload => ({
    type: FETCH_REG_REQS_DATA,
    payload
});

export const putRegReqsData = payload => ({
    type: PUT_REG_REQS_DATA,
    payload
});

export const approveRegReq = payload => ({
    type: APPROVE_REG_REQ,
    payload
});

export const rejectRegReq = payload => ({
    type: REJECT_REG_REQ,
    payload
});

export const regCCAdmin = payload => ({
    type: REG_CC_ADMIN,
    payload
});