---
title: "Cadencen ohje"
description: "Näin käytät Cadencea: pyörät ja osat, kuluminen ja huoltovälit, huollot ja kuitit, ajot Terveydestä tai Stravasta, ostoslista, muistutukset ja varmuuskopio."
---
Tämä ohje on sama kuin sovelluksessa kohdassa **Asetukset → Ohje**. Painikkeet on nimetty kuten sovelluksessa.

## Aloitus

Cadence pitää kirjaa pyöriesi osista ja huolloista ja kertoo, milloin jokin kannattaa huoltaa tai vaihtaa. Kuluma lasketaan ajoista.

### Lisää pyörä

Paina **Pyörät**-välilehdellä **+**. Anna nimi ja tyyppi ja valitse osat: **Kaikki**, **Ei mitään** tai **Kopioi toisesta pyörästä**.

Jos pyörällä on jo ajettu, kirjoita **Aiemmin ajettu** pyörää lisätessä tai myöhemmin **Muokkaa pyörää** -sivulla, niin osien kuluma alkaa oikeasta kohdasta. Stravasta lisätyltä pyörältä Cadence kysyy, ovatko osat alkuperäisiä. Jos ovat, niiden kuluma lasketaan pyörän kaikista ajoista.

### Tuo ajot

Valitse **Asetukset → Lenkit → Lenkkien lähde**: Apple Health tai Strava. Lisätietoja on kohdassa [Ajot](#ajot).

Stravasta voi tuoda myös pyörät. Kun Strava on yhdistetty, Cadence kysyy, liitetäänkö Stravan pyörät olemassa oleviin vai lisätäänkö ne uusina.

## Pyörät ja osat

Pyörän sivulla ovat sen osat, seuraavat huollot, kulut ja historia. Osan sivulla ovat sen huoltovälit, kuluma, huollot ja kuitit.

### Osan vaihto ja siirto

- **Vaihda uuteen…** kirjaa vaihdon: vanha osa jää historiaan, ja uusi alkaa nollasta.
- **Siirrä…** vie osan toiseen pyörään tai **Varastoon**. Osan kuluma kulkee mukana.
- **Varastossa** ovat osat, jotka eivät ole minkään pyörän käytössä, esimerkiksi talvirenkaat.

### Arkistoi vai poista

Pyörän, jolla on ajoja, huoltoja tai vaihdettuja osia, voi vain arkistoida, jotta tilastot säilyvät. Arkistoitu pyörä ei muistuta huolloista. Molemmat löytyvät **Muokkaa pyörää** -sivulta.

## Kuluminen ja huoltovälit

Jokaisella osalla on yksi tai useampi huoltoväli kilometreinä, ajotunteina tai aikana. Raja, joka tulee ensin vastaan, ratkaisee.

Välit ovat yleisiä aloitusarvoja. Muokkaa niitä oman ajosi ja valmistajan ohjeen mukaan.

### Huolto ja tarkistus

**Merkitse huolletuksi…** nollaa huoltovälin. **Mitattu, kunnossa** siirtää väliä neljänneksen, kun osa on tarkistettu eikä sitä tarvitse vielä huoltaa. **Kumoa** näkyy hetken.

Jos osan valmistaja on Fox tai RockShox, osan sivulla ehdotetaan valmistajan huoltovälejä.

### Arvio

Kun ajoja on tarpeeksi, Cadence arvioi viime viikkojen ajotahdin perusteella, milloin raja tulee vastaan.

## Huollot, kuitit ja takuut

**Huollot**-välilehden **+**-painikkeella voit kirjata huollon, esimerkiksi pesun, tai osan vaihdon. Huoltoon voi liittää osia, hinnan ja muistiinpanon. Jos valittuna päivänä on ajoja, valitse, tehtiinkö huolto ennen päivän ajoja vai niiden jälkeen.

Vaihtoa ei voi poistaa, koska osien historia nojaa siihen.

### Kuitit

Lisää kuitti kuvana, skannauksena tai PDF:nä huoltoon tai suoraan osalle. Kuitit pienennetään, jotta ne vievät vähän tilaa.

### Takuu

Anna osalle takuun pituus. Cadence muistuttaa 30 päivää ennen takuun päättymistä, jos osa on käytössä.

## Ajot

Ajot tulevat yhdestä lähteestä kerrallaan: Apple Healthista tai Stravasta. Uudessa asennuksessa lähde on Apple Health. Lähteen vaihto ei poista aiempia ajoja, eikä samaa lenkkiä tuoda kahdesti.

### Apple Health

Kello tai pyörätietokone vie lenkit Terveyteen omasta sovelluksestaan, ja Cadence lukee ne sieltä. Valitse **Oletuspyörä**, jolle uudet lenkit menevät. Ajotunnit ovat treenin kesto sellaisena kuin sovellus sen vie Terveyteen. Jos kesto sisältää tauot, tunnit voivat olla suuremmat kuin Stravan liikkuva aika.

**Lenkit Terveyteen** laitteittain:

- **Apple Watch:** Treeni-sovelluksen pyöräily tallentuu Terveyteen itsestään. Reitti tulee mukana: kartta ja paikkakunta näkyvät.
- **Garmin:** Garmin Connect → Lisää → Yhdistetyt sovellukset → Apple Health, ja salli treenit. Reitti ei tule mukana: ei karttaa eikä paikkakuntaa.
- **Suunto:** Suunto-sovelluksen asetuksista jako Apple Healthiin päälle. Reitti ei tule mukana: ei karttaa eikä paikkakuntaa.
- **COROS:** COROS-sovellus → Profiili → Asetukset → 3rd Party Apps → Data Sync → Apple Health.
- **Strava:** Vie Terveyteen vain Strava-sovelluksella tallennetut lenkit. Kellolla tallennetut kannattaa viedä kellon omasta sovelluksesta.
- **Muut:** Katso sovelluksen asetuksista kohta Apple Health tai Terveys ja salli treenit.

Jos lenkit eivät näy, avaa **Terveys → profiilikuva → Yksityisyys → Apit**. Valitse ensin kellon sovellus ja salli treenit, sitten Cadence ja salli lukeminen.

### Strava

Strava yhdistetään omilla API-avaimilla. Stravasta tulee myös tieto ajon pyörästä, joten ajo kuluttaa oikean pyörän osia.

**Näin otat Stravan käyttöön:**

1. Avaa [strava.com/settings/api](https://www.strava.com/settings/api) ja kirjaudu.
2. Luo sovellus. Nimen ja sivuston voi keksiä itse, mutta nimessä ei saa olla sanaa "Strava".
3. Kirjoita **Authorization Callback Domain** -kenttään `localhost`.
4. Kopioi **Client ID** ja **Client Secret** Cadenceen ja paina **Tallenna avaimet**.
5. Paina **Yhdistä Strava** ja hyväksy.

Omien API-avainten käyttö voi vaatia maksullisen Strava-tilauksen. Avaimet tallentuvat vain tämän puhelimen avainnippuun eivätkä mene varmuuskopioon.

### Ajon pyörä ja tarkistus

Ajon pyörän voi vaihtaa ajolistassa tai ajon sivulla. Uudet ajot kootaan **Tarkista uudet ajot** -riville, jotta väärälle pyörälle mennyt ajo on helppo siirtää.

Ajon voi lisätä myös käsin **+**-painikkeella. Käsin lisätyn ajon voi muokata ja poistaa.

### Yhteenveto ja Vuosikooste

**Yhteenveto** näyttää kilometrit, ajat ja kulut vuosittain, ja **Pyörittäin** vertaa pyöriä. **Vuosikooste** avautuu Yhteenvedosta 1.12. alkaen ja aina menneille vuosille.

## Ostoslista

Kulunut osa tulee ostoslistalle itsestään, kun sen vaihtoväli on 80 %:ssa. Muut osat ja tuotteet, kuten ketjuöljyn, voit lisätä **+**-painikkeella.

Pyyhkäise rivi oikealle, niin se merkitään ostetuksi. Vasemmalle pyyhkäisy näyttää napit **Poista listalta** ja **Avaa linkki**. Poiston voi perua hetken **Kumoa**-painikkeella.

Osan sivulle voi tallentaa ostolinkin. Muun tuotteen linkki on sen lisätiedoissa. **Jaa lista** lähettää listan linkkeineen esimerkiksi viestinä.

## Muistutukset, widget ja taustapäivitys

Cadence muistuttaa, kun huolto lähestyy. Valitse kohdassa **Asetukset → Huoltorajat**, mitkä rajat lasketaan: kilometrit, ajotunnit tai aika. Pois päältä oleva raja ei näy kulumassa, muistutuksissa, widgetissä eikä ostoslistalla. Pyörän omat asetukset ohittavat nämä.

Kotinäytön widget näyttää lähimmät huollot. Widgetin napautus avaa osan sivun.

Taustapäivitys hakee uudet ajot ja päivittää muistutukset ja widgetin, kun sovellus on kiinni. iOS päättää, milloin se tehdään.

## Varmuuskopio ja taulukkovienti

Varmuuskopiossa ovat pyörät kuvineen, osat, ajot, huollot ja kuitit. Strava-avaimet eivät ole mukana, joten uudessa puhelimessa Strava yhdistetään uudelleen.

Varmuuskopion palautus korvaa kaikki puhelimen Cadence-tiedot. Cadence tekee ensin turvakopion nykyisistä tiedoista. Jos valitsit väärän tiedoston, paina Asetuksissa **Palauta tiedot ennen palautusta**.

**Vie taulukkona** luo Excel-tiedoston, jossa ovat pyörät, osat, huollot ja kulut omilla välilehdillään.

## Jos jokin ei toimi

### Lenkit eivät tule Terveydestä

Avaa **Terveys → profiilikuva → Yksityisyys → Apit**. Salli ensin kellon sovellukselle treenien kirjoitus ja sitten Cadencelle niiden lukeminen.

### Strava ei päivity

Jos Ajot-välilehdellä lukee, että Strava-yhteys on vanhentunut, yhdistä Strava uudelleen Asetuksissa. Vedä ajolistaa alas, niin uudet ajot haetaan heti.

### Ajo on väärällä pyörällä

Vaihda pyörä ajolistan rivin pyörävalikosta. Osien kuluma lasketaan heti uudelleen.

### Muistutuksia ei tule

Salli Cadencen ilmoitukset iOS:n asetuksissa ja tarkista, että ainakin yksi raja on päällä kohdassa **Asetukset → Huoltorajat**.

Etkö löytänyt vastausta? Katso [kysymykset ja vastaukset](/fi/cadence/support/) tai lähetä sähköpostia.
