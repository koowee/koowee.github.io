---
title: "Revontulet guide"
description: "How to read Revontulet's estimate: tonight, the good window, the hourly table, how the estimate is computed, the Juuri nyt readings, notifications, widgets and the sighting log."
---
This guide matches the one in the app, under **Asetukset → Ohje** (Settings → Guide). The app is in Finnish for now, so the button names below are given in Finnish with a translation.

## Getting started

Revontulet estimates, hour by hour, how good the chances are of seeing the aurora at a place you choose. The estimate combines space weather, cloud cover, darkness and moonlight.

### Choose a place

On the **Ennuste** (Forecast) tab, tap the magnifying glass. Search by name, use your current location or pick one of the suggested aurora spots.

### Favourites

Star a place to make it a favourite. Favourites get notifications, and the **Suosikit** (Favourites) tab shows their night at a glance. Tap a favourite to open its forecast.

### Updates

The forecast refreshes every 15 minutes while the screen is open. Pull down to refresh it now.

## Reading the estimate

The percentage tells how good the conditions are for seeing the aurora in that hour:

| Estimate | Word |
|---|---|
| 50 % or more | Hyvä mahdollisuus (good chance) |
| 25–49 % | Kohtalainen mahdollisuus (moderate chance) |
| 5–24 % | Pieni mahdollisuus (small chance) |
| under 5 % | Epätodennäköistä (unlikely) |

The estimate is a guide, not a statistical probability and not a promise. The aurora can surprise in both directions.

### Tonight

**Paras aika** (best time) is the night's best hour. **Hyvä aika** (good window) means the hours at or above your notification limit, the same window as in the notifications.

"Tonight" moves on to the coming night at 4 am local time. After that the card still shows **Loppuyö** (rest of the night) if some of the night is left.

### Hourly table

- **Pilviä** is total cloud cover. **Yläpilveä** means the cloud is mostly thin high cloud, which hides less.
- **Kp** measures the disturbance of the Earth's magnetic field on a scale of 0–9: the higher it is, the further south the aurora can be seen. A star (\*) means the Kp comes from the 27-day outlook and is less precise. A lightning bolt (⚡︎) means a live measurement is part of the estimate.
- A mark in the **Kuu** (moon) column means a bright moon is up.

### Longer range

The 27-day outlook gives only each day's largest Kp, so the figure is the night's best possible moment. Cloud cover is included for about the first 10 days. Grey nights have no cloud forecast and show activity only.

## How the estimate is computed

Four factors are computed for each hour, and the estimate is their product: activity, clear sky, darkness and moonlight.

- **Activity** comes from NOAA's Kp forecast and how close the place is to the auroral oval. For the current and next hour it also uses the R-index of the nearest Finnish Meteorological Institute magnetometer, if one is within 300 km, and NOAA's real-time OVATION model.
- **Clear sky** is 100 % minus cloud cover (Open-Meteo). Cloud is counted by layer: the largest of low, middle and half of high cloud, at most the total, because thin high cloud hides less.
- **Darkness** comes from the Sun's elevation: it is fully dark when the Sun is more than 12 degrees below the horizon.
- **Moonlight**: a bright moon hides a faint aurora. Moonlight is computed from the moon's phase and elevation, and it lowers the estimate by up to 30 %, most when activity is low.

The model is tuned for Finnish Lapland. Far from the Nordic countries it is rougher.

## Juuri nyt (right now)

The **Juuri nyt** card shows the R-index of the nearest Finnish Meteorological Institute magnetometer, which tells how disturbed the magnetic field is now (if a station is within 300 km), and the aurora strength at the place from NOAA's OVATION model.

### Solar wind

The solar wind values come from NOAA's measurements between the Earth and the Sun. When Bz points south (below −5 nT), the aurora often strengthens about an hour later. The solar wind is shown for information only and does not change the estimate.

### Sky camera

The image comes from the nearest Finnish Meteorological Institute all-sky camera, in Kilpisjärvi or Kevo, within 300 km. A camera within 150 km is shown as a round thumbnail. A farther one is shown as a link, because its sky says less about the sky at your place. Tap to see the image full screen, and pinch or double-tap to zoom. When the image has not changed for more than an hour, a short note is shown instead while it is dark.

## Notifications

Notifications are sent for favourites when the night's best hour reaches your notification limit (50 % by default). Change the limit in **Asetukset → Ilmoitusraja** (Settings → Notification limit).

- The **Ennakkoilmoitus** (preview) arrives at the time you choose (12, 14, 16 or 18).
- The **Muistutus** (reminder) arrives 15 minutes before the good window starts.

Notifications are scheduled whenever the forecast updates, so they arrive even when the app is not open.

**Tarkista suosikit nyt** (Check favourites now) sends a test notification right away if a favourite's night reaches the limit. It does not change the scheduled notifications.

The Favourites tab says at the top if notifications are off in the app or in iPhone Settings. Tap its button to fix it.

## Widgets

- **Suosikit tänä yönä** (Favourites tonight) shows the best hour of tonight for your favourites on the Home Screen.
- **Paikan yö** (Place's night) shows one place's night hour by hour. Choose the place when you edit the widget.
- Paikan yö is also available on the Lock Screen: the circular widget shows the best estimate, the rectangular one the place, best hour and good window, and the inline one above the clock the place and best hour.

Tapping a widget opens the app on that place. Widgets update on iOS's schedule, so they can lag a little behind the app.

## Sighting log

When the sighting log is on (**Asetukset → Havaintoloki**), the tonight card has the buttons **Näin revontulet** (I saw the aurora) and **En nähnyt** (I didn't). An entry saves the estimate of that moment, and you can add the strength.

**Näytä loki** (Show log) tells how often you saw the aurora at each estimate, and the entries can be exported as a CSV file. The log stays on your iPhone.

## Data sources

- [NOAA SWPC](https://www.swpc.noaa.gov/): Kp forecast, 27-day outlook, OVATION, solar wind
- [Finnish Meteorological Institute and ESA](https://space.fmi.fi/MIRACLE/RWC/): R-index
- [Finnish Meteorological Institute](https://space.fmi.fi/MIRACLE/ASC/): all-sky cameras
- [Open-Meteo](https://open-meteo.com/): cloud forecast (CC BY 4.0)

The app fetches the data straight from these sources. It has no servers of its own and no accounts.

## If something doesn't work

If the forecast can't be fetched, check your connection and pull down to refresh. If a source doesn't answer, an orange note says so and the estimate is computed from the other sources.

If a place can't be found, try the nearest town or village. Your current location needs location permission in iPhone Settings.

For anything else, see [support](/revontulet/support/) or email [valkama.app@gmail.com](mailto:valkama.app@gmail.com). Mention your iPhone model and iOS version if you can.
