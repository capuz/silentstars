---
repo: "cuzic/awase"
name: "awase"
description: "A simultaneous-keystroke keyboard remapper for NICOLA thumb shift and beyond"
originalDescription: "A simultaneous-keystroke keyboard remapper for NICOLA thumb shift and beyond"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/cuzic/awase"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 5
forks: 2
openIssues: 11
closedIssues: 12
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-29T02:15:20Z"
lastCommitAt: "2026-10-21T21:15:01Z"
lastReleaseAt: "2026-07-02T21:35:39Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 90
undervaluedScore: 57
maintainers: ["cuzic"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0dc11a873bd73d6382995daac5504469fcc3fbdbbbe4d2faad33e5b9fcb2994/cuzic/awase"
---

# awase — Thumb-shift (NICOLA) keyboard remapper

*[English](https://github.com/cuzic/awase/blob/HEAD/README.en.md)*

**awase** (合わせ) is a keyboard remapper that enables thumb-shift input on Windows.

---

## What is thumb shift

Thumb shift (NICOLA layout) uses the "変換" (Henkan) and "無変換" (Muhenkan) keys on either side of the space bar as thumb-shift keys. Pressing them simultaneously with letter keys enters kana characters directly. It lets you type Japanese with fewer keystrokes than romaji input, and once learned, enables fast and efficient typing.

awase intercepts physical key input with a low-level keyboard hook, detects simultaneous keystrokes, and sends them to the IME as romaji. The IME performs kanji conversion as usual.

---

## Features

- **NICOLA-compliant simultaneous keystroke detection** — three-key arbitration via d1/d2 comparison
- **Two commit modes** — wait / ngram\_predictive
- **n-gram adaptive threshold** — dynamically adjusts the decision window using 2/3-grams derived from a Wikipedia corpus to improve accuracy
- **Yamabuki-compatible `.yab` layout files** — existing layout data can be used as-is
- **Broad app support** — automatically identifies Win32 /…
