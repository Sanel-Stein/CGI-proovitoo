# CGI-proovitöö

## 09.03.2026
Alustasin projektiga. Kuna polnud varem Spring Boot'iga kokku puutunud, siis esmalt lugesin internetist selle kohta. Oma projekti eeskujuks võtsin cptdanko repositooriumi spring-boot-react-template (https://github.com/cptdanko/spring-boot-react-template). ~2h

## 12.03.2026
Alustasin backend'i ülesseadmisega. Lõin objekti-, controller-, service- ja repository klassid laua ja broneeringu jaoks. Ühendiasin projekti postgreSQL andmebaasiga ning panin programmi automaatselt laudu genereerima. Kontrollisin Postman'i abiga loodud meetodite tööd. ~3h.

## 17.03.2026
Alustasin frontend'i arendamisega. Lõin komponendid otsingu tegemiseks ja restorani plaani kuvamiseks. Backend'ist loetakse lauad ja kuvatakse ruudustikus. Igal otsingul genereeritakse suvaliselt hõivatud lauad. Lõin algse laudade soovitamise loogika. ~4h.

## 19.03.2026
Panin kõik komponendid esilehele ja lisasin ka komponendi, mis kuvab laua informatsiooni kui plaanil lauale klikata. Peale laua valimist on võimalik see broneerida ning broneering salvestatakse andmebaasi. ~4h

## 20.03.2026
Lisasin backend'i broneeringute aja järgi otsimise andmebaasist, et saada kõik broneeringud, mis kattuvad valitud ajaga. Frontend'is valides aja võetakse andmebaasist kõik kattuvad broneeringud ja vastavad lauad märgitakse hõivatuks. Mõtlesin pikalt, kas genereerida, peale aja valimist, suvalisi brooneeringuid ja salvestada need andmebaasi, et hiljem oleks hõivatud laudade seis sama, kuid leidsin, et see ei tundu antud kontekstis oluline. ~3h
