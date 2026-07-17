---
repo: "frappe/pilot"
name: "pilot"
description: "Frappe Server Manager"
readmeQualityOk: true
url: "https://github.com/frappe/pilot"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 45
forks: 33
openIssues: 14
closedIssues: 56
watchers: 3
contributors: 82
recentReleases: 1
createdAt: "2026-05-21T05:18:49Z"
lastCommitAt: "2026-07-17T05:58:16Z"
lastReleaseAt: "2026-07-17T05:58:53Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 95
undervaluedScore: 45
maintainers: ["tanmoysrt", "Aradhya-Tripathi", "ssiyad"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a1245bea9af553682d82ae2ffd9ec47e83d26e56b5ff9efa7828565b126b838/frappe/pilot"
---

# Pilot

A zero-dependency CLI for managing [Frappe](https://frappeframework.com) environments with Admin UI. Single `bench.toml`. No Docker.

## Improvements from legacy bench

| | Legacy | Pilot |
|---|---|---|
| Dependencies | ~20 Python packages | Zero — stdlib only |
| Marketplace | None | App registry `registry/apps.json` |
| Config | None | Single `bench.toml` |
| Folder layout | Wherever you `bench init` | All benches under `pilot/benches/` |
| Process manager | Honcho / Supervisor | Built-in Procfile runner |
| Python env | pip + virtualenv | [uv](https://github.com/astral-sh/uv) (auto-installed) |
| Admin UI | None | Built-in — app status, sites, logs, task runner, process memory/CPU, live settings |
| Storage | Root filesystem only dedicated disk **or** disk image — no spare disk needed with per-dataset snapshots |

## Requirements

**Debian 12+ / Ubuntu 22.04+** — Python 3.11+ (install.sh needs `sudo` only as a fallback if base
tools are missing and you're not root; not required day-to-day)  
**Fedora 40+** — dnf + systemd; redis is provided by valkey  
**Arch Linux** — pacman + systemd; redis is provided by valkey  
**macOS** — Python 3.11+,…
