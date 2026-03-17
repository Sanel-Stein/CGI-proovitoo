package com.cgi.proovitoo.backend.controller;

import com.cgi.proovitoo.backend.model.Broneering;
import com.cgi.proovitoo.backend.service.BroneeringService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/broneering")
public class BroneeringController {
    private final BroneeringService broneeringService;

    public BroneeringController(BroneeringService broneeringService) {
        this.broneeringService = broneeringService;
    }

    @GetMapping()
    public List<Broneering> getAll() {
        return broneeringService.getAll();
    }

    @GetMapping(value = "/{id}")
    public Broneering getBroneering(@PathVariable Long id) {
        return  broneeringService.getBroneering(id);
    }

    @PostMapping()
    public Broneering addBroneering(@RequestBody Broneering broneering) {
        return  broneeringService.addBroneering(broneering);
    }
}
