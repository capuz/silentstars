---
repo: "pham-noah/kairn-reader"
name: "kairn-reader"
description: "An Offline EPUB reader for Android that keeps your library, your notes and your reading to yourself."
readmeQualityOk: true
url: "https://github.com/pham-noah/kairn-reader"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["android", "ebook-reader", "epub", "fdroid", "jetpack-compose", "kotlin", "privacy", "readium"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-17T20:31:36Z"
lastCommitAt: "2026-11-03T19:05:37Z"
lastReleaseAt: "2026-11-02T17:39:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 55
maintainers: ["pham-noah"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c397eb5d52f571073b5695629b8011502b42c3d5f34be64b8527edd6f6fe24e/pham-noah/kairn-reader"
---

# Kairn

**An offline EPUB reader for Android. Your library, your notes and your place stay on your phone.**

Kairn reads the books you already own. No account, no subscription, nothing to import into: point it at a
folder, or let it find the EPUBs already on your device.

## Why it is built this way

- **Nothing phones home.** No analytics, no crash reporting, no accounts.
- **Your data is files, not a database.** Positions, highlights, notes and settings are plain JSON in the
  app's folder, one file per book.
- **A moved book keeps its history.** Books are identified by their content, so renaming or moving a file
  keeps every highlight and your place in it.
- **A restore cannot leave you worse off.** One zip, validated before anything is touched, with a safety
  copy taken first and a plain statement of what happened.

## Reading

- Page or scroll, with auto scroll at a speed you set per book. It holds still while your finger is on the
  page and picks up when you lift it.
- Read aloud from where you are, and it carries on into the next chapter. Pause and resume land on the word
  you left; speed runs 0.6x to 2.0x per book. It marks the sentence it is speaking, and in page…
