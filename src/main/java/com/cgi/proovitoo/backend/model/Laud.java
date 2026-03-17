package com.cgi.proovitoo.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity
public class Laud {
    @Id
    @GeneratedValue
    private Long id;
    private int kohti;
    private String tsoon;
    private boolean privaatne;
    private boolean aknaAll;
    private boolean lastenurk;

    public Laud(int kohti, String tsoon, boolean privaatne, boolean aknaAll, boolean lastenurk) {
        this.kohti = kohti;
        this.tsoon = tsoon;
        this.privaatne = privaatne;
        this.aknaAll = aknaAll;
        this.lastenurk = lastenurk;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getKohti() {
        return kohti;
    }

    public void setKohti(int kohti) {
        this.kohti = kohti;
    }

    public String getTsoon() {
        return tsoon;
    }

    public void setTsoon(String tsoon) {
        this.tsoon = tsoon;
    }

    public boolean isPrivaatne() {
        return privaatne;
    }

    public void setPrivaatne(boolean privaatne) {
        this.privaatne = privaatne;
    }

    public boolean isAknaAll() {
        return aknaAll;
    }

    public void setAknaAll(boolean aknaAll) {
        this.aknaAll = aknaAll;
    }

    public boolean isLastenurk() {
        return lastenurk;
    }

    public void setLastenurk(boolean lastenurk) {
        this.lastenurk = lastenurk;
    }
}
