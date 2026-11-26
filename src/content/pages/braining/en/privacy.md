---
title: "Braining privacy policy"
description: "How Braining handles your data: no accounts and no Braining servers, and your notes and recordings sync through the private database of your own iCloud account."
lastUpdated: 2026-11-26
---
## Summary

Braining has no accounts and no servers of its own. Your notes and recordings are stored on your devices and sync through the private database of your own iCloud account. Transcription happens on your own device: your Mac, or your iPhone or iPad if you turn that on. We never see your data.

## Data the app handles

- Voice recordings you make on your iPhone or Mac. The device asks for microphone access only to record them.
- Your notes: title, text, transcript, category, tags, due date and reminder.
- Pictures and drawings you add to notes. Braining shrinks them and removes location and other metadata before saving. The iPhone asks for camera access only when you take a picture for a note, and from your photo library Braining gets only the pictures you choose.
- Your list of categories.

Reminders use notifications on your device. The app asks for permission the first time you save a reminder, or when the first reminder arrives from another of your devices.

## Where it is stored

- **On your devices:** each device keeps a full local copy, so Braining also works offline. On the iPhone the files are protected by the device's own data protection; on the Mac by the app sandbox and your user account.
- **In iCloud:** notes, categories, pictures and recordings sync through the private CloudKit database of your iCloud account. A note's title, text, transcript and tags, and a category's name, are stored in iCloud as encrypted fields. Apple stores the data under its own terms, and Braining adds no encryption of its own.

## How long it is kept

- A recording is deleted from iCloud and the Mac 30 days after it is transcribed. The iPhone deletes its own copy as soon as the recording has reached iCloud. If you have turned on transcription on the iPhone, it keeps its own copy of the recording until it is transcribed, and at most 30 days.
- Recordings without speech and failed ones are kept until you retry or delete them.
- A deleted note is removed from iCloud and all your devices, and the app cannot bring it back. Each device keeps an internal copy of its text for 30 days, and then removes it for good. A note's pictures are removed from all devices and iCloud as soon as you delete the note or the picture. An archived note is kept and can be restored from the Archive.
- Other notes are kept until you delete them.

## Third-party services

- **Transcription** runs on your own device with WhisperKit. By default the Mac transcribes recordings. If you turn on transcription on the iPhone or iPad, the device transcribes its own recordings on the device, and the Mac transcribes the rest. Your recordings are not sent anywhere to be transcribed, and no third-party service sees them.
- The first time it transcribes, the device downloads the speech model from the internet (about 627 MB on an iPhone or iPad, over Wi-Fi only). No recordings or notes are sent with that download.
- Each recording stores which device and speech model transcribed it.
- **iCloud (CloudKit)** syncs the data between your devices. Apple's privacy policy applies to it.

The app contains no advertising, analytics or crash-reporting services.

## Children

Braining is not directed at children and does not knowingly collect data from them.

## Your rights and contact

You can view, change, export as Markdown files and delete your data at any time in the app. You can also delete Braining's iCloud data in your iCloud settings. Deleting the app from a device removes its local copy. For any questions about privacy, email [valkama.app@gmail.com](mailto:valkama.app@gmail.com).

If this policy changes, the new version will be published on this page with a new date.
