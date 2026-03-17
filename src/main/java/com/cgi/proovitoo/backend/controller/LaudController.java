package com.cgi.proovitoo.backend.controller;

import com.cgi.proovitoo.backend.model.Laud;
import com.cgi.proovitoo.backend.service.LaudService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/laud")
public class LaudController {
    private final LaudService laudService;

    public LaudController(LaudService laudService) {
        this.laudService = laudService;
    }

    @GetMapping()
    public List<Laud> getLauad() {
        return laudService.getAll();
    }

    @GetMapping(value = "/{id}")
    public Laud getLaud(@PathVariable Long id) {
        return  laudService.getLaud(id);
    }

    @PostMapping()
    public Laud addLaud(@RequestBody Laud laud) {
        return  laudService.addLaud(laud);
    }
}
