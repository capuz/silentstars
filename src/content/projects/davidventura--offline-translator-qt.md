---
repo: "DavidVentura/offline-translator-qt"
name: "offline-translator-qt"
description: "Qt port of my offline translator"
readmeQualityOk: true
url: "https://github.com/DavidVentura/offline-translator-qt"
language: "Rust"
languages: ["Rust", "QML"]
languagePcts: [61, 30]
stars: 18
forks: 0
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2025-10-03T13:09:12Z"
lastCommitAt: "2026-08-29T17:17:27Z"
lastReleaseAt: "2026-08-29T17:28:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 39
maintainers: ["DavidVentura"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a4a1a6f7d2040e68632c3e6cc1cd19caaa147fed03282f66f7a407ac6fdd710/DavidVentura/offline-translator-qt"
---

# Offline Translator

Qt port of my [Android offline translator](https://github.com/DavidVentura/firefox-translator), built to run on Linux phones.

It performs text and image translation completely offline using on-device models.
It also supports automatic language detection, transliteration for non-Latin scripts, and a built-in word dictionary.

<p>
</p>

## How It Works

Download language packs once, then translate without sending requests to external servers.

Language packs contain the translation models, so translation happens entirely on-device.

## Tech

- Translation models are from [firefox-translations-models](https://github.com/mozilla/firefox-translations-models/tree/main)
- Translation runtime is [bergamot-translator](https://github.com/browsermt/bergamot-translator)
- OCR is powered by [Tesseract](https://github.com/tesseract-ocr/tesseract)
- Automatic language detection uses [cld2](https://github.com/CLD2Owners/cld2)
- Dictionary data is based on Wiktionary exports from [Kaikki](https://kaikki.org/)
- TTS uses [Piper](https://github.com/OHF-Voice/piper1-gpl), [Coqui](https://github.com/coqui-ai/tts), [Kokoro](https://github.com/hexgrad/kokoro),…
