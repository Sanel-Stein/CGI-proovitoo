package com.cgi.proovitoo.backend.repository;

import com.cgi.proovitoo.backend.model.Broneering;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;


@Repository
public interface BroneeringRepository extends JpaRepository<Broneering, Long> {
    List<Broneering> findByBroneeringuAlgusBetween(
            LocalDateTime algus,
            LocalDateTime lopp
    );
}
