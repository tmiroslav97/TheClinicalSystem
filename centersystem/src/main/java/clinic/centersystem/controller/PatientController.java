package clinic.centersystem.controller;

import clinic.centersystem.dto.response.ClinicResponse;
import clinic.centersystem.dto.response.DoctorResponse;
import clinic.centersystem.dto.response.PatientResponse;
import clinic.centersystem.model.Clinic;
import clinic.centersystem.model.Doctor;
import clinic.centersystem.service.DoctorServiceCont;
import clinic.centersystem.service.PatientServiceCont;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping(value = "/pat", produces = MediaType.APPLICATION_JSON_VALUE)
public class PatientController {

    private final PatientServiceCont patientServiceCont;


    public PatientController(PatientServiceCont patientServiceCont) {
        this.patientServiceCont = patientServiceCont;
    }

    @RequestMapping(method = GET, value = "/{patId}")
    @PreAuthorize("hasRole('PATIENT')")
    public ResponseEntity<PatientResponse> patient(@PathVariable Long patId) {
        return new ResponseEntity<>(this.patientServiceCont.patient(patId), HttpStatus.CREATED);
    }

    @RequestMapping(method = GET, value = "/doctors")
    public ResponseEntity<List<DoctorResponse>> getDoctors() {
        return new ResponseEntity<List<DoctorResponse>>(this.patientServiceCont.getDoctors(), HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/clinics")
    public ResponseEntity<List<ClinicResponse>> getClinics() {
        return new ResponseEntity<List<ClinicResponse>>(this.patientServiceCont.getClinics(), HttpStatus.OK);
    }



    @RequestMapping(method = GET, value = "/search-doctors")
    public ResponseEntity<List<Doctor>> searchDoctors(@PathVariable String name) {
        return new ResponseEntity<List<Doctor>>(this.patientServiceCont.searchDoctors(name), HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/search-clinics")
    public ResponseEntity<List<Clinic>> searchClinics(@PathVariable String name) {
        return new ResponseEntity<List<Clinic>>(this.patientServiceCont.searchClinics(name), HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/all")
    public ResponseEntity<List<PatientResponse>> getPatients() {
        return new ResponseEntity<>(this.patientServiceCont.getPatients(), HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/all/{clinicId}")
    public ResponseEntity<Set<PatientResponse>> getPatientsByClinicId(@PathVariable Long clinicId) {
        return new ResponseEntity<>(this.patientServiceCont.getPatientsByClinicId(clinicId), HttpStatus.OK);
    }

}
