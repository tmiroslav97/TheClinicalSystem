package clinic.centersystem.service;

import clinic.centersystem.model.Diagnose;
import clinic.centersystem.repository.DiagnoseRepository;
import clinic.centersystem.service.intf.DiagnoseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiagnoseServiceImpl implements DiagnoseService {

    @Autowired
    private DiagnoseRepository diagnoseRepository;

    @Override
    public Diagnose findById(Long id) {
        return diagnoseRepository.findById(id).orElseGet(null);
    }

    @Override
    public List<Diagnose> findAll() {
        return diagnoseRepository.findAll();
    }

    @Override
    public Diagnose save(Diagnose diagnose) {
        return diagnoseRepository.save(diagnose);
    }
}
