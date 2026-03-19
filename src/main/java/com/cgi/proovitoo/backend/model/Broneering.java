package com.cgi.proovitoo.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.time.LocalDateTime;


@Entity
public class Broneering {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
    private LocalDateTime broneeringuAlgus;
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
    private LocalDateTime broneeringuLopp;
    @ManyToOne
    @JoinColumn(name = "laud_id")
    private Laud laud;

    public Broneering() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getBroneeringuAlgus() {
        return broneeringuAlgus;
    }

    public void setBroneeringuAlgus(LocalDateTime broneeringuAlgus) {
        this.broneeringuAlgus = broneeringuAlgus;
    }

    public LocalDateTime getBroneeringuLopp() {
        return broneeringuLopp;
    }

    public void setBroneeringuLopp(LocalDateTime broneeringuLopp) {
        this.broneeringuLopp = broneeringuLopp;
    }

    public Laud getLaud() {
        return laud;
    }

    public void setLaud(Laud laud) {
        this.laud = laud;
    }
}
