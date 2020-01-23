package clinic.centersystem.controller;

import clinic.centersystem.dto.response.RoomResponseDTO;
import clinic.centersystem.dto.response.SurgeryRequirementResponseDTO;
import clinic.centersystem.model.SurgeryRequirement;
import clinic.centersystem.service.SurgeryRequirementServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping(value = "/sur-req")
public class SurgeryRequirementController {

    private final SurgeryRequirementServiceImpl surgeryRequirementService;

    public SurgeryRequirementController(SurgeryRequirementServiceImpl surgeryRequirementService) {
        this.surgeryRequirementService = surgeryRequirementService;
    }

    @RequestMapping(method = GET, value = "/all/{clinicId}/{pageCnt}")
    public ResponseEntity<SurgeryRequirementResponseDTO> getClinicRooms(@PathVariable Long clinicId, @PathVariable Integer pageCnt) {
        return new ResponseEntity<>(surgeryRequirementService.findByClinicId(clinicId, pageCnt), HttpStatus.OK);
    }
}