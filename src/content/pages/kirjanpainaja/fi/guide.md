---
title: "Kirjanpainajan ohje"
description: "Näin käytät Kirjanpainajaa: käyttöönotto, kirjaukset ja kuitit, ALV, laskutus, sopimukset, maksujen täsmäytys, veroilmoitukset, vuoden päättäminen, varmuuskopiot ja iPhone-sovellus."
---
Tämä on tiivistelmä Mac-sovelluksen omasta ohjeesta, joka on kohdassa **Ohje → Kirjanpainajan ohje**. Sovelluksen ohje on tarkempi. Painikkeet on nimetty kuten sovelluksessa.

## Mikä Kirjanpainaja on

Kirjanpainaja on toiminimen kirjanpito- ja veroapuri Macille. Siinä on kaksi osiota: **Metsätalous**, josta tulevat metsätalouden veroilmoituksen (2C) luvut, ja **Toiminimi**, josta tulevat elinkeinotoiminnan veroilmoituksen (5) luvut. Lisäksi se laskee vuoden ALV-ilmoituksen.

Kirjanpainaja pitää kirjaa tuloista ja menoista, laskee ALV:n, liittää kirjauksiin kuitit, laskee matkat, konetunnit ja poistot ja näyttää veroilmoitusten luvut samassa järjestyksessä kuin OmaVerossa.

Kirjanpainaja **ei**:
- lähetä mitään OmaVeroon. Kopioit luvut itse.
- hoida henkilöverotusta, kuten kotitalousvähennystä.
- ota yhteyttä pankkiin. Tiliotteet tuodaan tiedostoina.

Luvut lasketaan näiden oletusten mukaan. Jos jokin ei sovi tilanteeseesi, kysy kirjanpitäjältä tai Verohallinnolta ennen kuin käytät lukuja.
- Toimintamuodot ovat toiminimen elinkeinotoiminta (lomake 5) ja metsätalous (lomake 2C). Muita yritysmuotoja ei tueta.
- ALV-ilmoitus lasketaan koko kalenterivuodelta, ja kanta valitaan kirjauksen päivän mukaan.
- Kirjaus kuuluu kirjauksen päivän vuoteen.
- Myyntilaskun myynti kirjataan toimituspäivälle (suoriteperuste).

## Käyttöönotto

1. Avaa **Asetukset** ja valitse Yleiset-välilehdellä **Tallennuskansio**. Kansio voi olla iCloud Drivessa, Dropboxissa, Google Drivessa, OneDrivessa tai missä tahansa Macin kansiossa. Sen alle tulee kansio *Kirjanpainaja*, jossa ovat kuitit, Saapuneet ja varmuuskopiot.
2. Valitse Asetuksissa toimiala. Se määrää aloituskategoriat. Laskenta on kaikilla toimialoilla sama.
3. Valitse työkalupalkin **Vuosi**-valikosta vuosi, jota kirjaat.
4. Tarkista vuoden asetukset: kilometrikorvaus, pienhankintarajat, määräpäivät ja koneiden tuntihinnat. Ne kopioituvat edelliseltä vuodelta.
5. Jos teet poistoja, aseta kummankin osion poistopohjan aloitusvuosi ja menojäännös.
6. Tee ensimmäinen kirjaus: **Kirjaukset → Uusi kirjaus**.

Vanhan Excel-pohjan vuoden voi tuoda **Tuonti**-sivulla painikkeella **Tuo Excel-työkirja…**. Ennen tallennusta näet esikatselun, ja tuonnin voi perua.

## Vuoden kulku

1. **Kuitit talteen** Saapuneet-kansioon tai suoraan Kirjaukset-sivulle.
2. **Kirjaukset.** Kategoria ratkaisee, mihin veroilmoituksen kohtaan kirjaus menee.
3. **Matkat ja konetunnit.**
4. **Maksujen täsmäytys** (valinnainen). Tuo tiliotteet ja yhdistä maksut kirjauksiin.
5. **Poistot.**
6. **Veroilmoitukset.** Kopioi luvut OmaVeroon.
7. **Vuoden päättäminen.** Korjaa tai kuittaa huomautukset, liitä jätetyt ilmoitukset, lukitse vuosi ja tallenna vuosiarkisto.

## Yleiskatsaus ja Analyysi

**Yleiskatsaus** näyttää valitun vuoden yhdellä silmäyksellä. Ylimpänä on **Tehtävää**: Saapuneissa odottavat kuitit, vuoden tarkistuksen kuittaamattomat huomautukset ja lähestyvä määräpäivä. Rivit vievät oikealle sivulle. Sen alla ovat tulos osioittain, ALV, ennakonpidätykset, avoimet laskut, sopimukset ja päättyvät takuut. Alimpana **Tila** kertoo viimeisimmän varmuuskopion ja puhelimen lukujen päivityksen.

**Analyysi** näyttää tulot, menot ja ALV:n kuukausittain sekä menot kategorioittain, ja vertaa vuosia keskenään. Luvut täsmäävät aina veroilmoitukseen.

## Kirjaukset ja kuitit

Kirjaukset-sivulla ovat valitun vuoden tulot ja menot. Niitä voi rajata osion ja kategorian mukaan ja hakea. Kirjaukset numeroidaan vuosittain, esimerkiksi 2026-001.

Kuitin saa kirjattua kolmella tavalla:
- Tallenna kuitti (PDF tai kuva) kansioon *Kirjanpainaja/Saapuneet*, esimerkiksi puhelimesta. Se näkyy **Saapuneet**-sivulla, jolta valitset **Kirjaa…**.
- Pudota tiedosto Kirjaukset- tai Saapuneet-sivulle.
- Valitse kuitti kirjauksen muokkausikkunassa painikkeella **Valitse kuitti…**.

Kirjanpainaja lukee kuitista päivän, myyjän, summan, ALV:n ja tuoterivit ja ehdottaa niitä. Lukeminen tehdään Macilla. Tarkista ehdotukset aina ennen tallennusta. Jos kuitissa on rivejä eri ALV-kannoilla, kukin kanta tallentuu omaksi kirjauksekseen samalla kuitilla.

Tallennettaessa kuitti nimetään muotoon *vvvv-kk-pp_osio_selite* ja siirretään kansioon *Kirjanpainaja/Kuitit/vuosi*. Muut saman kirjauksen tiedostot, kuten takuutodistus tai lasku, lisätään **liitteiksi**.

Tulokirjaukselle voi merkitä **ennakonpidätyksen**, jos maksaja on tilittänyt sen suoraan verottajalle, esimerkiksi puukaupassa. Kalustohankinnalle valitaan **Käsittely**: pienhankinta, lyhyt käyttöikä tai poistopohjaan.

## ALV

Jokaisella kirjauksella on summa, ALV-käsittely ja ALV-kanta. Valitse kohdasta **Summa on**, onko kirjoittamasi summa verollinen vai veroton. Kirjanpainaja laskee loput.

- Kategoria ehdottaa ALV-käsittelyn. Sitä voi muuttaa kirjauskohtaisesti.
- Kanta haetaan päivän mukaan, joten esimerkiksi 1.9.2024 voimaan tullut 25,5 % ja 1.1.2026 voimaan tullut 13,5 % menevät oikein.
- Kun toimiala on sähkötyöt tai rakennustyöt, mukana on rakentamispalvelun käännetty ALV.

## Laskutus

Laskutus-sivulla tehdään myyntilaskut, paikan päällä maksettujen myyntien kuitit ja hyvityslaskut. Täytä ensin **Asetukset → Yleiset → Toiminimen tiedot**: nimi, Y-tunnus, osoite ja IBAN.

- **Uusi lasku** avaa luonnoksen. ALV-kanta määräytyy toimituspäivän mukaan. Mukana ovat kotitalousvähennyksen työn osuus, rakentamispalvelun käännetty verovelvollisuus ja EU-palvelumyynti.
- **Lähetä** antaa laskulle numeron ja viitteen, kirjaa myynnin ja tekee PDF:n, jossa on pankkiviivakoodi ja QR-koodi. PDF:n voi tulostaa, tallentaa tai lähettää Mailin kautta.
- Lähetettyä laskua ei muuteta. Virhe korjataan **hyvityslaskulla**, joka voi olla myös osittainen.
- Tiliotteen tuonti tunnistaa laskun viitteen ja merkitsee laskun maksetuksi.

## Sopimukset ja takuut

**Sopimukset** seuraa myynti- ja ostosopimuksia, joiden työt ja rahat tulevat myöhemmin, kuten puukauppaa, joka maksetaan erissä. Sopimus ei tee kirjauksia. Se kokoaa liitetyt kirjaukset ja vertaa niitä arvioon ja maksueriin. Myöhässä olevat erät näkyvät kortilla ja Yleiskatsauksessa.

**Takuut** näyttää ostokset, joilla on takuuta jäljellä. Takuu lisätään kirjaukselle, ja 60 päivän sisällä päättyvät näkyvät oranssina.

## Maksut ja tiliotteet

Maksujen täsmäytys otetaan käyttöön kohdassa **Asetukset → Yleiset → Näytettävät ominaisuudet**. Pankin CSV, luottokortin Excel ja PayPalin CSV tuodaan **Tuonti**-sivulla. Jo tuodut rivit ohitetaan, joten päällekkäisiä tiliotteita voi tuoda huoletta.

**Maksut**-sivu ehdottaa, mikä tiliotteen rivi maksaa minkäkin kirjauksen. Rivistä, jolle ei ole kirjausta, voi tehdä kirjauksen painikkeella **Tee kirjaus…**. Omat siirrot, kuten kortin maksu pankkitililtä, tunnistetaan, jotta mitään ei lasketa kahdesti. Tiliotteen rivi ei itse muuta veroilmoituksen lukuja.

## Matkat, konetunnit ja poistot

- **Matkat**: työajot omalla autolla. Korvaus lasketaan vuoden kilometrikorvauksesta, ja peräkärrystä tulee lisä. Metsätalouden matkalle voi valita metsätilan, jolloin kilometrit täyttyvät tilan matkasta.
- **Konetunnit**: omien koneiden, esimerkiksi mönkijän, käyttö. Arvo on tunnit kertaa koneen vuoden tuntihinta.
- **Poistot**: kummankin osion poistopohja ja vuoden kalustohankinnat. Tyhjä poisto tarkoittaa enimmäispoistoa (25 %).

## Veroilmoitukset

Veroilmoitukset-sivu näyttää ALV-ilmoituksen sekä lomakkeet 2C ja 5 samassa järjestyksessä kuin OmaVerossa. Luvun vieressä on kopiointipainike, joka kopioi luvun OmaVeron muodossa (esimerkiksi 1092,96). Luvun avaaminen näyttää kirjaukset, joista se koostuu.

Kun olet jättänyt ilmoituksen, liitä sen PDF lomakkeelle painikkeella **Liitä jätetty ilmoitus…**. Vuosilta ennen Kirjanpainajaa voi säilyttää vanhat aineistot sellaisinaan.

## Vuoden päättäminen ja lukitus

**Vuoden päättäminen** -sivu kokoaa vuoden viimeiset vaiheet:

1. **Tarkistukset.** **Tarkista nämä** -huomautukset, kuten puuttuva kuitti tai kategoria, pitää korjata tai kuitata. Kuittaukseen kirjoitetaan aina syy. **Tiedoksi**-kohdat eivät estä lukitusta.
2. **Ilmoitukset.** Onko jätetty ilmoitus liitetty jokaiselle lomakkeelle, jolla on lukuja.
3. **Lukitus.** **Lukitse vuosi…** jäädyttää veroilmoitusten luvut ja tallentaa niille tarkistussumman. Lukitun vuoden kirjauksia ei voi muuttaa.
4. **Varmuuskopio.** Lukitus ottaa heti varmuuskopion.
5. **Vuosiarkisto.** **Tallenna vuosiarkisto…** tallentaa vuoden Excelin, kuitit, liitteet, jätetyt ilmoitukset ja kuittaukset yhdeksi zip-tiedostoksi.

Lukitun vuoden saa auki painikkeella **Avaa lukitus…**. Syy tallentuu muutoslokiin. Säilytä vuosiarkisto vähintään kuusi vuotta verovuoden päättymisestä. Toiminimen kirjanpitokirjat säilytetään kymmenen vuotta.

## iPhone ja iPad

iPhonen ja iPadin Kirjanpainajalla lähetetään kuitteja Macille ja katsotaan lukuja. Se ei muuta kirjanpitoa.

1. Ota Macilla käyttöön **Asetukset → Yleiset → Mobiilisovellus**. Mac kirjoittaa silloin luvut tallennuskansioon.
2. Varmista, että tallennuskansio näkyy puhelimen **Tiedostot**-sovelluksessa. Dropbox, Google Drive ja OneDrive tarvitsevat oman sovelluksensa, joka laitetaan päälle Tiedostot-sovelluksen kohdassa **Selaa → Muokkaa**.
3. Valitse puhelimessa sama tallennuskansio kuin Macilla.

Puhelimen välilehdet:
- **Kuitit**: skannaa kuitti, ota kuva tai valitse tiedosto. Kuitti menee Macin Saapuneisiin. Kytkimellä **Lähetä liitteenä** tiedosto lähetetään liitteeksi olemassa olevaan kirjaukseen.
- **Yleiskatsaus**, **Kirjaukset** ja **Veroilmoitukset**: Macin viimeksi kirjoittamat luvut. Vedä alas hakeaksesi uusimmat.

Dropbox, Google Drive ja OneDrive voivat näyttää puhelimelle vanhaa versiota luvuista. Jos tallennuskansio on muualla kuin iCloud Drivessa, valitse luvuille erillinen iCloud Driven **mobiilikansio** sekä Macilla että puhelimessa.

## Tiedot, varmuuskopiot ja palautus

- **Tietokanta** on Macin omassa sovelluskansiossa, ei pilvessä, joten synkronointi ei voi rikkoa sitä.
- **Kuitit, liitteet, laskujen PDF:t, jätetyt ilmoitukset ja varmuuskopiot** ovat tallennuskansion *Kirjanpainaja*-kansiossa.
- Kirjanpainaja ei lähetä tietoja minnekään. **Vie Exceliin…** tekee valitusta vuodesta tiedoston, jonka voit antaa vaikka kirjanpitäjälle.

Kirjanpainaja varmuuskopioi tietokannan automaattisesti: kerran päivässä, viisi minuuttia muutosten jälkeen, suljettaessa ja aina vuotta lukittaessa. Jokainen varmuuskopio tarkistetaan. Palautus tehdään kohdassa **Asetukset → Varmuuskopiot → Palauta varmuuskopiosta…**, ja ennen palautusta nykyisistä tiedoista otetaan vielä varmuuskopio.

Mitään ei poisteta lopullisesti. Poistetun kirjauksen saa takaisin valinnalla **Näytä poistetut → Palauta**, ja muutokset kirjautuvat muutoslokiin.

Kirjanpainaja ei salaa tietoja itse. Pidä Macissa **FileVault** päällä ja ota tallennuspalvelussa käyttöön kaksivaiheinen tunnistus.

**Uudelle Macille siirtyminen**: asenna Kirjanpainaja, valitse sama tallennuskansio ja palauta uusin varmuuskopio.
