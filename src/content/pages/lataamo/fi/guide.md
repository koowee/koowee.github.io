---
title: "Lataamon ohje: auton yhteys (Volvo, BMW / MINI)"
description: "Näin yhdistät Lataamon Volvoosi tai BMW:hen / MINIin: omat tunnukset valmistajan portaalista ja kirjautuminen sovelluksessa."
---
Auton yhteys on vapaaehtoinen. Lataamo tukee Volvoa sekä BMW:tä ja MINIä ([ohje BMW:lle ja MINIlle alempana](#bmw--mini)). Valitse auto kohdassa **Asetukset → Auton tiedot**. Kun yhteys on päällä, Lataamo lukee auton akun varauksen ja toimintamatkan suoraan autosta ja arvioi niiden avulla, paljonko akkua on jäljellä laturilla ja perillä. Kaikki muu toimii ilman sitä.

Volvo ei vielä tarjoa valmista kirjautumista kolmannen osapuolen sovelluksille, joten jokainen käyttäjä tekee itselleen oman maksuttoman kehittäjäsovelluksen Volvon portaalissa. Se vie noin kymmenen minuuttia, ja sen jälkeen tunnukset toimivat vain omalla Volvo ID:lläsi ja omalla autollasi.

## 1. Kirjaudu Volvon kehittäjäportaaliin

Avaa [developer.volvocars.com](https://developer.volvocars.com) ja kirjaudu samalla Volvo ID:llä, jota käytät Volvo Cars -sovelluksessa. Nimesi näkyy kirjautumisen jälkeen sivun oikeassa reunassa.

## 2. Luo oma sovellus

Napsauta oikeassa yläreunassa omaa nimeäsi. Avautuu sivu **Your API applications**, jossa näkyvät jo tekemäsi sovellukset. Kirjoita sivun alaosan kohtaan **Create new application** sovellukselle nimi, esimerkiksi Lataamo, ja paina **Create**. Portaali antaa sovellukselle **VCC API keyn**.

Painikkeiden nimet voivat muuttua portaalissa. Jos jokin kohta näyttää erilaiselta, etsi sovelluksen asetuksista samat tiedot kuin alla.

## 3. Julkaise sovellus: oikeudet ja paluuosoite

Client ID ja Client Secret syntyvät vasta, kun sovellus julkaistaan. Avaa sovelluksesi nuolesta ja paina **Publish**. Lomakkeessa on kolme osaa. Kirjoita tekstikentät englanniksi.

**Creator information** (näkyy vain Volvolle):
- **Contact name, Contact email, Contact phone number:** omat tietosi
- **Legal responsibility:** oma nimesi
- **Business purpose:** esimerkiksi `Personal use: show my own car's battery level and range in the Lataamo app when planning charging stops.`

**Technical configuration:**
- **Scopes:** `openid` on valittu valmiiksi. Avaa **Energy API** ja valitse `energy:state:read` (akun varaus ja toimintamatka). Avaa **Connected Vehicle API** ja valitse `conve:vehicle_relation` (tilisi autot). Lataamo pyytää lisäksi pidempää kirjautumista (`offline_access`), mutta sitä ei valita portaalissa.
- **Redirect URI:** `https://koowee.github.io/lataamo/volvo/` (tarkalleen näin, lopussa kauttaviiva)

**Public information:**
- **Application name:** esimerkiksi Lataamo
- **Purpose:** esimerkiksi `Shows the car's battery level and range in Lataamo to estimate the charge left at chargers and at the destination.`
- **Terms and conditions URL:** `https://koowee.github.io/lataamo/privacy/`

Paina **View summary** ja lähetä pyyntö. Julkaisu tulee voimaan heti. Sen jälkeen sovelluksen tiedoissa näkyvät **Client ID** ja **Client Secret**. Pidä ne tallessa, äläkä jaa niitä kenellekään.

Vanhat ennen vuotta 2026 tehdyt sovellukset, joiden Client ID alkaa `dc-`, toimivat 31.1.2027 asti. Sen jälkeen tarvitaan uusi sovellus ja uudet tunnukset.

## 4. Syötä avaimet Lataamoon

1. Avaa Lataamossa **Asetukset → Auton tiedot**, valitse **Volvo** ja avaa **Volvon tunnukset**.
2. Liitä **VCC API key**, **Client ID** ja **Client Secret** ja paina **Tallenna**.
3. Paina **Kirjaudu Volvoon**. Volvon kirjautumissivu aukeaa. Kirjaudu ja hyväksy oikeudet.
4. Sovellus palaa Lataamoon, ja Lähellä-näkymän ylimpänä näkyy auton varaus ja toimintamatka.

Avaimet ja kirjautuminen tallennetaan vain puhelimen avainnippuun. Ne eivät lähde muualle kuin Volvolle.

## Jos jokin ei toimi

- **Kirjautumisen jälkeen jäät sivulle koowee.github.io:** paina sivulla **Palaa Lataamoon**.
- **Volvo sanoo "invalid redirect_uri":** tarkista, että paluuosoite on portaalissa täsmälleen `https://koowee.github.io/lataamo/volvo/`.
- **Volvo sanoo "invalid scope":** tarkista, että molemmat oikeudet on valittu. Jos Volvo ei salli pidempää kirjautumista (`offline_access`), Lataamo kirjautuu ilman sitä, mutta kirjautuminen vanhenee nopeammin. Volvon tunnukset -näkymä kertoo, kuinka kauan kirjautuminen on voimassa.
- **Lataamo pyytää kirjautumaan Volvoon uudelleen:** Volvo vaatii uuden kirjautumisen ajoittain. Paina oranssia riviä ja kirjaudu uudelleen.
- **Auto ei näy:** varmista, että auto on liitetty samaan Volvo ID:hen Volvo Cars -sovelluksessa.

Volvo-yhteyden voi poistaa milloin tahansa: **Asetukset → Auton tiedot → Volvon tunnukset → Kirjaudu ulos**.

## BMW / MINI

BMW ja MINI antavat omistajalle auton tiedot EU:n datasäädöksen mukaisesti BMW CarData -palvelun kautta. Jokainen omistaja tekee itselleen oman maksuttoman tunnuksen (Client ID). Salaisia avaimia tai paluuosoitetta ei tarvita.

### 1. Luo CarData Client ID

1. Kirjaudu tietokoneella MyBMW-verkkosivulle (MINI: MyMINI) samalla tunnuksella, jota käytät My BMW -sovelluksessa.
2. Avaa autosi ja sieltä **BMW CarData** (MINI: **MINI CarData**).
3. Paina **Create CarData Client**. Sivu näyttää **Client ID:n**.
4. Valitse **Request access to CarData API**. CarData Streamia Lataamo ei tarvitse.
5. Odota noin minuutti ennen kuin kirjaudut Lataamossa. Jos valinta antaa virheen, lataa sivu uudelleen ja yritä uudestaan.

Älä paina portaalin omaa **Authenticate device** -painiketta. Lataamo antaa koodin itse.

**Jos CarData-kohtaa ei näy suomalaisella sivulla:** kirjaudu samalla tunnuksella brittiläiselle sivulle [bmw.co.uk/en-gb/mybmw/vehicle-overview](https://www.bmw.co.uk/en-gb/mybmw/vehicle-overview) (MINI: [mini.co.uk/en-gb/mymini/vehicle-overview](https://www.mini.co.uk/en-gb/mymini/vehicle-overview)) ja luo Client ID siellä. Se toimii koko tilillä.

Tietoja voi lukea vain auton päähaltija (Primary user), ja autossa pitää olla ConnectedDrive käytössä.

### 2. Kirjaudu Lataamossa

1. Avaa **Asetukset → Auton tiedot**, valitse **BMW / MINI** ja avaa **BMW / MINI -tunnukset**.
2. Liitä **Client ID** ja paina **Tallenna**.
3. Paina **Kirjaudu BMW:hen**. Lataamo näyttää koodin.
4. Paina **Avaa BMW:n sivu**, kirjaudu ja hyväksy koodi. Lataamo huomaa hyväksynnän itse, ja Lähellä-näkymän ylimpänä näkyy auton varaus ja toimintamatka.

### Kirjautuminen ja päiväraja

- Kirjautuminen on voimassa kaksi viikkoa viimeisestä käytöstä. Jos Lataamoa ei käytä kahteen viikkoon, BMW pyytää kirjautumaan uudelleen.
- BMW sallii 50 tietohakua vuorokaudessa koko tilille. Lataamo käyttää niistä oletuksena enintään 25 ja hakee tiedot, kun sovellus avataan tai reittiä suunnitellaan, enintään 20 minuutin välein. Määrää voi muuttaa BMW / MINI -tunnukset-näkymässä. Jätä tilaa, jos luet BMW:n tietoja myös esimerkiksi Home Assistantissa.
- Laskuri nollautuu UTC-keskiyöllä eli kello 2 Suomen talviaikaa (kesäaikaan kello 3).

BMW-yhteyden voi poistaa milloin tahansa: **BMW / MINI -tunnukset → Kirjaudu ulos**. Client ID:n voi poistaa myös BMW:n CarData-sivulla.
