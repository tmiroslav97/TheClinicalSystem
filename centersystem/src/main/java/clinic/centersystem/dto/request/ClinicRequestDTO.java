package clinic.centersystem.dto.request;

import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClinicRequestDTO {

    private Long id;

    private String name;

    private String description;

    private String address;

}
