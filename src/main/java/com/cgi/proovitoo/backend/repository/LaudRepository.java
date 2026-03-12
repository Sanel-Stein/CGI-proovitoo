package com.cgi.proovitoo.backend.repository;

import com.cgi.proovitoo.backend.model.Laud;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LaudRepository extends JpaRepository<Laud, Long> {
}
