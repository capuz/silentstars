---
repo: "archledger/irlume"
name: "irlume"
description: "Windows Hello-style face and fingerprint login for Linux: secure, TPM-sealed, open"
readmeQualityOk: true
url: "https://github.com/archledger/irlume"
homepage: "https://github.com/archledger/irlume/releases/latest"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["anti-spoofing", "authentication", "biometrics", "face-login", "face-recognition", "face-unlock", "facial-authentication", "facial-recognition", "fingerprint-authentication", "ir-camera"]
stars: 22
forks: 8
openIssues: 11
closedIssues: 150
watchers: 1
contributors: 7
recentReleases: 10
createdAt: "2026-07-02T06:16:17Z"
lastCommitAt: "2026-08-30T00:45:26Z"
lastReleaseAt: "2026-07-21T04:08:34Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 57
maintainers: ["archledger", "dependabot[bot]", "FizykPSX"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1286828818/d220de60-d4b3-419a-a9e3-01a4abfdadd3"
fundingLinks: ["KO_FI:https://ko-fi.com/archledger"]
discussionCount: 2
---

### Your face or fingerprint unlocks Linux

Login, lock screen, `sudo`, and app prompts like Bitwarden. In the dark, with an
IR camera. Stored as an embedding, never an image. Password always works.

**[Setup](https://github.com/archledger/irlume/blob/HEAD/docs/SETUP.md)** · **[Commands](https://github.com/archledger/irlume/blob/HEAD/docs/COMMANDS.md)** · **[Limits](https://github.com/archledger/irlume/blob/HEAD/docs/LIMITATIONS.md)** · **[FAQ](https://github.com/archledger/irlume/blob/HEAD/docs/FAQ.md)** · **[All docs](https://github.com/archledger/irlume/blob/HEAD/docs/)**

<br>

</div>

---

> [!IMPORTANT]
> **A printed photograph of an enrolled face passes the algorithmic IR gate
> alone** (accepted in 69 of 70 measured presentations). The shipped PAD pair
> (ViT RGB + FLIR IR) refuses it, runs default-on, and verifies against signed
> checksums at startup; kill switches: `IRLUME_PAD_VIT=0`, `IRLUME_PAD_IR=0`.
> Read **[Limits](https://github.com/archledger/irlume/blob/HEAD/docs/LIMITATIONS.md)** before wiring this
> into anything that matters.

<br>

|  |  |
|:--|:--|
| 🌑 **Works in the dark** | Infrared recognition, no ambient light needed |
| 🔓 **Unlocks everything** |…
