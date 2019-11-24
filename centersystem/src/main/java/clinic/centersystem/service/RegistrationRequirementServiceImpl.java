package clinic.centersystem.service;

import clinic.centersystem.converter.RegistrationRequirementConverter;
import clinic.centersystem.dto.request.RegistrationRequirementDTO;
import clinic.centersystem.model.RegistrationRequirement;
import clinic.centersystem.repository.RegistrationRequirementRepository;
import clinic.centersystem.service.intf.RegistrationRequirementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationRequirementServiceImpl implements RegistrationRequirementService {

    @Autowired
    private RegistrationRequirementRepository registrationRequirementRepository;


    @Override
    public List<RegistrationRequirement> findAll() {
        return this.registrationRequirementRepository.findAll();
    }

    @Override
    public RegistrationRequirement save(RegistrationRequirementDTO registrationRequirementDTO) {
        RegistrationRequirement registrationRequirement = RegistrationRequirementConverter.toCreateRegistrationRequirement(registrationRequirementDTO);

        registrationRequirement = this.registrationRequirementRepository.save(registrationRequirement);
        return registrationRequirement;
    }

}
