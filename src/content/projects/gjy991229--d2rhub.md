---
repo: "gjy991229/D2rHub"
name: "D2rHub"
description: "The multi-account manager for Diablo II Remastered Edition, along with a cute cat and Multifunctional floating window."
originalDescription: "The multi-account manager for Diablo II Remastered Edition, along with a cute cat and Multifunctional floating window."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/gjy991229/D2rHub"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [56, 38]
stars: 25
forks: 8
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-06-05T08:24:35Z"
lastCommitAt: "2026-09-25T09:02:08Z"
lastReleaseAt: "2026-06-11T13:40:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 46
maintainers: ["gjy991229"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fbe42021eb5073ae448f186b74469a90905a8d63b5e0751d0f8075a09ccf20e/gjy991229/D2rHub"
---

# D2RHub

**Diablo II: Resurrected multi-account, dual-client and audio telemetry farming assistant**

---

D2RHub is a Windows local tool for managing multiple accounts of Diablo II: Resurrected, Chinese/International client configurations and multi-instance processes, and recording rune drops and local statistics through mod audio fingerprinting.

Currently only one desktop distribution is maintained: the multi-instance core is always available, desktop floating window, recognition and statistics, desktop pet and automatic room following as built-in optional modules added as needed. MSI and NSIS are only different installation formats, not two functional versions.

### v0.9.102 Update

- Optimized D2R startup detection: Calculate the key window to skip animation from recognizing new processes, and immediately stop sending after detecting ETW or TCP 1119 readiness.
- Tightened WEB_TOKEN ETW listening to only receive QueryValue events, and increased real-time tracking buffer to reduce the risk of loss under high-frequency registry events.
- This release does not modify Mod or game files, no need to reprocess Mod when upgrading from v0.9.101.

- Added **Mini Mode** to the main…
