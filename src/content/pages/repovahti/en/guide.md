---
title: "Repovahti guide"
description: "How to read Repovahti's estimate: tonight, the good window, the hourly table, how the estimate is computed, the Right now readings, space weather, notifications, widgets and the sighting log, plus an aurora guide for going out."
---
This guide matches the one in the app, under **Settings → Help**. The app is in English and Finnish and follows your iPhone's language.

## Getting started

Repovahti estimates, hour by hour, how good the chances are of seeing the aurora at a place you choose. The estimate combines space weather, cloud cover, darkness and moonlight.

### Choose a place

On the **Forecast** tab, tap the magnifying glass. Search by name, use your current location or pick one of the suggested aurora spots.

### Favourites

Star a place to make it a favourite. Favourites get notifications, and the **Favourites** tab shows their night at a glance. Tap a favourite to open its forecast.

On iPad your favourites and the chosen place's forecast sit side by side. When the iPad is on its side, the **Forecast** tab splits into two columns.

### Updates

The forecast refreshes every 15 minutes while the screen is open. Pull down to refresh it now.

### Guide

The **Guide** tab has short articles about the aurora, the solar wind, watching, taking photos with a phone and dressing for the cold. The same texts are at the end of this page under [Aurora guide](#aurora-guide).

## Reading the estimate

The percentage tells how good the conditions are for seeing the aurora in that hour:

| Estimate | Word |
|---|---|
| 50 % or more | Good chance |
| 25–49 % | Moderate chance |
| 5–24 % | Small chance |
| under 5 % | Unlikely |

The estimate is a guide, not a statistical probability and not a promise. The aurora can surprise in both directions.

### Tonight

**Best time** is the night's best hour. **Good window** means the hours at or above your alert threshold, the same window as in the notifications. If the good window is just that one best hour, the card says it once.

"Tonight" moves on to the coming night at 4 am local time. After that the card still shows **Rest of the night** if some of the night is left.

When clouds take a clear share of tonight's chance, the app checks the cloud forecast 30 and 60 km away in eight directions. If somewhere has a clearly better chance, the card shows for example *Clearer 30 km north: 55% at 22–01*. Tap it for driving directions in Maps. The search works in the Nordic countries, which the Finnish Meteorological Institute's forecast covers.

### Next nights

Each night has its own strip with its hours from 6 pm to 6 am. Each square is coloured by that hour's estimate, in the same colours as the percentages, and the night's best hour is outlined. An empty square is an hour that has passed or is light. A square with a dashed outline is an hour the hourly forecast does not reach yet, and the card says when the forecast ends.

### Next 24 hours

In the chart, the bars are the hourly estimate and the dashed line is the cloud cover. The green dashed line is your alert threshold and the vertical line is now.

### Hourly table

- **Clouds** is total cloud cover. **High cloud** means the cloud is mostly thin high cloud, which hides less.
- **Kp** measures the disturbance of the Earth's magnetic field on a scale of 0–9: the higher it is, the further south the aurora can be seen. A star (\*) means the Kp comes from the 27-day outlook and is less precise. A lightning bolt (⚡︎) means a live measurement is part of the estimate.
- In the **Darkness** column, a starry sky means dark, a sunset twilight and a sun daylight. A moon in the **Moon** column means a bright moon is up, and a dash means the moon doesn't interfere.

## How the estimate is computed

Four factors are computed for each hour, and the estimate is their product: activity, clear sky, darkness and moonlight.

- **Activity** comes from NOAA's Kp forecast and how close the place is to the auroral oval. For the current and next hour it also uses the R-index of the nearest Finnish Meteorological Institute magnetometer, if one is within 300 km, and NOAA's real-time OVATION model. A southward solar wind Bz raises the Kp of these hours.
- **Clear sky** is 100 % minus cloud cover from the Finnish Meteorological Institute's forecast, which reaches about 9 days ahead and covers the Nordic countries and nearby areas (farther away 50 % cloud is assumed). Cloud is counted by layer: the largest of low, middle and half of high cloud, at most the total, because thin high cloud hides less.
- **Darkness** comes from the Sun's elevation: it is fully dark when the Sun is more than 12 degrees below the horizon.
- **Moonlight**: a bright moon hides a faint aurora. Moonlight is computed from the moon's phase and elevation, and it lowers the estimate by up to 30 %, most when activity is low.

The model is tuned for Finnish Lapland. Far from the Nordic countries it is rougher.

## Right now

The **Right now** card shows the R-index of the nearest Finnish Meteorological Institute magnetometer, which tells how disturbed the magnetic field is now (if a station is within 300 km), and the aurora strength at the place from NOAA's OVATION model. The R-index bar marks the station's own limits for moderate and high activity.

### Aurora map

The map on the card shows the aurora oval from NOAA's OVATION model about 30–90 minutes ahead, as a green glow: the brighter the green, the likelier the aurora. The pin is the chosen place. Tap to open the map full screen, where you can pan and zoom. The model leaves out clouds and daylight, so it is not a forecast for the whole night.

### Solar wind

The solar wind values come from NOAA's measurements between the Earth and the Sun. When Bz points south (below −5 nT), the aurora often strengthens about an hour later. The spacecraft is about 1.5 million km away, so the card gives the time, worked out from the speed, when the measured wind reaches the Earth. The curve shows Bz over the last two hours, with a dashed line at −5 nT. The dotted line is the lowest possible Bz, the total field strength (Bt) with a minus sign: Bz can turn south at most that far. When the 15-minute mean Bz is below −5 nT, it raises the Kp of the current and the next hour by one, below −10 nT by two and below −15 nT by three. The hour then gets a lightning mark (⚡︎). A northward Bz never lowers the estimate.

### Sky camera

The image comes from the nearest Finnish Meteorological Institute all-sky camera, in Kilpisjärvi, Kevo, Muonio or Helsinki, within 300 km. A camera within 150 km is shown as a round thumbnail. A farther one is shown as a link, because its sky says less about the sky at your place. Tap to see the image full screen, and pinch or double-tap to zoom. The time the image was taken is read from the clock time the camera prints on it. When the image is more than an hour old, a short note is shown instead while it is dark, and an image older than a day is not shown at all.

## Space weather

**Space weather** opens from the solar wind panel of the **Right now** card or from the card's bottom row, which shows Kp now and the largest Kp of the 3-day forecast. The screen shows Kp, the last day of solar wind and the long-range outlook. Pull down to update it.

### Kp: measured and forecast

The bars are Kp's three-hour periods over the last three days and NOAA's forecast for the next three. Solid bars are measured, faded bars are the forecast, and the vertical line is now. The dashed line is Kp 5, where a geomagnetic storm (G1) begins. A bar's colour shows the level in the same colours as the estimate: grey is quiet, green a storm.

### Solar wind, 24 hours

The curves are 10-minute means of the same NOAA measurements as on the Right now card. In the magnetic field chart the solid line is Bz and the dashed line Bt. The green area shows when Bz has pointed south (below 0), which opens the way for the aurora. In the speed chart the dashed lines are at 500 and 700 km/s. A sudden rise in density and speed often means that an eruption from the Sun is arriving.

### Long-range outlook

The 27-day outlook gives only each day's largest Kp, so the figure is the night's best possible moment. Cloud cover is included for about the first 10 days. Grey nights have no cloud forecast and show activity only.

## Alerts

Notifications are sent for favourites when the night's best hour reaches your alert threshold (50 % by default). Change it in **Settings → Alert threshold**.

- The **Advance alert** arrives at the time you choose (12, 14, 16 or 18).
- The **reminder** arrives 15 minutes before the good window starts.

Notifications are scheduled whenever the forecast updates, so they arrive even when the app is not open.

**Tarkista suosikit nyt** (Check favourites now) sends a test notification right away if a favourite's night reaches the limit. It does not change the scheduled notifications.

The Favourites tab says at the top if notifications are off in the app or in iPhone Settings. Tap its button to fix it.

## Widgets

- **Favourites tonight** shows the best hour of tonight for your favourites on the Home Screen.
- **Night at a place** shows one place's night hour by hour. Choose the place when you edit the widget.
- Night at a place is also available on the Lock Screen: the circular widget shows the best estimate, the rectangular one the place, best hour and good window, and the inline one above the clock the place and best hour.

Tapping a widget opens the app on that place. Widgets update on iOS's schedule, so they can lag a little behind the app.

## Sighting log

When the sighting log is on (**Settings → Sighting log**), the tonight card has the buttons **I saw the aurora** and **Didn't see it**. An entry saves the estimate of that moment, and you can add the strength.

**Show log** tells how often you saw the aurora at each estimate, and the entries can be exported as a CSV file. The log stays on your iPhone.

## Night mode

Night mode turns the app dim red. Red light does not spoil your eyes’ adaptation to the dark, which takes 20–30 minutes. Switch it with the moon icon on **Forecast** or in **Settings → Night mode**. Turn the screen brightness down too.

### The whole phone in red

Notifications, the keyboard and other parts drawn by iOS do not turn red. iOS’s colour filter turns the whole phone red: **Settings → Accessibility → Display & Text Size → Colour Filters → Colour Tint**, with Hue and Intensity all the way up. When you choose Colour Filters in **Settings → Accessibility → Accessibility Shortcut**, a triple-click of the side button switches the filter.

## Data sources

- [NOAA SWPC](https://www.swpc.noaa.gov/): Kp forecast, 27-day outlook, OVATION, solar wind
- [Finnish Meteorological Institute and ESA](https://space.fmi.fi/MIRACLE/RWC/): R-index
- [Finnish Meteorological Institute](https://rwc-finland.fmi.fi/index.php/all-sky-camera-images/): all-sky cameras
- [Finnish Meteorological Institute](https://en.ilmatieteenlaitos.fi/open-data-licence): cloud forecast (open data, CC BY 4.0)
- Apple Maps: maps and place search

The app fetches the data straight from these sources. It has no servers of its own and no accounts. Darkness and moonlight are computed on the phone from the place and the time.

In the app, the sources are also under Settings → Data sources.

## If something doesn't work

If the forecast can't be fetched, check your connection and pull down to refresh. If a source doesn't answer, an orange note says so and the estimate is computed from the other sources.

If a place can't be found, try the nearest town or village. Your current location needs location permission in iPhone Settings.

For anything else, see [support](/repovahti/support/) or email [valkama.app@gmail.com](mailto:valkama.app@gmail.com). Mention your iPhone model and iOS version if you can.

## Aurora guide

The same guide is in the app's **Guide** tab.

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

### R-index, Kp and the estimate

The app shows three space weather numbers. They measure different things, and the estimate combines them with the weather.

#### R-index

The R-index tells how much the magnetic field is varying right now at the nearest Finnish Meteorological Institute magnetometer. It is a measurement, not a forecast. Each station has its own limits for moderate and high activity, because the field varies more in the north than in the south. When the R-index rises, the aurora is often already in the sky.

#### Kp

Kp describes the disturbance of the Earth's magnetic field worldwide in three-hour periods on a scale of 0–9. The higher Kp is, the farther south the aurora is seen. In Lapland the aurora can be seen even at a low Kp; southern Finland usually needs at least Kp 4–5. The Kp forecast reaches about three days ahead, and the 27-day forecast is only a rough guide.

#### OVATION

NOAA's OVATION model works out from solar wind measurements how strong the aurora will be around the globe in about 30–90 minutes. The map on the Right now card shows the model's oval.

#### Estimate

The percentage combines activity, clouds, darkness and moonlight. It is not a statistical probability but tells how good the conditions are. How it is calculated is explained under Settings → Help → How the estimate is calculated.

**Remember:** The R-index tells about now, Kp about the coming hours and days. Even high activity doesn't help under clouds.

### Solar wind and Bz

The Sun blows a constant stream of particles, the solar wind, usually at about 300–700 km/s. Spacecraft about 1.5 million km away between the Earth and the Sun measure it before it arrives here. That gives a warning of about 30–90 minutes.

#### Bz

Bz is the north–south part of the solar wind's magnetic field. When Bz points south (negative), the solar wind's field couples with the Earth's and energy gets in. The longer Bz stays clearly south, for example below −5 nT, the more likely the aurora is to strengthen. A northward Bz does not favour the aurora.

#### Bt, speed and density

Bt is the total strength of the field. Bz can turn south at most as far as Bt, so a large Bt means a strong aurora is possible if Bz turns. A fast, dense wind adds to the effect.

#### In practice

When Bz has turned south and stays there, go out or keep the app open. The Right now card tells when the measured wind reaches the Earth.

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
