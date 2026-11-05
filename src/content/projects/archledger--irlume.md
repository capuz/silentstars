---
repo: "archledger/irlume"
name: "irlume"
description: "Face authentication for Linux: IR cameras in the dark, anti-spoofing on by default, TPM-sealed embeddings, and the password always works."
readmeQualityOk: true
url: "https://github.com/archledger/irlume"
homepage: "https://github.com/archledger/irlume/releases/latest"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["anti-spoofing", "authentication", "biometrics", "face-login", "face-recognition", "face-unlock", "facial-authentication", "facial-recognition", "fingerprint-authentication", "ir-camera"]
stars: 41
forks: 12
openIssues: 3
closedIssues: 252
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2026-07-02T06:16:17Z"
lastCommitAt: "2026-11-05T00:21:56Z"
lastReleaseAt: "2026-07-21T04:08:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 44
maintainers: ["archledger", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1286828818/d220de60-d4b3-419a-a9e3-01a4abfdadd3"
fundingLinks: ["KO_FI:https://ko-fi.com/archledger", "CUSTOM:https://www.paypal.me/WisbendjiFimerlus"]
discussionCount: 0
---

### Your face or fingerprint unlocks Linux

Login, lock screen, `sudo`, and app prompts like Bitwarden. In the dark, with an
IR camera. Enrollment stores embeddings, never images. Password fallback stays available.

**[Setup](https://github.com/archledger/irlume/blob/HEAD/docs/SETUP.md)** · **[Commands](https://github.com/archledger/irlume/blob/HEAD/docs/COMMANDS.md)** · **[Limits](https://github.com/archledger/irlume/blob/HEAD/docs/LIMITATIONS.md)** · **[FAQ](https://github.com/archledger/irlume/blob/HEAD/docs/FAQ.md)** · **[All docs](https://github.com/archledger/irlume/blob/HEAD/docs/)**

evolved since - [COMMANDS.md](https://github.com/archledger/irlume/blob/HEAD/docs/COMMANDS.md) and [TUI.md](https://github.com/archledger/irlume/blob/HEAD/docs/TUI.md)
document the current ones.</sub>

---

> [!IMPORTANT]
> **A printed photograph of an enrolled face passes the algorithmic IR gate
> alone** (accepted in 69 of 70 measured presentations). The shipped PAD pair
> (ViT RGB + FLIR IR) refuses it, runs default-on, and verifies against signed
> checksums at startup. Missing, disabled, or failed required PAD falls back to
> password without granting face authentication; kill switches
>…
