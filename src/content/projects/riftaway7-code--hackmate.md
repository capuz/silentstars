---
repo: "riftaway7-code/hackmate"
name: "hackmate"
description: "automates the entire process of creating a bootable OpenCore hackintosh USB. No manual config.plist editing, no hunting down kexts, no macrecovery commands."
url: "https://github.com/riftaway7-code/hackmate"
homepage: "https://riftaway7-code.github.io/hackmate"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 64
forks: 5
openIssues: 4
closedIssues: 15
watchers: 3
contributors: 5
recentReleases: 5
createdAt: "2026-06-24T10:32:01Z"
lastCommitAt: "2026-06-27T06:24:32Z"
lastReleaseAt: "2026-06-26T19:59:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 41
maintainers: ["riftaway7-code", "github-actions[bot]", "thanhnndev"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b8e230cc3e7e883832a84a7880840cfd5425f73cc485a03debd1ab23fbacdf2/riftaway7-code/hackmate"
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
