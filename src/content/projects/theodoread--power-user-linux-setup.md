---
repo: "TheodoreAD/power-user-linux-setup"
name: "power-user-linux-setup"
description: "Configurations for all manner of Linux system and software"
readmeQualityOk: true
url: "https://github.com/TheodoreAD/power-user-linux-setup"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2019-08-02T13:31:42Z"
lastCommitAt: "2026-09-12T08:04:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 68
maintainers: ["TheodoreAD"]
openGraphImageUrl: "https://opengraph.githubassets.com/1decd278ea7ccc2e5b287692d55ba8341e5080493483cd28e96d1c4db909261c/TheodoreAD/power-user-linux-setup"
---

# Power User Linux Setup (PULSE)

An opinionated, reproducible workstation setup for Ubuntu 24.04: one `setup.toml` manifest and a set
of [`invoke`](https://www.pyinvoke.org/) tasks that take a fresh install to a fully configured
dev/desktop environment in one run — shell (zsh, Oh My Zsh, Powerlevel10k), languages and CLIs
(Python/uv, Go, Rust, Node, kubectl, gcloud, ...), GNOME, fonts, terminal config, and more, all
declared in one place and safe to re-run.

Along with source control, this is meant to minimize the impact of hardware failure and to make it
easy to reproduce your setup on a new machine, with the least amount of manual reconfiguration.

## Use cases

- **Full workstation** — bare-metal or VM Ubuntu 24.04 desktop, GNOME included.
- **Headless / server** — `PULSE_EXCLUDE_TAGS` skips anything needing a display or hardware access.
- **Dev container** — the same manifest builds a Dockerfile-based dev image.
- **WSL2** — a diagnostic task (`inv wsl.check`) and a one-shot install task (`inv wsl.install`)
  with a documented tag profile for Windows/WSL2.

## Requirements

- Ubuntu 24.04 (bare metal, WSL2, or a container base image)
- `sudo` access
- `git`, `curl`, `bash` —…
