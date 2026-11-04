---
repo: "jularboolean/legejo"
name: "legejo"
description: "A self-hosted e-book library with OPDS, Kobo sync, KOReader sync and ActivityPub federation"
readmeQualityOk: true
url: "https://github.com/jularboolean/legejo"
homepage: "https://legejo.se"
language: "Rust"
languages: ["Rust", "TypeScript", "Svelte"]
languagePcts: [49, 25, 21]
topics: ["activitypub", "ebooks", "epub", "kobo", "koreader", "opds", "rust", "self-hosted", "sveltekit"]
stars: 32
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-05T09:06:04Z"
lastCommitAt: "2026-11-04T11:21:41Z"
lastReleaseAt: "2026-10-06T15:43:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 50
maintainers: ["jularboolean", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1405465809/18ac1002-023a-4d0b-9c64-94b06d436986"
discussionCount: 0
---

# Legejo

Legejo is a self-hosted library for your e-books. Upload them, put them on
shelves, and read them in the browser, on a Kobo, in KOReader or in any OPDS
app, with your place following you between devices.

It is built around EPUB, and also keeps PDF files, comics (CBZ) and
audiobooks. It runs as one small container, written in Rust and SvelteKit,
with SQLite built in.

## Features

- **Library:** metadata read from the file or looked up in Open Library and
  Libris, and written back into the EPUB. Every EPUB is checked and repaired
  on upload. Series, tags, ratings, full-text search and duplicate detection.
- **Reading:** a web reader with themes, highlights, notes and reading aloud.
  It also reads PDF files and comics, and works offline when installed on a
  phone or tablet.
- **E-readers:** Kobo sync (books, collections, progress and highlights),
  a KOReader sync server, OPDS 1.2 and Send to Kindle.
- **Shelves to share:** with users on your instance, with someone on another
  Legejo or a reading app by a private link, and, for free books, with the
  fediverse over ActivityPub.
- **Audiobooks (optional):** each one becomes a private podcast feed for the
  podcast app…
