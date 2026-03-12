package com.cgi.proovitoo.backend.config;

import com.cgi.proovitoo.backend.model.Laud;
import com.cgi.proovitoo.backend.repository.LaudRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Random;

//Klassi genereeris OpenAI ChatGPT (GPT-5-mini) keelemudel (OpenAI, 2026),
//mille modifitseerisin enda olukorrale vastavaks

@Configuration
public class DatabaseInitializer {

    @Bean
    CommandLineRunner initDatabase(LaudRepository laudRepository) {
        return args -> {

            if (laudRepository.count() == 0) {

                Random random = new Random();

                for (int i = 0; i < 20; i++) {

                    Laud laud = new Laud();

                    laud.setKohti((random.nextInt(4) + 1) * 2);
                    String[] tsoonid = {"terrass", "sisesaal", "privaatruum"};

                    String tsoon = tsoonid[random.nextInt(tsoonid.length)];
                    laud.setTsoon(tsoon);
                    laud.setAknaAll(random.nextBoolean());
                    laud.setPrivaatne(random.nextBoolean());
                    laud.setLastenurk(random.nextBoolean());

                    laudRepository.save(laud);
                }
            }
        };
    }
}