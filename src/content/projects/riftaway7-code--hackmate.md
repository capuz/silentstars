---
repo: "riftaway7-code/hackmate"
name: "hackmate"
description: "automates the entire process of creating a bootable OpenCore hackintosh USB. No manual config.plist editing, no hunting down kexts, no macrecovery commands."
url: "https://github.com/riftaway7-code/hackmate"
homepage: "https://riftaway7-code.github.io/hackmate"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 59
forks: 5
openIssues: 2
closedIssues: 13
watchers: 3
contributors: 4
recentReleases: 5
createdAt: "2026-06-24T10:32:01Z"
lastCommitAt: "2026-06-26T21:32:28Z"
lastReleaseAt: "2026-06-26T19:59:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 43
maintainers: ["riftaway7-code", "openlyst", "thanhnndev"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a4fb5d4db1785d9e5808317831814fd8779c23d0e9587059d1d02c4c4ca53bb/riftaway7-code/hackmate"
---

# HackMate

Automates the entire process of creating a bootable OpenCore hackintosh USB. No manual config.plist editing, no hunting down kexts, no macrecovery commands.

Supports Linux, Windows, and macOS as host operating systems.

---

## 📢 Announcements

**v1.3.0 is out** — Windows users can now download a single `HackMate.exe` from the [releases page](https://github.com/riftaway7-code/hackmate/releases) — no Python, no venv, no setup.py. Also fixes AMD config.plist crash, Windows SSL error, and macOS lspci error. Config.plist editor added to welcome screen.

**If you cloned before June 25th (running from `hackmate-linux/`):**
Just run your usual command — HackMate will auto-migrate itself to the new `src/` layout and relaunch. No manual steps needed.

**If you're on macOS and got a `lspci not found` error:**
macOS is now fully supported. Pull the latest and re-run.

**If USB formatting fails on Windows:**
Fixed in latest update. Pull and try again. If it still fails, use the new **Already Formatted** button — format your USB as FAT32 (GPT) in Disk Management first, then pick that option in HackMate.

**If you got `sudo: uv: command not found`:**
Don't use `sudo uv run`.…
