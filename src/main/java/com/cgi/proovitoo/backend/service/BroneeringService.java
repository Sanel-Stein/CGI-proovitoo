package com.cgi.proovitoo.backend.service;

import com.cgi.proovitoo.backend.model.Broneering;
import com.cgi.proovitoo.backend.repository.BroneeringRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class BroneeringService {
    private final BroneeringRepository broneeringRepository;

    public BroneeringService(BroneeringRepository broneeringRepository) {
        this.broneeringRepository = broneeringRepository;
    }

    public Broneering addBroneering(Broneering broneering) {
        return broneeringRepository.save(broneering);
    }

    public List<Broneering> getBroneeringud(LocalDateTime broneeringuAlgus) {
        LocalDateTime algus = broneeringuAlgus.minusHours(2);
        LocalDateTime lopp = broneeringuAlgus.plusHours(2);

        return broneeringRepository.findByBroneeringuAlgusBetween(algus, lopp);
    }
}
