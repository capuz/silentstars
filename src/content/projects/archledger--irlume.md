---
repo: "archledger/irlume"
name: "irlume"
description: "Windows Hello-style face login for Linux: secure, TPM-sealed, open"
readmeQualityOk: true
url: "https://github.com/archledger/irlume"
homepage: "https://github.com/archledger/irlume/releases/latest"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["anti-spoofing", "authentication", "biometrics", "face-login", "face-recognition", "face-unlock", "facial-authentication", "facial-recognition", "fingerprint-authentication", "ir-camera"]
stars: 9
forks: 1
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-02T06:16:17Z"
lastCommitAt: "2026-07-23T06:15:22Z"
lastReleaseAt: "2026-07-21T04:08:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 58
maintainers: ["archledger", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1286828818/d220de60-d4b3-419a-a9e3-01a4abfdadd3"
discussionCount: 2
---

<br>

**Your face unlocks Linux: login, `sudo`, the lock screen, and app prompts
(Bitwarden, `pkexec`). Works in the dark, resists photo & screen spoofs, never
stored as an image.**

Works with the camera you have: an **IR (Windows Hello) camera** unlocks the full
secure tier, a **regular webcam** gives convenient screen unlock, and a
**fingerprint reader** slots in as a companion factor.

Built to match or beat Windows Hello, on a fully open, commercially clean stack.

<br>

[Install](#-install) · [How it works](#-how-it-works) · [Security](#-your-face-never-leaves-as-an-image) · [Limits](#-honest-limitations) · [FAQ](#-faq) · [Docs](https://github.com/archledger/irlume/blob/HEAD/docs/)

<br>

<sub>From a one-line install to a wired face login: guided face enrollment in the TUI, greeter and lock-screen wiring, and opt-in face-<code>sudo</code>.</sub>

</div>

---

## ✨ What you get

|  |  |
|---|---|
| 🌑 **Works in the dark** | Active **infrared** recognition (Windows-Hello cameras); no ambient light needed. |
| 🔒 **Unlocks everything** | Login greeter, lock screen, `sudo` (opt-in via `login enable --with-sudo`), and app prompts like **Bitwarden's biometric unlock** via polkit…
