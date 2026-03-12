package com.cgi.proovitoo.backend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;


@Entity
public class Broneering {
    @Id
    @GeneratedValue
    private Long id;
    private LocalDateTime broneeringuAlgus;
    private LocalDateTime broneeringuLopp;
    @ManyToOne
    @JoinColumn(name = "laud_id")
    private Laud laud;
}
