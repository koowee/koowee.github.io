---
title: "Braining support"
description: "Getting started with Braining, answers to common questions and how to get help."
---
## Getting started

1. Install Braining on your iPhone or iPad and on your Mac, and sign in to the same iCloud account on all of them. Braining needs no account of its own.
2. Open Braining on your Mac. The Mac app transcribes recordings while it is open. On a newer iPhone or iPad you can instead turn on transcription on the device itself (see below).
3. Record a thought. By default the recording travels to your Mac through iCloud, the Mac transcribes it, and the note appears on all your devices.

## Frequently asked questions

<details>
<summary>Why hasn't my recording become a note yet?</summary>

Unless you have turned on transcription on your iPhone, transcription happens in the Braining Mac app, so Braining needs to be open on a Mac signed in to the same iCloud account. If it is turned on, the iPhone transcribes only while Braining is open, so a recording made from the lock screen waits until you next open the app, or until the Mac takes it. iCloud can also take a moment to sync. On the Mac, **Äänijono** (Audio queue) shows what is happening to each recording, and **Yritä uudelleen** (Try again) retries.
</details>

<details>
<summary>Does the iPhone transcribe by itself?</summary>

Only if you turn it on. On newer iPhones and iPads, Braining offers **Litteroi iPhonella** (Transcribe on the iPhone) once. You can turn it on or off later with **Litteroi tällä laitteella** (Transcribe on this device) in the sync menu. Older devices do not show the option.

When it is on, the device downloads a speech model of 627 MB once, over Wi-Fi only, and transcribes its own recordings on the device while Braining is open. Recordings made while the phone is locked wait until you next open the app. The Mac still transcribes anything the iPhone has not got to, and the two never transcribe the same recording twice. Until the model has downloaded, recordings wait for the Mac as before. Transcription on the device needs iCloud sync to be on, because your devices agree through iCloud on which of them transcribes a recording.

The iPhone keeps a recording's own audio until it is transcribed, and at most 30 days. Each recording remembers which device and speech model transcribed it.

If you turn the setting off, recordings the iPhone was working on go back to the queue for the Mac, and Braining asks whether to delete the speech model (627 MB) from the device.
</details>

<details>
<summary>Is my speech sent to the cloud for transcription?</summary>

No. Transcription happens on a device of yours, the Mac or, if you turned it on, the iPhone or iPad, with WhisperKit, and no third-party service sees your speech. The first time, the device downloads the speech model, which needs an internet connection (627 MB on an iPhone or iPad, over Wi-Fi only). Recordings and notes travel between your devices in your own iCloud. A recording is deleted 30 days after it is transcribed.
</details>

<details>
<summary>Which language does Braining understand?</summary>

Transcription is set up for Finnish. Check the text after transcription, especially names and numbers.
</details>

<details>
<summary>Can I write notes without speaking?</summary>

Yes. You can write a new note, or edit an existing one, on your iPhone, iPad or Mac. A note needs a title.
</details>

<details>
<summary>Can I format text?</summary>

Yes. Notes are Markdown. On iPhone and iPad, the **Aa** menu above the keyboard has bold, italic, strikethrough, heading, bulleted list and numbered list, and the button next to it adds a checkbox. On the Mac, the same commands are in the **Muotoile** (Format) menu and in the buttons above the editor, with the shortcuts ⌘B, ⌘I, ⇧⌘X, ⌥⌘2, ⇧⌘8, ⇧⌘7 and ⇧⌘L. The same command again removes the formatting. Formatting shows in the text as marks, such as `**bold**` or `- [ ] task`.
</details>

<details>
<summary>Can I add pictures to a note?</summary>

Yes, up to 20 per note. On iPhone and iPad, tap the picture button above the keyboard or **Lisää kuva** (Add picture) below the text, and choose the camera, your photos or files. With **Piirrä** (Draw) you can draw on an empty page, and the drawing is saved to the note as a picture. You can also paste a copied image. On the Mac, drag an image into the editor, paste it with ⌘V or choose **Muotoile → Lisää kuva…** (⇧⌘I).

Pictures show as thumbnails below the text. Tap or click one to see it large, and remove it with a long press, or a Control-click on the Mac. Pictures are saved when you save the note, and sync to your other devices. Braining shrinks them (longest side 2048 pixels) and removes location data before saving.
</details>

<details>
<summary>Can I get a deleted note back?</summary>

No. Deleting removes the note and its pictures from all your devices and iCloud, and it cannot be undone. Braining tells you before the delete how many pictures go with it. If you only want to put a note aside, archive it: you can bring it back from the Archive.
</details>

<details>
<summary>Can I record on the Mac?</summary>

Yes. Click **Äänitä** in the toolbar or press ⌥⌘R, and stop with the same button or ⌥⌘R again. The Mac transcribes the recording itself, and the note syncs to your other devices like one made on the iPhone. The first time, macOS asks for permission to use the microphone. If you have denied it, allow it in System Settings → Privacy & Security → Microphone.

If you quit the app or close its main window, the Mac goes to sleep or the microphone goes away (for example AirPods back in their case), recording stops and what you said so far is saved. If the app crashes mid-recording, the recording is rescued the next time it starts. Without iCloud sync the Mac saves the recording but transcribes it only once sync is on.
</details>

<details>
<summary>Do reminders arrive on every device?</summary>

Yes, as long as the device gets the change before the reminder time. By default each device schedules the reminders itself once the notes have synced to it. The surest way is the **Muistutukset Muistutukset-appiin** (Reminders through the Reminders app) setting, described below. When you remove or move a reminder, it goes away on your other devices too.
</details>

<details>
<summary>A reminder doesn't reach my other device</summary>

By default each device schedules a reminder only after Braining has read the note. The iPhone wakes Braining in the background when a change arrives, but iOS decides whether it does. It does not wake an app you have swiped away, and it limits background updates, for example in Low Power Mode. In those cases the reminder is scheduled only when you next open Braining.

The surer way is to turn on **Muistutukset Muistutukset-appiin**. On iPhone and iPad it is in the ⋯ menu of the notes list, on the Mac in the **Muistiinpanot** menu in the menu bar. The setting is the same on all your devices. When it is on, Braining adds your reminders to a **Braining** list in the Reminders app in iCloud, and they alert on all your devices (Apple Watch too) even when Braining is not open. Braining's own notifications are then switched off. Braining asks for permission to use Reminders when you turn it on, and each device has to allow it. A device without permission shows a warning and alerts with Braining's own notifications, so there a reminder alerts twice: the Reminders app alerts too. A device where sync is off does the same. A device where Braining has not run since the setting was turned on keeps the Braining notifications it had already scheduled until Braining runs there.

Changes go only from Braining to Reminders. If you edit a reminder in the Reminders app, the note does not change. The link in the reminder opens the note in Braining. When you turn the setting off, Braining removes the reminders it added and schedules its own notifications again.
</details>

<details>
<summary>Can I snooze a reminder?</summary>

Yes. When a reminder arrives, long-press the notification on iPhone or iPad, or choose Options on the Mac, and pick 15 min, 1 h or Huomenna 8.00 (tomorrow at 8.00). You don't need to open the app. The note's reminder time changes to the new time, and the change syncs to your other devices.
</details>

<details>
<summary>How do I join the beta?</summary>

Braining is in open beta before its App Store release. Install the free [TestFlight](https://apps.apple.com/app/testflight/id899247664) app from the App Store on your iPhone and your Mac, then open the [beta link](https://testflight.apple.com/join/NVhBfxAf) on each of them. Updates to the test version arrive through TestFlight. To send feedback, take a screenshot in the app and choose Share Beta Feedback, or send an email to the address below.
</details>

<details>
<summary>Do I need an account?</summary>

No. Braining has no accounts and no sign-in. It only needs the same iCloud account on your devices.
</details>

<details>
<summary>How do I get my notes out of Braining?</summary>

Choose **Vie Markdownina** (Export as Markdown). Braining saves each note as an ordinary Markdown file in a folder you pick, and they open in any text editor. A note's pictures are saved as JPEG files in an `assets` folder, linked at the end of the note.
</details>

<details>
<summary>Can I use Braining without syncing?</summary>

Yes. In the settings, choose **Pidä vain tällä laitteella** (Keep only on this device), and your notes stay on that device. **Ota synkronointi käyttöön** (Turn on sync) sends them to iCloud again.
</details>

<details>
<summary>How do I contact you?</summary>

Send an email to the address below. Please mention your device and system version if something is not working.
</details>
