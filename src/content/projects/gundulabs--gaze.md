---
repo: "GunduLabs/gaze"
name: "gaze"
description: "Facial authentication for Linux"
readmeQualityOk: true
url: "https://github.com/GunduLabs/gaze"
homepage: "https://gaze.gundulabs.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["authentication", "face-recognition", "linux", "pam", "biometrics"]
stars: 350
forks: 15
openIssues: 5
closedIssues: 57
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-02-23T20:00:17Z"
lastCommitAt: "2026-08-09T04:47:19Z"
lastReleaseAt: "2026-08-02T18:26:16Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 31
maintainers: ["pranavgundu", "renovate[bot]", "melynx"]
openGraphImageUrl: "https://opengraph.githubassets.com/62be3ef584f602a7f267994d1837ed8e6de02acf149fd3640922bf3b529acde2/GunduLabs/gaze"
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

The installer installs the Gaze daemon, CLI, and GUI. It installs the GNOME Shell extension only when it detects a GNOME desktop session; on KDE Plasma and other non-GNOME desktops it skips GNOME-specific packages so it does not pull in GNOME Shell. If you installed the GNOME extension manually or automatic enablement was not possible, reboot (so GNOME Shell scans the new extension) and then run from GNOME:

```bash
gnome-extensions enable gaze@gundulabs.com
gsettings set…
