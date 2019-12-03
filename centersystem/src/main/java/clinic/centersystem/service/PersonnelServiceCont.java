package clinic.centersystem.service;

import clinic.centersystem.converter.AbsenceRequirementConverter;
import clinic.centersystem.dto.request.AbsenceRequirementDTO;
import clinic.centersystem.model.AbsenceRequirement;
import clinic.centersystem.model.Clinic;
import clinic.centersystem.model.Personnel;
import clinic.centersystem.service.intf.AbsenceRequirementService;
import clinic.centersystem.service.intf.ClinicService;
import clinic.centersystem.service.intf.PersonnelService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class PersonnelServiceCont {

    @Autowired
    private AbsenceRequirementService absenceRequirementService;

    @Autowired
    private PersonnelService personnelService;

    @Autowired
    private ClinicService clinicService;


    public String submitAbsenceRequirement(AbsenceRequirementDTO absenceRequirementDTO) {
        AbsenceRequirement absenceRequirement = AbsenceRequirementConverter.toCreateAbsenceRequirementFromAbsenceRequest(absenceRequirementDTO);
        Personnel personnel = this.personnelService.findById(absenceRequirementDTO.getPersonnelId());
        Clinic clinic = this.clinicService.findById(absenceRequirementDTO.getClinicId());

        absenceRequirement.setClinic(clinic);
        absenceRequirement.setPersonnel(personnel);
        clinic.getReqAbs().add(absenceRequirement);
        personnel.getAbsenceRequirements().add(absenceRequirement);
        absenceRequirement = this.absenceRequirementService.save(absenceRequirement);
        clinic = this.clinicService.saveClinic(clinic);
        personnel = this.personnelService.save(personnel);

        return "Successfullt created absence requirement";
    }

}
