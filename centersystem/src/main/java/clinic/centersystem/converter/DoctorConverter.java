package clinic.centersystem.converter;

import clinic.centersystem.dto.request.DoctorRequestDTO;
import clinic.centersystem.dto.response.DoctorResponse;
import clinic.centersystem.model.Doctor;


public class DoctorConverter {
    public static DoctorResponse toCreateDoctorResponseFromDoctor(Doctor doctor){
        return DoctorResponse.builder()
                .id(doctor.getId())
                .firstName(doctor.getFirstName())
                .lastName(doctor.getLastName())
                .email(doctor.getEmail())
                .role(doctor.getRole().name())
                .clinicId(doctor.getClinic().getId())
                .build();
    }

    public static Doctor toCreateDoctorFromDoctorRequest(DoctorRequestDTO doctorRequestDTO){
        return Doctor.doctorBuilder()
                .email(doctorRequestDTO.getEmail())
                .firstName(doctorRequestDTO.getFirstName())
                .lastName(doctorRequestDTO.getLastName())
                .password(doctorRequestDTO.getPassword1())
                .build();
    }
}
