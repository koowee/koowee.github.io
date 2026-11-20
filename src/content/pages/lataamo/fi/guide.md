---
title: "Lataamon ohje: Volvo-yhteys"
description: "Näin yhdistät Lataamon Volvoosi: omat avaimet Volvon kehittäjäportaalista, oikeudet, paluuosoite ja kirjautuminen sovelluksessa."
---
Volvo-yhteys on vapaaehtoinen. Kun se on päällä, Lataamo lukee auton akun varauksen ja toimintamatkan suoraan autosta ja arvioi niiden avulla, paljonko akkua on jäljellä laturilla ja perillä. Kaikki muu toimii ilman sitä.

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

1. Avaa Lataamossa **Asetukset → Volvo**.
2. Liitä **VCC API key**, **Client ID** ja **Client Secret** ja paina **Tallenna**.
3. Paina **Kirjaudu Volvoon**. Volvon kirjautumissivu aukeaa. Kirjaudu ja hyväksy oikeudet.
4. Sovellus palaa Lataamoon, ja Lähellä-näkymän ylimpänä näkyy auton varaus ja toimintamatka.

Avaimet ja kirjautuminen tallennetaan vain puhelimen avainnippuun. Ne eivät lähde muualle kuin Volvolle.

## Jos jokin ei toimi

- **Kirjautumisen jälkeen jäät sivulle koowee.github.io:** paina sivulla **Palaa Lataamoon**.
- **Volvo sanoo "invalid redirect_uri":** tarkista, että paluuosoite on portaalissa täsmälleen `https://koowee.github.io/lataamo/volvo/`.
- **Volvo sanoo "invalid scope":** tarkista, että molemmat oikeudet on valittu. Jos Volvo ei salli pidempää kirjautumista (`offline_access`), Lataamo kirjautuu ilman sitä, mutta kirjautuminen vanhenee nopeammin. Asetukset → Volvo kertoo, kuinka kauan kirjautuminen on voimassa.
- **Lataamo pyytää kirjautumaan Volvoon uudelleen:** Volvo vaatii uuden kirjautumisen ajoittain. Paina oranssia riviä ja kirjaudu uudelleen.
- **Auto ei näy:** varmista, että auto on liitetty samaan Volvo ID:hen Volvo Cars -sovelluksessa.

Volvo-yhteyden voi poistaa milloin tahansa: **Asetukset → Volvo → Kirjaudu ulos**.
