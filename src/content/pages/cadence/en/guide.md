---
title: "Cadence guide"
description: "How to use Cadence: bikes and parts, wear and service intervals, services and receipts, rides from Apple Health or Strava, the shopping list, reminders and backups."
---
This guide is the same as the one in the app, under **Settings → Guide**. The buttons are named as they appear in the app.

## Getting started

Cadence keeps track of your bikes' parts and services and tells you when something is due for a service or a swap. Wear is counted from your rides.

### Add bike

On the **Bikes** tab, tap **+**. Give a name and a type and pick the parts: **All**, **None**, or **Copy from another bike**.

If the bike already has kilometres on it, enter them under **Ridden before** when you add the bike, or later on the **Edit bike** page, so the parts' wear starts from the right point. For a bike added from Strava, Cadence asks whether the parts are original. If they are, their wear counts all the bike's rides.

### Bring in your rides

Choose **Settings → Rides → Ride source**: Apple Health or Strava. See [Rides](#rides) for more.

Bikes can come from Strava too. Once Strava is connected, Cadence asks whether to link Strava's bikes to yours or add them as new bikes.

## Bikes and parts

A bike's page shows its parts, next services, costs and history. A part's page shows its service intervals, wear, services and receipts.

### Swapping and moving a part

- **Replace with new…** records the swap: the old part stays in the history and the new one starts from zero.
- **Move…** takes the part to another bike or to **Storage**. Its wear goes with it.
- **Storage** holds parts that are on no bike, such as winter tyres.

### Archive or delete

A bike with rides, services or replaced parts can only be archived, so the statistics stay. An archived bike sends no service reminders. Both are on the **Edit bike** page.

## Wear and service intervals

Each part has one or more service intervals in kilometres, ride hours or time. Whichever limit comes first counts.

These intervals are general starting values. Adjust them to your riding and the maker's guidance.

### Service and check

**Mark as serviced…** starts the interval over. **Measured, OK** pushes it back by a quarter when you have checked the part and it doesn't need a service yet. **Undo** shows for a moment.

If the part's maker is Fox or RockShox, the part's page suggests the maker's intervals.

### Estimate

With enough rides, Cadence estimates from your recent pace when the limit will be reached.

## Services, receipts and warranties

The **+** on the **Services** tab records a service, such as a wash, or a part swap. A service can have parts, a price and a note. If the chosen day has rides, pick whether the service came before or after them.

A replacement can't be deleted, because the parts' history rests on it.

### Receipts

Add a receipt as a photo, a scan or a PDF to a service or straight to a part. Receipts are made small so they take little space.

### Warranty

Give the part its warranty length. Cadence reminds you 30 days before the warranty ends while the part is in use.

## Rides

Rides come from one source at a time: Apple Health or Strava. A new install uses Apple Health. Changing the source keeps earlier rides, and the same ride never comes in twice.

### Apple Health

Your watch or bike computer puts rides into Health from its own app, and Cadence reads them there. Pick a **Default bike** for new rides. Ride hours are the workout's duration as the app puts it in Health. If that includes pauses, the hours can be more than Strava's moving time.

**Rides into Health**, by device:

- **Apple Watch:** Cycling from the Workout app is saved to Health automatically. The route comes along: map and place are shown.
- **Garmin:** Garmin Connect → More → Connected Apps → Apple Health, and allow workouts. The route doesn't come along: no map or place.
- **Suunto:** In the Suunto app's settings, turn on sharing to Apple Health. The route doesn't come along: no map or place.
- **COROS:** COROS app → Profile → Settings → 3rd Party Apps → Data Sync → Apple Health.
- **Strava:** Strava sends to Health only the rides recorded in the Strava app. Rides recorded on a watch are best sent from the watch's own app.
- **Other:** Look for Apple Health or Health in the app's settings and allow workouts.

If rides don't show up, open **Health → profile picture → Privacy → Apps**. First choose your watch's app and allow workouts, then Cadence and allow reading.

### Strava

Strava connects with your own API keys. Strava also says which bike a ride was on, so the ride wears the right bike's parts.

**How to set up Strava:**

1. Open [strava.com/settings/api](https://www.strava.com/settings/api) and sign in.
2. Create an app. You can make up the name and website, but the name may not contain the word "Strava".
3. Type `localhost` in the **Authorization Callback Domain** field.
4. Copy the **Client ID** and **Client Secret** into Cadence and tap **Save keys**.
5. Tap **Connect Strava** and approve.

Using your own API keys may need a paid Strava subscription. The keys are kept only in this phone's keychain and don't go into backups.

### A ride's bike and review

You can change a ride's bike in the list or on the ride's page. New rides gather on the **Check new rides** row, so a ride on the wrong bike is easy to move.

You can also add a ride by hand with **+**. A ride added by hand can be edited and deleted.

### Summary and Year in review

**Summary** shows the kilometres, time and costs per year, and **By bike** compares your bikes. **Year in review** opens from Summary from 1 December, and any time for past years.

## Shopping list

A worn part joins the shopping list by itself when its replacement interval is at 80%. Add other parts and items, like chain oil, with **+**.

Swipe a row right to mark it bought. Swiping left shows **Remove from list** and **Open link**. **Undo** takes a removal back for a moment.

A part's page can hold a buy link; another item's link goes in its notes. **Share list** sends the list with its links, for example as a message.

## Reminders, widget and background refresh

Cadence reminds you when a service is coming up. Under **Settings → Service limits**, choose which limits count: kilometres, ride hours or time. A limit that is off doesn't show in wear, reminders, the widget or the shopping list. A bike's own settings override these.

The Home Screen widget shows the nearest services. Tapping it opens the part's page.

Background refresh fetches new rides and updates reminders and the widget while the app is closed. iOS decides when that happens.

## Backup and spreadsheet export

The backup holds your bikes with their photos, parts, rides, services and receipts. Strava keys are not included, so on a new phone you connect Strava again.

Restoring a backup replaces all Cadence data on the phone. Cadence first makes a safety copy of the current data. If you picked the wrong file, tap **Restore the data from before the restore** in Settings.

**Export as spreadsheet** makes an Excel file with bikes, parts, services and costs on their own sheets.

## If something doesn't work

### Rides don't come in from Health

Open **Health → your profile picture → Privacy → Apps**. First let your watch's app write workouts, then let Cadence read them.

### Strava doesn't update

If the Rides tab says the Strava connection has expired, connect Strava again in Settings. Pull the ride list down to fetch new rides now.

### A ride is on the wrong bike

Change the bike from the ride row's bike menu. The parts' wear is counted again at once.

### No reminders arrive

Allow Cadence's notifications in iOS Settings and check that at least one limit is on under **Settings → Service limits**.

Still stuck? See the [questions and answers](/cadence/support/) or send an email.
