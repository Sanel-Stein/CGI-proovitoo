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
    private Boolean baariLahedal;
    private Boolean aknaAll;
    private Boolean lastenurk;

    public Laud(Integer kohti, String tsoon, Boolean baariLahedal, Boolean aknaAll, Boolean lastenurk) {
        this.kohti = kohti;
        this.tsoon = tsoon;
        this.baariLahedal = baariLahedal;
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

    public Boolean isBaariLahedal() {
        return baariLahedal;
    }

    public void setBaariLahedal(Boolean baariLahedal) {
        this.baariLahedal = baariLahedal;
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
