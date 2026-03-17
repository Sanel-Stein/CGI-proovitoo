package com.cgi.proovitoo.backend.config;

import com.cgi.proovitoo.backend.model.Laud;
import com.cgi.proovitoo.backend.repository.LaudRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Random;

//Klassi genereeris OpenAI ChatGPT (GPT-5-mini) keelemudel (OpenAI, 2026),
//mille modifitseerisin enda olukorrale vastavaks

@Component
public class DatabaseInitializer implements CommandLineRunner {

    private final LaudRepository laudRepository;

    public DatabaseInitializer(LaudRepository laudRepository) {
        this.laudRepository = laudRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        Laud l1 = new Laud(4, "terrass", false, false, false);
        Laud l2 = new Laud(2, "terrass", false, false, true);
        Laud l3 = new Laud(2, "terrass", false, true, true);
        Laud l4 = new Laud(2, "terrass", false, true, false);
        Laud l5 = new Laud(4, "terrass", false, true, false);
        Laud l6 = new Laud(6, "terrass", false, true, false);
        Laud l7 = new Laud(2, "terrass", false, true, false);
        Laud l8 = new Laud(2, "sisesaal", false, true, false);
        Laud l9 = new Laud(6, "sisesaal", false, true, false);
        Laud l10 = new Laud(6, "sisesaal", false, false, false);
        Laud l11 = new Laud(4, "sisesaal", false, false, false);
        Laud l12 = new Laud(8, "sisesaal", false, false, true);
        Laud l13 = new Laud(4, "sisesaal", false, false, true);
        Laud l14 = new Laud(2, "sisesaal", false, false, true);
        Laud l15 = new Laud(6, "privaatruum", true, false, false);
        Laud l16 = new Laud(4, "privaatruum", true, false, false);
        Laud l17 = new Laud(2, "privaatruum", true, false, false);
        Laud l18 = new Laud(6, "privaatruum", true, false, false);
        Laud l19 = new Laud(6, "privaatruum", true, false, false);
        Laud l20 = new Laud(8, "privaatruum", true, true, false);


        laudRepository.saveAll(List.of(
                l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
                l11, l12, l13, l14, l15, l16, l17, l18, l19, l20
        ));
    }
}