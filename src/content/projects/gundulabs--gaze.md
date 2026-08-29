---
repo: "GunduLabs/gaze"
name: "gaze"
description: "Facial authentication for Linux"
readmeQualityOk: true
url: "https://github.com/GunduLabs/gaze"
homepage: "https://gaze.gundulabs.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["authentication", "face-recognition", "linux", "pam", "biometrics"]
stars: 399
forks: 17
openIssues: 2
closedIssues: 80
watchers: 1
contributors: 11
recentReleases: 9
createdAt: "2026-02-23T20:00:17Z"
lastCommitAt: "2026-08-29T17:29:04Z"
lastReleaseAt: "2026-08-02T18:26:16Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 31
maintainers: ["pranavgundu", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9ec191d5beacbb20840021e3c09fee9ad700be61c88993566795b55e245bb0f/GunduLabs/gaze"
---

# Gaze

**Facial authentication for Linux**

[Documentation](https://gaze.gundulabs.com) · [Install](https://gaze.gundulabs.com/guide/installation) · [Development](https://gaze.gundulabs.com/guide/development)

</div>

---

> [!NOTE]
> Gaze includes local liveness anti-spoofing and support for infrared (IR) cameras to secure authentication against spoofing attacks. For high-security environments, it is recommended to keep standard system authentication active as a fallback.

Facial authentication for Linux with on-device face recognition, PAM integration, and tools for login, lock screen, sudo, and desktop management.

## Install

```bash
curl -fsSL https://gaze.gundulabs.com/install.sh | sh
```

The installer installs the Gaze daemon, CLI, and GUI. It supports openSUSE Tumbleweed on x86_64 through its native `zypper` package manager and a Tumbleweed-specific RPM repository. It installs the GNOME Shell extension only when it detects a GNOME desktop session; on KDE Plasma it installs `gaze-kde` instead, and on other non-GNOME desktops it skips GNOME-specific packages so it does not pull in GNOME Shell. If you installed the GNOME extension manually or automatic enablement was not…
