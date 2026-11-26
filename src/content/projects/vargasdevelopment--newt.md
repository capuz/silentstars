---
repo: "VargasDevelopment/newt"
name: "newt"
description: "Offline reading firmware for the Xteink X3 e-reader."
readmeQualityOk: true
url: "https://github.com/VargasDevelopment/newt"
homepage: "https://vargasdevelopment.github.io/newt/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [76, 21]
stars: 10
forks: 0
openIssues: 29
closedIssues: 59
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-22T04:06:29Z"
lastCommitAt: "2026-11-26T15:22:47Z"
lastReleaseAt: "2026-11-23T03:55:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 93
undervaluedScore: 56
maintainers: ["VargasDevelopment"]
openGraphImageUrl: "https://opengraph.githubassets.com/54c6afd1d9cfda9bdaff31e90506030b9f0e232b1f92d767634688ef5432b9b1/VargasDevelopment/newt"
---

Newt is a calm, offline-first reader for your X3. It installs into the X3's
spare app slot, so the firmware you run today stays on the device, and
Newt's Settings can restart into it.

Newt is early alpha software. Expect rough edges, and please
[report what you find](https://github.com/VargasDevelopment/newt/issues).

## What works today

- **Reading.** EPUB books from anywhere on the card. Chapters, a reading
  menu, portrait or landscape, an optional slim progress bar, and Mark as
  finished. Each book remembers its page. Put the X3 to sleep while reading,
  and it wakes on that page. Book covers show on Home and in Books, but
  pictures inside the chapters aren't shown yet: you see the text around
  them only.
- **Home.** The book you are reading, plus Books, Apps and Settings.
- **Reading statistics.** Days read and time of day, per book and overall.
  If the card holds CrossInk's reading history, Newt imports it once.
- **Sleep screen.** Optional extras, off until you turn them on in
  Settings, Sleep screen.
- **Clock.** Time zone and 12- or 24-hour time. Newt sets the clock when it
  checks for updates.
- **Updates.** Over Wi-Fi from GitHub, or from the card.
