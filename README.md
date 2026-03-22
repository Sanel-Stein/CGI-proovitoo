# CGI-proovitöö

## Rakenduse käivitamine
Eeldused
- Java 25
- Node.js ja npm
- PostgreSQL

``git clone https://github.com/Sanel-Stein/CGI-proovitoo.git`` 

``cd CGI-Proovitoo``

application.properties failis muuta url, username ja password endale vastavaks.

``.\gradlew.bat bootRun``

backend töötab: http://localhost:8080

``cd frontend``

``npm install``

``npm run dev``

frontend töötab: http://localhost:5173


## Rakenduse kirjeldus
Rakenduse backend'iks on kasutatud SpringBoot'i ja frontend'iks React'i. Rakendus kasutab PostgreSQL andmebaasi, kuhu salvestatakse laudade ja broneeringute andmed. Esmalt näeb kasutaja laudade plaani ruudustikul ning otsingufiltreid. Sisestades broneeringuks sobivad andmed, kuvatakse plaanil roheliselt kõik vabad lauad, punaselt hõivatud ning kollaselt süsteemi arvates kõige sobilikum laud vastavalt inimeste arvule ja kasutaja eelistustele. Valides plaanil vaba laud ilmub ekraanil laua info ning sealt on võimalik vastav laud valitud kellaajaks broneerida. 

## 09.03.2026
Alustasin projektiga. Kuna polnud varem Spring Boot'iga kokku puutunud, siis esmalt lugesin internetist selle kohta. Oma projekti eeskujuks võtsin cptdanko repositooriumi spring-boot-react-template (https://github.com/cptdanko/spring-boot-react-template). ~2h

## 12.03.2026
Alustasin backend'i ülesseadmisega. Lõin objekti-, controller-, service- ja repository klassid laua ja broneeringu jaoks. Ühendiasin projekti postgreSQL andmebaasiga ning panin programmi automaatselt laudu genereerima. Kontrollisin Postman'i abiga loodud meetodite tööd. ~3h

## 17.03.2026
Alustasin frontend'i arendamisega. Lõin komponendid otsingu tegemiseks ja restorani plaani kuvamiseks. Backend'ist loetakse lauad ja kuvatakse ruudustikus. Igal otsingul genereeritakse suvaliselt hõivatud lauad. Lõin algse laudade soovitamise loogika. ~4h

## 19.03.2026
Panin kõik komponendid esilehele ja lisasin ka komponendi, mis kuvab laua informatsiooni kui plaanil lauale klikata. Peale laua valimist on võimalik see broneerida ning broneering salvestatakse andmebaasi. ~4h

## 20.03.2026
Lisasin backend'i broneeringute aja järgi otsimise andmebaasist, et saada kõik broneeringud, mis kattuvad valitud ajaga. Frontend'is valides aja võetakse andmebaasist kõik kattuvad broneeringud ja vastavad lauad märgitakse hõivatuks. Mõtlesin pikalt, kas genereerida, peale aja valimist, suvalisi brooneeringuid ja salvestada need andmebaasi, et hiljem oleks hõivatud laudade seis sama, kuid leidsin, et see ei tundu antud kontekstis oluline. ~3h

## 21.03.2026
Muutsin laudade soovitamise loogikat. Nüüd omistatakse vabadele laudadele skoor ning kõrgeima skooriga laud soovitatakse kasutajale. Skoor kujundeb: vastavalt lauas vabaks jäänud kohtade arvule saab punkte 0.5 - 4, kui tsoon vastab eelistusele või eelistatud tsoon puudub +2p, iga kokkulangev eelistus +1p. Tegin veel mõningaid väiksemaid muudatusi ja arendasin väljanägemist. Kasutasin reageerivat disaini, et kasutajaliides muutuks vastavalt ekraani suurusele. ~3h

Kokku kulus tööle umbes 19 tundi. Kõige keerulisem oli front- ja backend'i suhtluse korraldamine ja lehe kujundamine. Abi sain põhiliselt w3school ja stackoverflow lehtedelt. AI abi kasutasin juhul kui mujalt abi ei leidnud ning kiirelt errorite lahendamiseks. 

Piltide allikad: 

icon.jpg: https://unsplash.com/illustrations/stylized-black-icon-of-a-hamburger-QO02sPd0HAk

laud.jpg: https://unsplash.com/photos/brown-wooden-table-with-chairs-V2nhzJm-2FM
