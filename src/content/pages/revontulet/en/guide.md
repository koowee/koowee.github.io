---
title: "Revontulet guide"
description: "How to read Revontulet's estimate: tonight, the good window, the hourly table, how the estimate is computed, the Juuri nyt readings, notifications, widgets and the sighting log, plus an aurora guide for going out."
---
This guide matches the one in the app, under **Asetukset → Ohje** (Settings → Help). The app is in Finnish for now, so the button names below are given in Finnish with a translation.

## Getting started

Revontulet estimates, hour by hour, how good the chances are of seeing the aurora at a place you choose. The estimate combines space weather, cloud cover, darkness and moonlight.

### Choose a place

On the **Ennuste** (Forecast) tab, tap the magnifying glass. Search by name, use your current location or pick one of the suggested aurora spots.

### Favourites

Star a place to make it a favourite. Favourites get notifications, and the **Suosikit** (Favourites) tab shows their night at a glance. Tap a favourite to open its forecast.

### Updates

The forecast refreshes every 15 minutes while the screen is open. Pull down to refresh it now.

### Opas

The **Opas** (Aurora guide) tab has short articles about the aurora, the solar wind, watching, taking photos with a phone and dressing for the cold. The same texts are at the end of this page under [Aurora guide](#aurora-guide).

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

**Paras aika** (best time) is the night's best hour. **Hyvä aika** (good window) means the hours at or above your notification limit, the same window as in the notifications. If the good window is just that one best hour, the card says it once.

"Tonight" moves on to the coming night at 4 am local time. After that the card still shows **Loppuyö** (rest of the night) if some of the night is left.

### Coming nights

The heat map shows tonight and the next two nights hour by hour from 6 pm to 6 am. Each square is coloured by that hour's estimate, in the same colours as the percentages. An empty square is an hour that has passed, is light or has no forecast.

### Seuraavat 24 tuntia (next 24 hours)

In the chart, the bars are the hourly estimate and the dashed line is the cloud cover. The green dashed line is your notification limit and the vertical line is now.

### Hourly table

- **Pilviä** is total cloud cover. **Yläpilveä** means the cloud is mostly thin high cloud, which hides less.
- **Kp** measures the disturbance of the Earth's magnetic field on a scale of 0–9: the higher it is, the further south the aurora can be seen. A star (\*) means the Kp comes from the 27-day outlook and is less precise. A lightning bolt (⚡︎) means a live measurement is part of the estimate.
- A mark in the **Kuu** (moon) column means a bright moon is up.

### Longer range

The 27-day outlook gives only each day's largest Kp, so the figure is the night's best possible moment. Cloud cover is included for about the first 10 days. Grey nights have no cloud forecast and show activity only.

## How the estimate is computed

Four factors are computed for each hour, and the estimate is their product: activity, clear sky, darkness and moonlight.

- **Activity** comes from NOAA's Kp forecast and how close the place is to the auroral oval. For the current and next hour it also uses the R-index of the nearest Finnish Meteorological Institute magnetometer, if one is within 300 km, and NOAA's real-time OVATION model.
- **Clear sky** is 100 % minus cloud cover from the Finnish Meteorological Institute's forecast, which reaches about 9 days ahead and covers the Nordic countries and nearby areas (farther away 50 % cloud is assumed). Cloud is counted by layer: the largest of low, middle and half of high cloud, at most the total, because thin high cloud hides less.
- **Darkness** comes from the Sun's elevation: it is fully dark when the Sun is more than 12 degrees below the horizon.
- **Moonlight**: a bright moon hides a faint aurora. Moonlight is computed from the moon's phase and elevation, and it lowers the estimate by up to 30 %, most when activity is low.

The model is tuned for Finnish Lapland. Far from the Nordic countries it is rougher.

## Juuri nyt (right now)

The **Juuri nyt** card shows the R-index of the nearest Finnish Meteorological Institute magnetometer, which tells how disturbed the magnetic field is now (if a station is within 300 km), and the aurora strength at the place from NOAA's OVATION model. The R-index bar marks the station's own limits for moderate and high activity.

### Aurora map

The map on the card shows the aurora oval from NOAA's OVATION model about 30–90 minutes ahead, as a green glow: the brighter the green, the likelier the aurora. The pin is the chosen place. Tap to open the map full screen, where you can pan and zoom. The model leaves out clouds and daylight, so it is not a forecast for the whole night.

### Solar wind

The solar wind values come from NOAA's measurements between the Earth and the Sun. When Bz points south (below −5 nT), the aurora often strengthens about an hour later. The spacecraft is about 1.5 million km away, so the card gives the time, worked out from the speed, when the measured wind reaches the Earth. The curve shows Bz over the last two hours, with a dashed line at −5 nT. The dotted line is the lowest possible Bz, the total field strength (Bt) with a minus sign: Bz can turn south at most that far. The solar wind is shown for information only and does not change the estimate.

### Sky camera

The image comes from the nearest Finnish Meteorological Institute all-sky camera, in Kilpisjärvi, Kevo, Muonio or Helsinki, within 300 km. A camera within 150 km is shown as a round thumbnail. A farther one is shown as a link, because its sky says less about the sky at your place. Tap to see the image full screen, and pinch or double-tap to zoom. The time the image was taken is read from the clock time the camera prints on it. When the image is more than an hour old, a short note is shown instead while it is dark, and an image older than a day is not shown at all.

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
- [Finnish Meteorological Institute](https://rwc-finland.fmi.fi/index.php/all-sky-camera-images/): all-sky cameras
- [Finnish Meteorological Institute](https://en.ilmatieteenlaitos.fi/open-data-licence): cloud forecast (open data, CC BY 4.0)
- Apple Maps: maps and place search

The app fetches the data straight from these sources. It has no servers of its own and no accounts. Darkness and moonlight are computed on the phone from the place and the time.

In the app, the sources are also under Asetukset → Tietolähteet (Settings → Data sources).

## If something doesn't work

If the forecast can't be fetched, check your connection and pull down to refresh. If a source doesn't answer, an orange note says so and the estimate is computed from the other sources.

If a place can't be found, try the nearest town or village. Your current location needs location permission in iPhone Settings.

For anything else, see [support](/revontulet/support/) or email [valkama.app@gmail.com](mailto:valkama.app@gmail.com). Mention your iPhone model and iOS version if you can.

## Aurora guide

The same guide is in the app's **Opas** (Aurora guide) tab.

### What the aurora is

The aurora appears when charged particles from the Sun hit the upper atmosphere at about 100–300 km. The Earth's magnetic field steers the particles into a ring around each pole, the auroral oval. Finnish Lapland lies at its southern edge, so the aurora is often seen there.

#### Colours

The colour depends on which gas glows and at what height.

- Green is the most common. Oxygen gives it at about 100–250 km.
- Red comes from oxygen above 250 km and often shows at the top of strong displays.
- Blue and purple come from nitrogen, usually at the lower edge.

#### Eye and camera

A faint aurora often looks like a grey-white cloud to the eye, because the eye can't see colour in the dark. A camera collects light for longer and shows the green. If you can see stars through the "cloud", it may be the aurora.

#### When it happens

The aurora is there in summer too, but you can only see it in the dark. In Lapland it is dark enough from about late August to mid-April. Around the spring and autumn equinoxes there is statistically a little more aurora.

**Remember:** A clear, dark sky matters as much as the activity. A faint aurora looks grey to the eye; the camera sees the green.

### R index, Kp and the estimate

The app shows three space weather numbers. They measure different things, and the estimate combines them with the weather.

#### R index

The R index tells how much the magnetic field is varying right now at the nearest Finnish Meteorological Institute magnetometer. It is a measurement, not a forecast. Each station has its own limits for moderate and high activity, because the field varies more in the north than in the south. When the R index rises, the aurora is often already in the sky.

#### Kp

Kp describes the disturbance of the Earth's magnetic field worldwide in three-hour periods on a scale of 0–9. The higher Kp is, the farther south the aurora is seen. In Lapland the aurora can be seen even at a low Kp; southern Finland usually needs at least Kp 4–5. The Kp forecast reaches about three days ahead, and the 27-day forecast is only a rough guide.

#### OVATION

NOAA's OVATION model works out from solar wind measurements how strong the aurora will be around the globe in about 30–90 minutes. The map on the Juuri nyt (Right now) card shows the model's oval.

#### Estimate

The percentage combines activity, clouds, darkness and moonlight. It is not a statistical probability but tells how good the conditions are. How it is calculated is explained under Asetukset → Ohje → Miten arvio lasketaan (Settings → Help → How the estimate is calculated).

**Remember:** The R index tells about now, Kp about the coming hours and days. Even high activity doesn't help under clouds.

### Solar wind and Bz

The Sun blows a constant stream of particles, the solar wind, usually at about 300–700 km/s. Spacecraft about 1.5 million km away between the Earth and the Sun measure it before it arrives here. That gives a warning of about 30–90 minutes.

#### Bz

Bz is the north–south part of the solar wind's magnetic field. When Bz points south (negative), the solar wind's field couples with the Earth's and energy gets in. The longer Bz stays clearly south, for example below −5 nT, the more likely the aurora is to strengthen. A northward Bz does not favour the aurora.

#### Bt, speed and density

Bt is the total strength of the field. Bz can turn south at most as far as Bt, so a large Bt means a strong aurora is possible if Bz turns. A fast, dense wind adds to the effect.

#### In practice

When Bz has turned south and stays there, go out or keep the app open. The Juuri nyt card tells when the measured wind reaches the Earth.

**Remember:** A southward Bz is the best short-term warning. One moment is not enough; Bz has to stay south.

### When and where to look

#### Time

The aurora is often strongest between 9 pm and 2 am, but it can appear at any time while it is dark. It comes and goes, so watch the sky for half an hour before giving up.

#### Place

Get away from street and yard lights. An open bog, field or fell slope gives a wide view. In town you can still see a strong aurora, but a faint one is lost in the light pollution.

#### Direction

In Lapland the aurora is often right overhead or in every direction. Farther south in Finland it usually shows above the northern horizon, so choose a place with a view to the north.

#### Your eyes

Eyes adapt to the dark in about 15–20 minutes. A bright phone screen undoes that, so dim the screen or use a red headlamp.

#### Moon and clouds

A full moon lights up the sky and hides a faint aurora. You can still see the aurora through a gap in the clouds, so follow the cloud forecast and the nearest sky camera.

**Remember:** A dark place with a view to the north. Give your eyes 15 minutes and the aurora half an hour.

### Taking photos with a phone

Recent iPhones take good aurora photos without a separate camera. The most important thing is to keep the phone still.

#### Support the phone

Use a small tripod or lean the phone on a rock, a railing or a backpack. When the iPhone notices it is still, Night mode allows exposures of up to 30 seconds.

#### Settings

- Turn the flash off.
- Night mode turns on by itself in the dark. The moon icon shows the exposure time, and you can lengthen it with the slider.
- Use the 3-second timer so pressing the button doesn't shake the picture.
- Focus by tapping a distant light or a bright star.
- If the aurora is blown out, shorten the exposure or lower the exposure value.

#### A moving aurora

A fast-moving aurora blurs in a long exposure. Then try a shorter time, for example 1–3 seconds.

#### Battery in the cold

Cold drains the battery fast. Keep the phone in an inner pocket and take it out only to shoot. A power bank is worth bringing.

#### Composition

Include some landscape, trees, a fell or a person. The sky alone rarely looks as good in a photo as it does in person.

**Remember:** Phone steady, flash off and timer on. Keep the phone warm.

### Clothing and safety

On a Lapland winter night it can be −20…−35 °C, and you wait for the aurora standing still. You get cold faster than when moving.

#### Dress in layers

- A wool or technical base layer, no cotton.
- A fleece or wool sweater in between.
- A windproof jacket and trousers on top.
- A hat, a scarf and mittens, which are warmer than gloves.
- Roomy winter boots and wool socks, so the blood keeps flowing.
- Disposable heat packs in mittens and boots help.

#### Safety

- Don't stand on the road or park at the roadside. Find a lay-by or a car park.
- Go onto lake ice only if you know it holds, for example on a marked trail.
- Tell someone where you are going, and take a phone and a headlamp.
- Frostbite often starts on the cheeks, nose or ears as a pale patch. Warm the skin with your palm, don't rub it, and go inside.
- The emergency number in Finland is 112.

**Remember:** Layers, wool and a windproof shell. Stay off the road and off unknown ice.
