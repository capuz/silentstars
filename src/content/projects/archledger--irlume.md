---
repo: "archledger/irlume"
name: "irlume"
description: "Windows Hello-style face login for Linux: secure, TPM-sealed, open"
readmeQualityOk: true
url: "https://github.com/archledger/irlume"
homepage: "https://github.com/archledger/irlume/releases/latest"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["anti-spoofing", "authentication", "biometrics", "face-login", "face-recognition", "face-unlock", "facial-authentication", "facial-recognition", "fingerprint-authentication", "ir-camera"]
stars: 15
forks: 2
openIssues: 9
closedIssues: 53
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-07-02T06:16:17Z"
lastCommitAt: "2026-08-04T06:11:27Z"
lastReleaseAt: "2026-07-21T04:08:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 56
maintainers: ["archledger", "dependabot[bot]", "loofiboss-bit"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1286828818/d220de60-d4b3-419a-a9e3-01a4abfdadd3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260804T061333Z&X-Amz-Expires=300&X-Amz-Signature=c5e91216e536db43fa3ed892244055723d21f16ab6e0a6443ee5829fac086864&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTgyNDMxMywibmJmIjoxNzg1ODI0MDEzLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.I9XYlsU0UmBvhFc219aaN9IUUPaKFILZDKQQutSBmSM"
discussionCount: 2
---

<br>

**Your face unlocks Linux: login, `sudo`, the lock screen, and app prompts
(Bitwarden, `pkexec`). Works in the dark, resists photo & screen spoofs, never
stored as an image.**

Works with the camera you have: an **IR (Windows Hello) camera** unlocks the full
secure tier, a **regular webcam** gives convenient screen unlock, and a
**fingerprint reader** slots in as a companion factor.

Windows Hello-style security for Linux, on a fully open, commercially clean stack.

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
| 🔒 **Unlocks everything** | Login greeter, lock screen, `sudo` (opt-in via `login enable --with-sudo`), and app prompts like **Bitwarden's biometric unlock** via…
