---
title: "Cadence support"
description: "Getting started with Cadence, answers to common questions and how to get help."
---
## Getting started

1. On the **Bikes** tab, tap **+** and give the bike a name and a type. Cadence adds typical parts with suggested service intervals, which you can edit.
2. Choose where your rides come from under **Settings → Rides → Ride source**: Apple Health or Strava.
3. When you service or replace a part, open it and choose **Mark as serviced…** or **Replace with new…** on its page.

The [full guide](/cadence/guide/) explains every part of the app. It is the same guide as in the app under **Settings → Guide**.

## Questions and answers

<details>
<summary>Should I use Apple Health or Strava?</summary>

Apple Health is the simplest choice and needs no setup beyond allowing Cadence to read your workouts. Health doesn't know which bike you rode, so new rides go to the **Default bike** and you can move a ride to another bike in the ride list. Strava tells Cadence which bike each ride was on, but it needs your own Strava API keys. You can use one source at a time and change it later without losing earlier rides.
</details>

<details>
<summary>Why does Strava need my own API keys?</summary>

Cadence talks to Strava directly from your phone with an API application you create in your own Strava account, so there is no server of ours in between. Making the keys takes a few minutes: see [How to set up Strava](/cadence/guide/#strava). Strava may require a paid subscription to use your own API keys. The keys stay in your phone's keychain.
</details>

<details>
<summary>My bike isn't new. Why does wear start from zero?</summary>

Cadence only knows the rides it has imported. Enter the bike's earlier kilometres under **Ridden before** when you add the bike, or later on the **Edit bike** page, and the parts' wear starts from the right point. For a bike added from Strava, Cadence asks whether the parts are original. If they are, their wear counts all the bike's rides.
</details>

<details>
<summary>Why don't I get any reminders?</summary>

Allow notifications for Cadence in the iOS Settings app, and check that at least one limit is on under **Settings → Service limits**. A bike's own settings can also turn limits off for that bike, and an archived bike sends no reminders.
</details>

<details>
<summary>Why are the ride hours from Health more than in Strava?</summary>

Ride hours from Health are the workout's duration as your watch or bike computer's app saves it in Health. If that duration includes pauses, it is longer than Strava's moving time.
</details>

<details>
<summary>My rides don't come in from Health. What should I check?</summary>

Open **Health → your profile picture → Privacy → Apps**. First make sure your watch's app is allowed to write workouts, then that Cadence is allowed to read them. The [guide](/cadence/guide/#apple-health) shows how to send rides to Health from Apple Watch, Garmin, Suunto and COROS.
</details>

<details>
<summary>A ride went to the wrong bike. How do I fix it?</summary>

Change the bike from the bike menu on the ride's row, or on the ride's page. The parts' wear is counted again at once. New rides also gather on the **Check new rides** row so you can review them.
</details>

<details>
<summary>How do I move my data to a new phone?</summary>

Under **Settings**, tap **Make a backup** and save the file to Files or iCloud Drive. On the new phone, tap **Import backup**. Importing replaces all Cadence data on that phone, and Cadence makes a safety copy first. The backup doesn't include your Strava or Bosch keys, so connect those again.
</details>

<details>
<summary>Does Cadence work on iPad?</summary>

Yes. Cadence works on iPhone and iPad. The data isn't synced between devices: each device keeps its own data. You can copy everything from one device to another with a backup.
</details>

<details>
<summary>Which languages does Cadence support?</summary>

English and Finnish. The app follows your device's language. Dates and numbers follow your region, and distances are in kilometres.
</details>

<details>
<summary>Why can't I delete a bike or a replacement?</summary>

A bike with rides, services or replaced parts can only be archived, so your statistics and costs stay correct. A replacement can't be deleted, because the parts' history rests on it.
</details>

<details>
<summary>Can I connect my Bosch eBike?</summary>

Yes. Under **Settings → Bosch eBike** you can connect Bosch's data service with your own Client ID. Then link the Bosch bike to a Cadence bike on the bike's page, and the bike page shows the odometer, motor hours and battery information.
</details>

<details>
<summary>Does my data leave my phone?</summary>

No data is sent to us: Cadence has no server, account, analytics or ads. Rides are fetched from Strava or read from Health only with your permission. See the [privacy policy](/cadence/privacy/) for details.
</details>

<details>
<summary>How do I contact you?</summary>

Send an email to the address below. If something isn't working, please mention your device, its iOS version and what you were doing.
</details>
