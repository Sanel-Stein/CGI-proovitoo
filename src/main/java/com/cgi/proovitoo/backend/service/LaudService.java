package com.cgi.proovitoo.backend.service;

import com.cgi.proovitoo.backend.model.Laud;
import com.cgi.proovitoo.backend.repository.LaudRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LaudService {
    private final LaudRepository laudRepository;

    public LaudService(LaudRepository laudRepository) {
        this.laudRepository = laudRepository;
    }

    public List<Laud> getAll() {
        return laudRepository.findAll();
    }
}
