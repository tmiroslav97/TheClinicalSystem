package clinic.centersystem.controller;

import clinic.centersystem.dto.request.MedicalRecordRequestDTO;
import clinic.centersystem.dto.request.MedicalReportRequestDTO;
import clinic.centersystem.model.MedicalRecord;
import clinic.centersystem.service.MedicalReportServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/med-rep", produces = MediaType.APPLICATION_JSON_VALUE)
public class MedicalReportController {

    private final MedicalReportServiceImpl medicalReportService;

    public MedicalReportController(MedicalReportServiceImpl medicalReportService) {
        this.medicalReportService = medicalReportService;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<String> addMedicalReport(@RequestBody MedicalReportRequestDTO medicalReportRequestDTO) {
        return new ResponseEntity<>(medicalReportService.addMedicalReport(medicalReportRequestDTO), HttpStatus.OK);
    }
}