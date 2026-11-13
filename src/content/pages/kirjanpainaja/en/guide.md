---
title: "Kirjanpainaja guide"
description: "How to use Kirjanpainaja: setup, entries and receipts, VAT, invoicing, contracts, payment matching, tax returns, closing the year, backups and the iPhone and iPad app."
---
This is a summary of the Mac app's own guide, under **Ohje → Kirjanpainajan ohje** (Help → Kirjanpainaja guide). The guide in the app has more detail. The app is in Finnish, so the button names below are given in Finnish with a translation.

## What Kirjanpainaja is

Kirjanpainaja is a bookkeeping and tax helper for a Finnish sole proprietorship (toiminimi), on the Mac. It has two sections: **Metsätalous** (forestry), which gives the figures for the forestry tax return (form 2C), and **Toiminimi** (business), which gives the figures for the business tax return (form 5). It also works out the year's VAT return.

Kirjanpainaja keeps track of income and expenses, works out VAT, links receipts to entries, works out mileage, machine hours and depreciation, and shows the tax return figures in the same order as OmaVero, the Finnish Tax Administration's online service.

Kirjanpainaja does **not**:
- send anything to OmaVero. You copy the figures yourself.
- handle personal taxation, such as the household tax credit.
- connect to your bank. Bank statements are imported as files.

Kirjanpainaja is not tax or accounting advice. Check the figures before you file. The figures rest on these assumptions. If one doesn't fit your situation, ask an accountant or the Tax Administration before you use the figures.
- The supported forms are a sole proprietorship's business income (form 5) and forestry (form 2C). Other company types are not supported.
- The VAT return follows the VAT period chosen for the year (month, quarter or calendar year), and the rate is chosen by the entry's date, except on a credit note, which uses the original invoice's rate.
- An entry belongs to the year of its date.
- A sales invoice is booked on its delivery date (accrual basis).

## Getting started

1. Open **Asetukset** (Settings) and, on the Yleiset (General) tab, choose a **Tallennuskansio** (storage folder). It can be in iCloud Drive, Dropbox, Google Drive, OneDrive or any folder on your Mac. A *Kirjanpainaja* folder is made inside it for receipts, the inbox and backups.
2. Choose your line of business in Settings. It sets the starting categories. The calculations are the same for every line of business.
3. Choose the year you are booking from the **Vuosi** (Year) menu in the toolbar.
4. Check the year's settings: mileage allowance, small-purchase limits, deadlines and machine hourly rates. They are copied from the previous year.
5. If you depreciate equipment, set each section's starting year and undepreciated balance (menojäännös).
6. Make your first entry: **Kirjaukset → Uusi kirjaus** (Entries → New entry).

A year kept in the old Excel template can be imported on the **Tuonti** (Import) page with **Tuo Excel-työkirja…** (Import Excel workbook). You see a preview before saving, and the import can be undone.

Earlier years kept in another program or your own spreadsheet can be imported as **history** with **Tuo vanha vuosi taulukosta…** (Import an earlier year from a spreadsheet), as CSV or Excel. Choose which column is the date, description, amount, VAT and category or account, and give each of the file's categories one of the app's categories. Your choices are remembered for the next file. The preview shows the rows and the year's income, expenses and result by section. A history year appears in Analysis and the year comparison marked "(historia)", but it has no tax returns, cannot be locked and takes no entries. The original file is saved in the year's Vanhat aineistot (Old material) folder. History can be undone on the Import page.

## The year from January to closing

1. **Collect receipts** in the inbox folder or drop them on the Entries page.
2. **Entries.** The category decides which line of the tax return an entry goes to.
3. **Trips and machine hours.**
4. **Payment matching** (optional). Import bank statements and match payments to entries.
5. **Depreciation.**
6. **Tax returns.** Copy the figures into OmaVero.
7. **Closing the year.** Fix or acknowledge the review findings, attach the filed returns, lock the year and save the year archive.

## Overview and analysis

**Yleiskatsaus** (Overview) shows the chosen year at a glance. At the top, **Tehtävää** (To do) lists receipts waiting in the inbox, open review findings and an upcoming deadline. Each row takes you to that page. Below are the result by section, VAT, tax withheld at source, open invoices, contracts and warranties about to end. At the bottom, **Tila** (Status) shows the last backup and when the phone figures were last updated.

**Analyysi** (Analysis) shows income, expenses and VAT by month and expenses by category, and compares years. The figures always match the tax returns.

## Entries and receipts

The Entries page lists the chosen year's income and expenses. You can filter by section and category and search. Entries are numbered per year, for example 2026-001.

There are three ways to book a receipt:
- Save the receipt (PDF or image) in the *Kirjanpainaja/Saapuneet* (inbox) folder, for example from your phone. It appears on the **Saapuneet** page, where you choose **Kirjaa…** (Book).
- Drop the file on the Entries or Inbox page.
- Pick the receipt in the entry window with **Valitse kuitti…** (Choose receipt).

Kirjanpainaja reads the date, seller, total, VAT and line items from the receipt and suggests them. The reading happens on your Mac. Always check the suggestions before saving. If a receipt has lines at different VAT rates, each rate is saved as its own entry with the same receipt.

On saving, the receipt is renamed *yyyy-mm-dd_section_description* and moved to *Kirjanpainaja/Kuitit/year*. Other files for the same entry, such as a warranty certificate or an invoice, are added as **attachments**.

An income entry can record **tax withheld at source** (ennakonpidätys) when the payer paid it straight to the Tax Administration, as in timber sales. An equipment purchase gets a **Käsittely** (treatment): small purchase, short useful life or depreciation pool.

## VAT

Each entry has an amount, a VAT treatment and a VAT rate. Under **Summa on** (Amount is), choose whether the amount you type includes VAT or not. Kirjanpainaja works out the rest.

- The category suggests the VAT treatment. You can change it for any entry.
- The rate comes from the entry's date, so for example 25.5 %, in force from 1 September 2024, and 13.5 %, in force from 1 January 2026, are applied correctly.
- When the line of business is electrical or construction work, the reverse-charge VAT for construction services is available.

The year's VAT period, and the month from which you are liable for VAT, are chosen under **Asetukset → Verotus → Arvonlisävero** (Settings → Taxation → VAT). The period can't change in the middle of a year. A forest owner is a primary producer: farming or forestry alone has the calendar year as its VAT period. If you also have a sole proprietorship, the VAT of both goes on the same return, so check your own period in OmaVero.

## Invoicing

The Laskutus (Invoicing) page makes sales invoices, receipts for sales paid on the spot, and credit notes. First fill in **Asetukset → Yleiset → Toiminimen tiedot** (Settings → General → Business details): name, business ID, address and IBAN.

- **Uusi lasku** (New invoice) opens a draft. The VAT rate follows the delivery date. The household tax credit's labour share, reverse charge for construction services and EU service sales are supported.
- **Lähetä** (Send) gives the invoice a number and a reference, books the sale and makes a PDF with a bank barcode and a QR code. The PDF can be printed, saved or sent through Mail.
- A sent invoice is never changed. A mistake is fixed with a **credit note**, which can also be partial.
- When the reference and the amount match, importing a bank statement marks the invoice paid. If the amount differs, the payment shows as a suggestion on the Payments page.

## Contracts and warranties

**Sopimukset** (Contracts) tracks sales and purchase contracts whose work and money come later, such as a timber sale paid in instalments. A contract makes no entries. It collects the linked entries and compares them with the estimate and the instalments. Overdue instalments show on the contract and on the Overview.

**Takuut** (Warranties) lists purchases that still have warranty left. A warranty is added to an entry. Warranties ending within 60 days show in orange.

## Payments and bank statements

Turn on payment matching under **Asetukset → Yleiset → Näytettävät ominaisuudet** (Settings → General → Shown features). Bank CSV files, credit card Excel files and PayPal CSV files are imported on the **Tuonti** (Import) page. Rows already imported are skipped, so overlapping statements are safe to import.

CSV or Excel statements from other banks and cards are imported the same way. If the format is not recognised, choose the columns (date, amount or separate money out and in, payee, description, message, reference, balance) and the account the statement belongs to, or create a new one. Your choices are remembered, so the next statement from the same bank opens ready and you only confirm the account. Always choose the same account for the same bank account so rows already imported are recognised.

The **Maksut** (Payments) page suggests which statement row pays which entry. A row with no entry can become one with **Tee kirjaus…** (Make entry). Your own transfers, such as paying the credit card from the bank account, are recognised so nothing is counted twice. A statement row on its own never changes the tax return figures.

## Trips, machine hours and depreciation

- **Matkat** (Trips): business trips in your own car. The allowance comes from the year's rate per kilometre, plus a trailer supplement. A forestry trip can be linked to a forest property, which fills in its distance.
- **Konetunnit** (Machine hours): use of your own machines, such as a quad bike. The value is the hours times the machine's hourly rate for the year.
- **Poistot** (Depreciation): each section's depreciation pool and the year's equipment purchases. Leaving the depreciation empty means the maximum (25 %).

## Tax returns

The Veroilmoitukset (Tax returns) page shows the VAT return and forms 2C and 5 in the same order as OmaVero. Next to each figure is a copy button that copies it in OmaVero's format (for example 1092,96). Opening a figure shows the entries it is made of.

With a monthly or quarterly VAT period, the VAT form lists the year's periods with their state, deadline and VAT payable. Opening a period shows its lines. An empty period is still reported.

Once you have filed a period's VAT return, press **Merkitse ilmoitetuksi** (Mark as filed). The period's VAT figures are frozen, and its entries can't change in a way that would change the VAT. **Avaa lukitus…** (Unlock) opens the period again, and the reason goes into the change log. If the figures changed when you mark the period again, Kirjanpainaja shows the difference and tells you to file a correction return in OmaVero.

Once you have filed a return, attach its PDF to the form with **Liitä jätetty ilmoitus…** (Attach filed return). With a monthly or quarterly period, the VAT return is attached to the opened period (`2026 ALV Q1.pdf`). For years before Kirjanpainaja you can keep old material as it is.

## Closing and locking the year

The **Vuoden päättäminen** (Closing the year) page brings the last steps together:

1. **Review.** Each **Tarkista nämä** (Check these) finding, such as a missing receipt or category, must be fixed or acknowledged. An acknowledgement always needs a reason. **Tiedoksi** (For information) items don't block locking.
2. **Returns.** Check that a filed return is attached to every form that has figures. If a return wasn't needed, acknowledge its finding in step 1. Every VAT period must also be marked as filed before locking.
3. **Lock.** **Lukitse vuosi…** (Lock year) freezes the tax return figures and stores a checksum for them. A locked year's entries can't be changed.
4. **Backup.** Locking takes a backup straight away.
5. **Year archive.** **Tallenna vuosiarkisto…** (Save year archive) saves the year's Excel file, receipts, attachments, filed returns and acknowledgements as one zip file.

A locked year is opened with **Avaa lukitus…** (Unlock), and the reason goes into the change log. Keep the year archive for at least six years after the end of the tax year. A sole proprietorship keeps its books for ten years.

## iPhone and iPad

The iPhone and iPad app sends receipts to your Mac and shows the figures. It never changes your books.

1. On the Mac, turn on **Asetukset → Yleiset → Mobiilisovellus** (Settings → General → Mobile app). The Mac then writes the figures into the storage folder.
2. Make sure the storage folder shows in the **Files** app on the iPhone or iPad. Dropbox, Google Drive and OneDrive need their own app, which you then turn on in Files under **Browse → Edit**.
3. On the iPhone or iPad, choose the same storage folder as on the Mac.

Before you choose a folder, **Kokeile esimerkkiluvuilla** (Try with sample figures) shows an invented year, so you can see what the app looks like.

The phone's tabs:
- **Kuitit** (Receipts): scan a receipt or pick a photo or file. It goes to the Mac's inbox. With **Lähetä liitteenä** (Send as attachment), the file goes to an existing entry as an attachment.
- **Yleiskatsaus**, **Kirjaukset** and **Veroilmoitukset** (Overview, Entries, Tax returns): the figures the Mac wrote last. Pull down to get the newest.

Dropbox, Google Drive and OneDrive can show the phone an older copy of the figures. If your storage folder is not in iCloud Drive, choose a separate iCloud Drive **mobile folder** for the figures on both the Mac and the phone.

## Data, backups and restoring

- The **database** is in the app's own folder on your Mac, not in the cloud, so syncing can't break it.
- **Receipts, attachments, invoice PDFs, filed returns and backups** are in the *Kirjanpainaja* folder in your storage folder.
- Kirjanpainaja sends your data nowhere. **Vie Exceliin…** (Export to Excel) makes a file of the chosen year that you can give to an accountant, for example.

Kirjanpainaja backs up the database automatically: once a day, five minutes after changes, when you quit if anything changed, and whenever a year is locked. Every backup is checked. Receipt files are not in the backup, because they are already in your storage folder. To restore, go to **Asetukset → Varmuuskopiot → Palauta varmuuskopiosta…** (Settings → Backups → Restore from backup). The current data is backed up once more before it is replaced.

Nothing is deleted for good. **Näytä poistetut** (Show deleted) shows deleted entries, and **Palauta** (Restore) in the right-click menu brings one back. Changes are written to a change log.

Kirjanpainaja does not encrypt your data itself. Keep **FileVault** turned on in your Mac and turn on two-factor authentication in your storage service.

**Moving to a new Mac**: install Kirjanpainaja, choose the same storage folder and restore the newest backup.
