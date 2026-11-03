---
repo: "jasiek/webchirp"
name: "webchirp"
description: "CHIRP in your Web Browser"
readmeQualityOk: true
url: "https://github.com/jasiek/webchirp"
homepage: "https://webchirp.org/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript", "Python"]
languagePcts: [39, 32, 25]
topics: ["amateur-radio", "hamradio", "python", "wasm"]
stars: 31
forks: 4
openIssues: 2
closedIssues: 82
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-12T18:43:25Z"
lastCommitAt: "2026-11-03T19:05:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: ["jasiek", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6af4e11a4b120196f85bb093a159bf78477ac3787ec95af60ee68646f598521/jasiek/webchirp"
---

# webchirp 📻

Web-based CPS for amateur transceivers which runs [CHIRP](https://chirp.danplanet.com)'s drivers in a browser and uses WebSerial to communicate.

# This is live and running on [webchirp.org](https://webchirp.org)

## What is implemented

- `chirp` is included as a git submodule at `chirp/`
- Browser UI with a CHIRP-inspired **Channels** table and a **Settings** editor,
  switchable with tabs.
- Python runtime in-browser (Pyodide) running unmodified CHIRP driver code.
- Radio picked by searching CHIRP's driver catalog — including the alternate
  vendor/model names a driver is rebadged under — served from a prebuilt static
  catalog (`web/radio-catalog.json`) with live enumeration as a fallback. The
  sidebar names the radio in use.
- Selection-aware **Load from radio** / **Save to radio** using the selected CHIRP
  clone-mode driver (`sync_in`/`sync_out`).
- Radio settings read and validated through the selected driver
  (`get_radio_settings` / `validate_radio_settings`).
- Channel editing: insert / remove / move, copy / cut / paste, plus GMRS, FRS,
  MURS and PMR446 band-preset generators.
- Repeater imports from external directories (RepeaterBook, przemienniki.net,…
