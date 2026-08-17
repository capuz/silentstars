---
repo: "MonDevHub/monocr"
name: "monocr"
description: "The MonOCR Platform: Academic-grade OCR for the Mon language. High-performance, privacy-first ecosystem across Web (SvelteKit), iOS (SwiftUI), and Android (Kotlin)."
readmeQualityOk: true
url: "https://github.com/MonDevHub/monocr"
homepage: "https://monocr.pages.dev/"
language: "Kotlin"
languages: ["Kotlin", "Swift"]
languagePcts: [39, 26]
topics: ["android", "ios", "mnw", "mon", "myanmar", "ocr", "web"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-08T12:52:33Z"
lastCommitAt: "2026-08-17T04:16:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 28
maintainers: ["janakhpon", "Oungseik"]
openGraphImageUrl: "https://opengraph.githubassets.com/186bf09de8487254f52c678357fb0db46fb9a2fa78dd11444fb30166963f2ef8/MonDevHub/monocr"
---

# MonOCR

[English](https://github.com/MonDevHub/monocr/blob/HEAD/README.md) | [မြန်မာဘာသာ](https://github.com/MonDevHub/monocr/blob/HEAD/README.my.md) | [ဘာသာမန်](https://github.com/MonDevHub/monocr/blob/HEAD/README.mnw.md)

---

Mon is spoken by roughly one million people across Myanmar and Thailand. [UNESCO classifies it as vulnerable](https://en.wikipedia.org/wiki/Atlas_of_the_World%27s_Languages_in_Danger) — and no OCR toolchain existed for it before this project.

MonOCR takes an image of Mon script and returns text. It runs on Web, Android, and iOS — fully offline, no data leaves the device.

Built and maintained by the Mon developer community.

---

## Live

- **Web**: [ocr.mondevhub.com](https://ocr.mondevhub.com)
- **Android**: [Google Play](https://play.google.com/store/apps/details?id=dev.janakhpon.monocr)
- **iOS**: [App Store](https://apps.apple.com/app/monocr) *(pending review)*

---

## The model

All three apps ship one model, and since 2026-08-15 it is **v3.5**:

| | |
| :--- | :--- |
| Architecture | MobileNetV3-Large + SE + 2×BiLSTM-512 + attention + CTC |
| Parameters | 11,553,437 |
| Input | Grayscale, `160px` height, static `1024px` width |
| Charset | 276…
