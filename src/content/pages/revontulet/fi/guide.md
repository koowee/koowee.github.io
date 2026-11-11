---
title: "Revontulten ohje"
description: "Näin luet Revontulten arviota: tämä yö, hyvä aika, tuntitaulukko, miten arvio lasketaan, Juuri nyt -mittaukset, ilmoitukset, widgetit ja havaintoloki."
---
Tämä ohje on sama kuin sovelluksessa kohdassa **Asetukset → Ohje**. Painikkeet on nimetty kuten sovelluksessa.

## Aloitus

Revontulet arvioi tunti tunnilta, kuinka hyvin revontulia voi nähdä valitsemassasi paikassa. Arvio yhdistää avaruussään, pilvisyyden, pimeyden ja kuunvalon.

### Valitse paikka

Paina **Ennuste**-välilehdellä suurennuslasia. Hae paikkaa nimellä, käytä omaa sijaintiasi tai valitse jokin ehdotetuista revontulipaikoista.

### Suosikit

Merkitse paikka suosikiksi tähdellä. Suosikeista tulee ilmoitukset, ja **Suosikit**-välilehdellä näet niiden tämän yön yhdellä silmäyksellä. Napauta suosikkia, niin sen ennuste aukeaa.

### Päivitys

Ennuste päivittyy 15 minuutin välein, kun näkymä on auki. Vedä alas, niin se päivittyy heti.

## Arvion lukeminen

Prosentti kertoo, kuinka hyvät olosuhteet tunnilla ovat revontulien näkemiseen:

| Arvio | Sana |
|---|---|
| 50 % tai enemmän | Hyvä mahdollisuus |
| 25–49 % | Kohtalainen mahdollisuus |
| 5–24 % | Pieni mahdollisuus |
| alle 5 % | Epätodennäköistä |

Arvio on suuntaa antava, ei tilastollinen todennäköisyys eikä lupaus. Revontulet voivat yllättää kumpaankin suuntaan.

### Tänä yönä

**Paras aika** on yön paras tunti. **Hyvä aika** tarkoittaa tunteja, joilla arvio on vähintään ilmoitusrajasi, sama aika kuin ilmoituksessa.

Tänä yönä -kortti vaihtuu seuraavaan yöhön klo 4 paikallista aikaa. Sen jälkeen kortilla näkyy vielä **Loppuyö**, jos yötä on jäljellä.

### Tuntitaulukko

- **Pilviä** on kokonaispilvisyys. **Yläpilveä** tarkoittaa, että pilvet ovat enimmäkseen ohutta yläpilveä, joka haittaa vähemmän.
- **Kp** kuvaa magneettikentän häiriötä asteikolla 0–9: mitä suurempi, sitä etelämpänä revontulia näkyy. Tähti (\*) tarkoittaa, että Kp on 27 vuorokauden ennusteesta ja siksi epätarkempi. Salama (⚡︎) tarkoittaa, että arviossa on mukana juuri tehty mittaus.
- **Kuu**-sarakkeen merkki kertoo, että kirkas kuu on taivaalla.

### Pidemmän aikavälin ennuste

27 vuorokauden ennuste kertoo vain kunkin päivän suurimman Kp-arvon, joten luku on yön paras mahdollinen hetki. Pilvisyys on mukana noin 10 vuorokauden ajalta. Harmaissa öissä ei ole pilviennustetta, vaan ne näyttävät vain aktiivisuuden.

## Miten arvio lasketaan

Jokaiselle tunnille lasketaan neljä tekijää, ja arvio on niiden tulo: aktiivisuus, selkeys, pimeys ja kuunvalo.

- **Aktiivisuus** tulee NOAA:n Kp-ennusteesta ja siitä, kuinka lähellä revontulivyöhykettä paikka on. Kuluvalle ja seuraavalle tunnille mukaan tulevat myös lähimmän Ilmatieteen laitoksen magnetometrin R-luku, jos asema on alle 300 km päässä, ja NOAA:n reaaliaikainen OVATION-malli.
- **Selkeys** on 100 % miinus pilvisyys (Open-Meteo). Pilvet lasketaan kerroksittain: suurin luvuista matala, keskikorkea ja puolet korkeasta, enintään kokonaispilvisyys, koska ohut yläpilvi haittaa vähemmän.
- **Pimeys** lasketaan Auringon korkeudesta: täysin pimeää on, kun Aurinko on yli 12 astetta horisontin alapuolella.
- **Kuunvalo**: kirkas kuu peittää heikot revontulet. Kuunvalo lasketaan kuun vaiheesta ja korkeudesta, ja se laskee arviota enintään 30 %, eniten heikolla aktiivisuudella.

Malli on sovitettu Lapin oloihin. Kaukana Pohjolasta se on karkeampi.

## Juuri nyt

**Juuri nyt** -kortilla on lähimmän Ilmatieteen laitoksen magnetometrin R-luku, joka kertoo magneettikentän häiriöstä nyt (jos asema on alle 300 km päässä), ja NOAA:n OVATION-mallin revontulien voimakkuus paikan kohdalla.

### Aurinkotuuli

Aurinkotuulen arvot tulevat NOAA:n mittauksista Maan ja Auringon välissä. Kun Bz on etelään (alle −5 nT), revontulet voimistuvat usein noin tunnin päästä. Aurinkotuuli on vain tiedoksi, eikä se muuta arviota.

### Taivaskamera

Kuva tulee lähimmästä Ilmatieteen laitoksen taivaskamerasta, Kilpisjärveltä, Kevosta, Muoniosta tai Helsingistä, enintään 300 km:n päästä. Enintään 150 km:n päässä oleva kamera näkyy pyöreänä pikkukuvana. Kauempana oleva näkyy linkkinä, koska sen taivas kertoo paikan taivaasta vähemmän. Napauta, niin kuva aukeaa koko ruudulle, ja sitä voi suurentaa nipistämällä tai kaksoisnapautuksella. Kun kuva ei ole vaihtunut yli tuntiin, sen tilalla näkyy pimeään aikaan huomautus.

## Ilmoitukset

Ilmoitukset tulevat suosikeista, kun yön paras tunti saavuttaa ilmoitusrajan (oletuksena 50 %). Rajan voi vaihtaa kohdassa **Asetukset → Ilmoitusraja**.

- **Ennakkoilmoitus** tulee valitsemaasi kellonaikaan (klo 12, 14, 16 tai 18).
- **Muistutus** tulee 15 minuuttia ennen hyvän ajan alkua.

Ilmoitukset ajastetaan aina, kun ennuste päivittyy, joten ne tulevat, vaikka sovellus ei olisi auki.

**Tarkista suosikit nyt** lähettää testi-ilmoituksen heti, jos jonkin suosikin tämä yö saavuttaa ilmoitusrajan. Se ei muuta ajastettuja ilmoituksia.

Suosikit-välilehti kertoo ylhäällä, jos ilmoitukset ovat pois päältä sovelluksessa tai iPhonen asetuksissa. Napauta sen painiketta, niin pääset korjaamaan asian.

## Widgetit

- **Suosikit tänä yönä** näyttää kotinäytöllä suosikkiesi tämän yön parhaan tunnin.
- **Paikan yö** näyttää yhden paikan yön tunneittain. Paikan voi valita widgetin muokkauksesta.
- Paikan yö on myös lukitusnäytöllä: pyöreä näyttää parhaan arvion, suorakulmio paikan, parhaan tunnin ja hyvän ajan, ja rivi kellon yllä paikan ja parhaan tunnin.

Widgetin napautus avaa sovelluksen sen paikan kohdalta. Widgetit päivittyvät iOS:n aikataulussa, joten ne voivat olla hetken sovellusta jäljessä.

## Havaintoloki

Kun havaintoloki on päällä (**Asetukset → Havaintoloki**), Tänä yönä -kortilla on painikkeet **Näin revontulet** ja **En nähnyt**. Kirjaus tallentaa sen hetken arvion, ja voimakkuuden voi lisätä.

**Näytä loki** kertoo, kuinka usein näit revontulia eri arvioilla, ja tiedot voi viedä CSV-tiedostona. Loki pysyy puhelimessa.

## Tietolähteet

- [NOAA SWPC](https://www.swpc.noaa.gov/): Kp-ennuste, 27 vuorokauden ennuste, OVATION, aurinkotuuli
- [Ilmatieteen laitos ja ESA](https://space.fmi.fi/MIRACLE/RWC/): R-luku
- [Ilmatieteen laitos](https://rwc-finland.fmi.fi/index.php/revontulikameroiden-kuvat/): taivaskamerat
- [Open-Meteo](https://open-meteo.com/): pilviennuste (CC BY 4.0)

Sovellus hakee datan suoraan näistä lähteistä. Sillä ei ole omia palvelimia eikä tilejä.

## Jos jokin ei toimi

Jos ennustetta ei saada, tarkista verkkoyhteys ja vedä näkymää alas. Jos jokin lähde ei vastaa, siitä näkyy oranssi huomautus, ja arvio lasketaan muista lähteistä.

Jos paikkaa ei löydy, kokeile lähintä kaupunkia tai kylää. Oma sijainti vaatii sijaintiluvan iPhonen asetuksista.

Muissa asioissa katso [tukisivu](/fi/revontulet/support/) tai lähetä sähköpostia osoitteeseen [valkama.app@gmail.com](mailto:valkama.app@gmail.com). Kerro mielellään iPhonesi malli ja iOS-versio.
