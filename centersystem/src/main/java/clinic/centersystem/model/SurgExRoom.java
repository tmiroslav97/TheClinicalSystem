package clinic.centersystem.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SurgExRoom {

    private Long id;
    private Integer number;
    private String name;
    private Clinic clinic;

    public SurgExRoom() {
        // TODO: implement
    }


}