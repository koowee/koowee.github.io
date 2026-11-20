---
title: "Lataamo guide: Volvo connection"
description: "How to connect Lataamo to your Volvo: your own keys from Volvo's developer portal, the permissions, the redirect address and signing in in the app."
---
The Volvo connection is optional. When it is on, Lataamo reads your car's battery level and range straight from the car and uses them to estimate how much charge you'll have at a charger and at your destination. Everything else works without it.

Volvo doesn't yet offer a ready-made sign-in for third-party apps, so each user creates their own free developer app in Volvo's portal. It takes about ten minutes, and the keys then work only with your own Volvo ID and your own car.

## 1. Sign in to Volvo's developer portal

Open [developer.volvocars.com](https://developer.volvocars.com) and sign in with the same Volvo ID you use in the Volvo Cars app. Your name shows on the right of the page once you're signed in.

## 2. Create your own app

Click your name at the top right. The **Your API applications** page opens and lists any apps you've made. Under **Create new application** at the bottom of the page, type a name for the app, for example Lataamo, and tap **Create**. The portal gives the app a **VCC API key**.

The portal's button names may change. If something looks different, look for the same details as below in the app's settings.

## 3. Publish the app: permissions and redirect address

The Client ID and Client Secret are created only when the app is published. Open your app with its arrow and tap **Publish**. The form has three parts.

**Creator information** (seen only by Volvo):
- **Contact name, Contact email, Contact phone number:** your own details
- **Legal responsibility:** your own name
- **Business purpose:** for example `Personal use: show my own car's battery level and range in the Lataamo app when planning charging stops.`

**Technical configuration:**
- **Scopes:** `openid` is already selected. Open **Energy API** and select `energy:state:read` (battery level and range). Open **Connected Vehicle API** and select `conve:vehicle_relation` (the cars on your account). Lataamo also asks for a longer sign-in (`offline_access`), but you don't select it in the portal.
- **Redirect URI:** `https://koowee.github.io/lataamo/volvo/` (exactly like this, with the slash at the end)

**Public information:**
- **Application name:** for example Lataamo
- **Purpose:** for example `Shows the car's battery level and range in Lataamo to estimate the charge left at chargers and at the destination.`
- **Terms and conditions URL:** `https://koowee.github.io/lataamo/privacy/`

Tap **View summary** and send the request. Publishing takes effect right away. After that the app's details show the **Client ID** and **Client Secret**. Keep them safe and don't share them with anyone.

Apps made before 2026, whose Client ID starts with `dc-`, work until 31 January 2027. After that you need a new app and new keys.

## 4. Enter the keys in Lataamo

1. In Lataamo, open **Asetukset → Volvo** (Settings → Volvo).
2. Paste the **VCC API key**, **Client ID** and **Client Secret** and tap **Tallenna** (Save).
3. Tap **Kirjaudu Volvoon** (Sign in to Volvo). Volvo's sign-in page opens. Sign in and accept the permissions.
4. The app returns to Lataamo, and the top of the Lähellä (Nearby) screen shows the car's charge and range.

The keys and the sign-in are stored only in the phone's keychain. They go nowhere but to Volvo.

## If something doesn't work

- **You're left on a koowee.github.io page after signing in:** tap **Palaa Lataamoon** (Back to Lataamo) on that page.
- **Volvo says "invalid redirect_uri":** check that the redirect address in the portal is exactly `https://koowee.github.io/lataamo/volvo/`.
- **Volvo says "invalid scope":** check that both scopes are selected. If Volvo doesn't allow `offline_access`, Lataamo signs in without it, but the sign-in expires sooner. Settings → Volvo shows how long it lasts.
- **Lataamo asks you to sign in to Volvo again:** Volvo asks for a new sign-in from time to time. Tap the orange row and sign in again.
- **The car doesn't show:** make sure the car is linked to the same Volvo ID in the Volvo Cars app.

You can remove the Volvo connection at any time: **Asetukset → Volvo → Kirjaudu ulos** (Sign out).
