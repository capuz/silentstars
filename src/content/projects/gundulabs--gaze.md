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
stars: 370
forks: 16
openIssues: 4
closedIssues: 63
watchers: 0
contributors: 11
recentReleases: 9
createdAt: "2026-02-23T20:00:17Z"
lastCommitAt: "2026-08-14T05:16:12Z"
lastReleaseAt: "2026-08-02T18:26:16Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 31
maintainers: ["pranavgundu", "renovate[bot]", "melynx"]
openGraphImageUrl: "https://opengraph.githubassets.com/412f4588a15944a75c95e4f3602982e85d6e9d8decde09f89455ed6398bd0a0b/GunduLabs/gaze"
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

The installer installs the Gaze daemon, CLI, and GUI. It installs the GNOME Shell extension only when it detects a GNOME desktop session; on KDE Plasma it installs `gaze-kde` instead, and on other non-GNOME desktops it skips GNOME-specific packages so it does not pull in GNOME Shell. If you installed the GNOME extension manually or automatic enablement was not possible, reboot (so GNOME Shell scans the new extension) and then run from GNOME:

```bash
gnome-extensions enable…
