package com.cgi.proovitoo.backend.config;

import com.cgi.proovitoo.backend.repository.BroneeringRepository;
import jakarta.annotation.PreDestroy;
import org.springframework.stereotype.Component;

@Component
public class BroneeringCleanup {

    private final BroneeringRepository broneeringRepository;

    public BroneeringCleanup(BroneeringRepository broneeringRepository) {
        this.broneeringRepository = broneeringRepository;
    }

    @PreDestroy
    public void cleanup() {
        broneeringRepository.deleteAll();
    }
}
