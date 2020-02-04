package clinic.centersystem.model;

import clinic.centersystem.common.db.DbColumnConstants;
import clinic.centersystem.common.db.DbTableConstants;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = DbTableConstants.PRICELIST)
public class PriceList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "priceList", fetch = FetchType.LAZY)
    private Set<PriceListItem> items;

    @ManyToOne(fetch = FetchType.LAZY)
    private Clinic clinic;

    public PriceList() {
        // TODO: implement
    }

}