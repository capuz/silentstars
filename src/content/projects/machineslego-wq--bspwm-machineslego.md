---
repo: "machineslego-wq/BSPWM-machineslego"
name: "BSPWM-machineslego"
description: "Minimalist BSPWM configuration for Debian 13 Trixie with Tokyo Night theme. X11, native Polybar modules, and an automated installer."
readmeQualityOk: true
url: "https://github.com/machineslego-wq/BSPWM-machineslego"
language: "Shell"
languages: ["Shell", "CSS"]
languagePcts: [63, 20]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-16T14:59:28Z"
lastCommitAt: "2026-11-21T11:30:34Z"
lastReleaseAt: "2026-10-23T18:24:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 55
maintainers: ["machineslego-wq"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbea37457db658a6e3b5412d1303c947dd521bdb34f39989c36363656008a8ce/machineslego-wq/BSPWM-machineslego"
---

# BSPWM-machineslego

**English** | [Русский](https://github.com/machineslego-wq/BSPWM-machineslego/blob/HEAD/README.ru.md)

A strict, flat desktop environment for Debian 13 Trixie in the Tokyo Night palette. Sway/Wayland is being adopted step by step; BSPWM/X11 stays as the fallback session.

> **Status:** the setup is gradually moving to Sway; BSPWM/X11 remains fully configured and is started whenever Wayland breaks. Current tasks and rejected ideas are in [TODO.md](https://github.com/machineslego-wq/BSPWM-machineslego/blob/HEAD/TODO.md).

---

## 🧭 Rule of the repository

> **If a stock module solves it, don't write a script.**
> **If a script is needed, run it on-demand and exit immediately.**
> **No background loops. No dead code.**

Every line of code and every running process must justify its existence. This rule is the reason why some features are intentionally **not** implemented — and why others were removed after being tried (see [TODO.md](https://github.com/machineslego-wq/BSPWM-machineslego/blob/HEAD/TODO.md) for the list of rejected ideas).

---
