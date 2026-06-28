---
repo: "riftaway7-code/hackmate"
name: "hackmate"
description: "automates the entire process of creating a bootable OpenCore hackintosh USB. No manual config.plist editing, no hunting down kexts, no macrecovery commands."
url: "https://github.com/riftaway7-code/hackmate"
homepage: "https://riftaway7-code.github.io/hackmate"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["automation", "efi", "hackintosh", "kext", "macos", "opencore", "opencore-efi", "python", "ssdt", "hackintosh-installer"]
stars: 76
forks: 7
openIssues: 1
closedIssues: 22
watchers: 3
contributors: 5
recentReleases: 6
createdAt: "2026-06-24T10:32:01Z"
lastCommitAt: "2026-06-28T03:13:23Z"
lastReleaseAt: "2026-06-27T19:49:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 42
maintainers: ["riftaway7-code", "github-actions[bot]", "thanhnndev"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a6fe3a02173a7ddf5775989658d80ab89a1f7d15cbcfe5b085ef91fc13286cc/riftaway7-code/hackmate"
---

```
██╗  ██╗ █████╗  ██████╗██╗  ██╗███╗   ███╗ █████╗ ████████╗███████╗
██║  ██║██╔══██╗██╔════╝██║ ██╔╝████╗ ████║██╔══██╗╚══██╔══╝██╔════╝
███████║███████║██║     █████╔╝ ██╔████╔██║███████║   ██║   █████╗
██╔══██║██╔══██║██║     ██╔═██╗ ██║╚██╔╝██║██╔══██║   ██║   ██╔══╝
██║  ██║██║  ██║╚██████╗██║  ██╗██║ ╚═╝ ██║██║  ██║   ██║   ███████╗
╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝
```

Automates the entire process of creating a bootable OpenCore hackintosh USB. No manual config.plist editing, no hunting down kexts, no macrecovery commands.

Supports Linux, Windows, and macOS as host operating systems.

---

## 📢 Announcements

**v1.3.0 is out** — Windows users can now download a single `HackMate.exe` from the [releases page](https://github.com/riftaway7-code/hackmate/releases) — no Python, no venv, no setup.py. Also fixes AMD config.plist crash, Windows SSL error, and macOS lspci error. Config.plist editor added to welcome screen.

**If you cloned before June 25th (running from `hackmate-linux/`):**
Just run your usual command — HackMate will auto-migrate itself to the new `src/` layout and relaunch. No manual steps needed.

**If you're on macOS and…
