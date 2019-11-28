package clinic.centersystem.controller;


import clinic.centersystem.dto.request.CCARegReqDTO;
import clinic.centersystem.dto.request.ClinicAdminReqDTO;
import clinic.centersystem.dto.request.ClinicRequestDTO;
import clinic.centersystem.dto.request.DiagnoseRequestDTO;
import clinic.centersystem.dto.response.ClinicCenterAdminResponse;
import clinic.centersystem.dto.response.ClinicResponse;
import clinic.centersystem.dto.response.RegistrationRequirementResponse;
import clinic.centersystem.model.Clinic;
import clinic.centersystem.service.ClinicCenterAdministratorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping(value = "/cca", produces = MediaType.APPLICATION_JSON_VALUE)
public class ClinicCenterAdministratorController {


    private final ClinicCenterAdministratorService clinicCenterAdministratorService;

    public ClinicCenterAdministratorController(ClinicCenterAdministratorService clinicCenterAdministratorService) {
        this.clinicCenterAdministratorService = clinicCenterAdministratorService;
    }

    @RequestMapping(method = GET, value = "/{ccaId}")
    @PreAuthorize("hasRole('CCADMIN')")
    public ResponseEntity<ClinicCenterAdminResponse> clinicCenterAdmin(@PathVariable Long ccaId) {
        return new ResponseEntity<>(this.clinicCenterAdministratorService.clinicCenterAdmin(ccaId), HttpStatus.CREATED);
    }

    @RequestMapping(method = GET, value = "/regreqs")
    @PreAuthorize("hasRole('CCADMIN')")
    public ResponseEntity<List<RegistrationRequirementResponse>> registrationReqs() {
        return new ResponseEntity<>(this.clinicCenterAdministratorService.registrationRequirementList(), HttpStatus.OK);
    }

    @RequestMapping(method = POST, value = "/approve/{reqId}")
    @PreAuthorize("hasRole('CCADMIN')")
    public ResponseEntity<String> approveRegistrationRequest(@PathVariable Long reqId) {
        return new ResponseEntity<>(this.clinicCenterAdministratorService.approveRegistrationRequest(reqId), HttpStatus.OK);
    }

    @RequestMapping(method = POST, value = "/reject/{reqId}/{msg}")
    @PreAuthorize("hasRole('CCADMIN')")
    public ResponseEntity<String> rejectRegistrationRequest(@PathVariable Long reqId, @PathVariable String msg) {
        return new ResponseEntity<>(this.clinicCenterAdministratorService.rejectRegistrationRequest(reqId, msg), HttpStatus.OK);
    }

    @RequestMapping(method = POST, value = "/reg-cca/{ccaId}")
    @PreAuthorize("hasRole('CCADMIN')")
    public ResponseEntity<String> registerCCA(@PathVariable Long ccaId, @RequestBody CCARegReqDTO ccaRegReqDTO) {
        return new ResponseEntity<>(this.clinicCenterAdministratorService.registerCCA(ccaRegReqDTO, ccaId), HttpStatus.OK);
    }

    @RequestMapping(method = POST, value = "/reg-clinic")
    @PreAuthorize("hasRole('CCADMIN')")
    public ResponseEntity<String> registerClinic(@RequestBody ClinicRequestDTO ccaRegReqDTO) {
        return new ResponseEntity<>(this.clinicCenterAdministratorService.registerClinic(ccaRegReqDTO), HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/clinics")
    public ResponseEntity<List<ClinicResponse>> getClinics() {
        return new ResponseEntity<List<ClinicResponse>>(this.clinicCenterAdministratorService.getClinics(), HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/activate-account/{id}")
    public ResponseEntity<String> activateAccount(@PathVariable Long id, HttpServletResponse httpServletResponse) {
        return new ResponseEntity<>(this.clinicCenterAdministratorService.activateAccount(id, httpServletResponse), HttpStatus.TEMPORARY_REDIRECT);
    }

    @RequestMapping(method = POST, value = "/reg-clinic-admin")
    public ResponseEntity<String> registerClinicAdmin(@RequestBody ClinicAdminReqDTO clinicAdminReqDTO) {
        return new ResponseEntity<>(this.clinicCenterAdministratorService.registerClinicAdmin(clinicAdminReqDTO), HttpStatus.OK);
    }

    @RequestMapping(method = POST, value = "/add-diagnose")
    public ResponseEntity<String> addDiagnose(@RequestBody DiagnoseRequestDTO diagnoseRequestDTO) {
        return new ResponseEntity<>(this.clinicCenterAdministratorService.addDiagnose(diagnoseRequestDTO), HttpStatus.OK);
    }
}