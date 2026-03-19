package com.cgi.proovitoo.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Laud {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer kohti;
    private String tsoon;
    private Boolean privaatne;
    private Boolean aknaAll;
    private Boolean lastenurk;

    public Laud(Integer kohti, String tsoon, Boolean privaatne, Boolean aknaAll, Boolean lastenurk) {
        this.kohti = kohti;
        this.tsoon = tsoon;
        this.privaatne = privaatne;
        this.aknaAll = aknaAll;
        this.lastenurk = lastenurk;
    }

    public Laud() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getKohti() {
        return kohti;
    }

    public void setKohti(Integer kohti) {
        this.kohti = kohti;
    }

    public String getTsoon() {
        return tsoon;
    }

    public void setTsoon(String tsoon) {
        this.tsoon = tsoon;
    }

    public Boolean isPrivaatne() {
        return privaatne;
    }

    public void setPrivaatne(Boolean privaatne) {
        this.privaatne = privaatne;
    }

    public Boolean isAknaAll() {
        return aknaAll;
    }

    public void setAknaAll(Boolean aknaAll) {
        this.aknaAll = aknaAll;
    }

    public Boolean isLastenurk() {
        return lastenurk;
    }

    public void setLastenurk(Boolean lastenurk) {
        this.lastenurk = lastenurk;
    }
}
