---
repo: "boxxy-dev/boxxy"
name: "boxxy"
description: "Stupid Linux Terminal"
readmeQualityOk: true
url: "https://github.com/boxxy-dev/boxxy"
homepage: "https://boxxy.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["claw", "gtk", "linux", "ollama", "rust", "terminal", "llm"]
stars: 131
forks: 5
openIssues: 11
closedIssues: 47
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-19T15:16:29Z"
lastCommitAt: "2026-10-30T10:23:31Z"
lastReleaseAt: "2026-02-28T19:27:01Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 66
undervaluedScore: 35
maintainers: ["miifrommera"]
openGraphImageUrl: "https://opengraph.githubassets.com/10dedd902d9a24c57011480d4c2bbb314054db55fa7f2192d0dff9ff75ca4f14/boxxy-dev/boxxy"
---

# Boxxy

**A self-improving Linux terminal powered by AI characters.**

Boxxy is a full terminal emulator with an agentic AI layer — **BoxxyClaw** — built directly into it. Unlike chat-window add-ons, BoxxyClaw has eyes on your shell, reads your terminal buffer, remembers your preferences, and can autonomously fix broken dependencies, manage system configs, and run your scripts. Just press `Ctrl+/` and you're in.

---

## Install
Boxxy is currently in Preview. 

**Native Nightly** (Requires GTK 4.24, libAdwaita 1.10)
```bash
curl -sSf https://raw.githubusercontent.com/boxxy-dev/boxxy/main/scripts/install.sh | sh
```

**Flatpak Nightly**
```bash
curl -O https://boxxy-dev.github.io/boxxy-flatpak-remote/boxxy.gpg && \
  flatpak remote-add --user --if-not-exists --gpg-import=boxxy.gpg \
  boxxy https://boxxy-dev.github.io/boxxy-flatpak-remote/repo && \
  flatpak install --user boxxy dev.boxxy.BoxxyTerminal
```

---

## Architecture

| Crate | Role |
| :--- | :--- |
| `boxxy-app` | GTK4/Adwaita UI |
| `boxxy-agent` | Host-level daemon — PTY management, shell tools, character claims, D-Bus IPC |
| `boxxy-vte` | Headless terminal engine written in pure Rust |
| `boxxy-claw` | Agentic…
