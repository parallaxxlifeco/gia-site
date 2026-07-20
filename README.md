# GIVE IT ALL — site source (`gia-site`)

This repository is the **version-controlled bundle of page code for the live GIVE IT ALL
website**, `https://www.giveitallevent.com` (built on Wix). If you want to understand how
the site fits together, or change something and get it live, start here.

---

## The three places files live (read this first)

There is more than one copy of "the site," and they are **not** automatically kept in sync.
Knowing which is which prevents the most common mistake — editing a copy that never reaches
the live site.

| Location | What it is | Feeds the live site? |
|---|---|---|
| **`www.giveitallevent.com`** (Wix) | The actual live website visitors see. | — it *is* the live site |
| **This repo — `parallaxxlifeco/gia-site`** | The source-of-record for each page's code (the files below). Updated via GitHub "Add files via upload" or `git push`. | Only after you paste/publish a file's contents into the matching Wix page (see *Making a change live*). |
| **Local folder — `Documents/Claude Code/GIVE IT ALL - Site`** (Daniel's Mac) | A larger working/scratch area (~60 files: SEO notes, previews, image briefs, extra draft pages). The master workspace, but **not** a git clone and **not** connected to this repo. | No. Edits here reach nothing until they're copied into this repo *and* published in Wix. |

**Rule of thumb:** the live site changes only when a Wix page is updated and published. This
repo is the record of what *should* be on each page; the local folder is where drafts happen.

---

## What's in this repo

The `gia-*-page.js` files are the code embedded into each Wix page. The `.html` files are
standalone/source versions of specific pages. Everything targets the live domain
`www.giveitallevent.com` (with checkout on `checkout.giveitallevent.com`).

| File | Powers / corresponds to | Live URL |
|---|---|---|
| `gia-home-page.js` | Home page | `/` |
| `gia-event-page.js` | Speaker & Networking Event (main event) | `/bali-speaker-networking-event` |
| `gia-events-page.js` | Events calendar | `/events-calendar` |
| `gia-founders-breakfast-page.js` | Founders Breakfast | `/founders-breakfast-bali` |
| `gia-speaker-page.js` | Speak on Stage | `/speak-at-give-it-all` |
| `gia-speaker-series-page.js` | Speaker Series | speaker-series page |
| `gia-speaker-series-optin-page.js` | Speaker Series opt-in | speaker-series opt-in |
| `gia-speaker-thankyou-page.js` | Speaker thank-you | speaker thank-you |
| `gia-about-page.js` | About Us | `/about-us` |
| `gia-members-page.js` | Members | `/members` |
| `gia-partners-page.js` | Partners | `/partners` |
| `gia-partner-packages-page.js` | Partner Packages | `/partner-packages` |
| `gia-privacy-page.js` | Privacy Policy | `/privacy-policy` |
| `gia-refund-page.js` | Refund Policy | `/refund-policy` |
| `event.html`, `speak.html`, `privacy-policy.html`, `refund-policy.html`, `thankyou-speaker.html` | Standalone HTML source of those pages | as above |
| `index.html` | Landing / redirect stub | — |
| `gia-next-event.ics`, `founders-breakfast-next.ics` | "Add to calendar" files | — |

---

## Making a change live

1. **Edit** the relevant file in this repo (or edit locally, then copy the file into this repo).
2. **Commit & push** to `main` so the record is up to date:
   ```
   git add -A
   git commit -m "Describe the change"
   git push origin main
   ```
   (Or use GitHub's *Add file → Upload files* in the browser.)
3. **Publish in Wix:** open the matching page on `giveitallevent.com`, update the embedded
   code / element with the new file contents, and hit **Publish**. The repo push alone does
   **not** update the live site — this step does.

---

## Site navigation reference

Every page shares the same top nav and footer. The **Experiences** dropdown (top nav) and the
**Experiences** column (footer) both link out to:

- Speaker & Networking Event → `giveitallevent.com/bali-speaker-networking-event`
- Founders Breakfast → `giveitallevent.com/founders-breakfast-bali`
- Speak on Stage → `giveitallevent.com/speak-at-give-it-all`
- Reconnected Man → `parallaxxtransformations.com/the-reconnected-man`
- **Parallaxx Transformations → `parallaxxtransformations.com/coaching-experiences`**
- Events calendar → `giveitallevent.com/events-calendar`

> **Note on the Parallaxx Transformations link:** it must point to
> `/coaching-experiences`, **not** the Parallaxx home page. This was previously wrong on every
> page and was corrected on 2026-07-20. If you add a new page, copy the nav/footer from an
> existing page so this stays consistent. (The `© Parallaxx Transformations` credit line is a
> brand credit and intentionally still points to the Parallaxx home page.)

---

## Maintenance notes

- **Keep the repo and the local folder reconciled.** They have drifted (the local folder is
  larger). When you finish edits locally, copy the changed files into this repo and push, so
  this repo stays the single source of truth.
- **Security:** a GitHub personal access token was found stored in plaintext in the
  `GHL-Dashboard` repo's git config on the Mac. Rotate it in GitHub → Settings → Developer
  settings → Personal access tokens when convenient, and avoid committing tokens into any repo
  or git remote URL.

---

## Changelog

- **2026-07-20** — Fixed the **Parallaxx Transformations** link in the Experiences menu and
  footer across all pages: now points to `parallaxxtransformations.com/coaching-experiences`
  instead of the Parallaxx home page (29 links across 16 files). Added this README.
