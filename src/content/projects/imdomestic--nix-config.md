---
repo: "imdomestic/nix-config"
name: "nix-config"
description: "My nix stuff"
readmeQualityOk: true
url: "https://github.com/imdomestic/nix-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [72]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-01-12T17:56:28Z"
lastCommitAt: "2026-10-21T23:37:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 72
maintainers: ["HCHogan", "linwh1te"]
openGraphImageUrl: "https://opengraph.githubassets.com/0209ffe53c548270308173e87bf6d3f21b8152602796848e5cc0cfd5f667645c/imdomestic/nix-config"
---

# nix-config

One flake, four evaluators: NixOS, nix-darwin, standalone Home Manager, and
system-manager. Every machine is a single entry in a shared host registry, and
every user's home is its own closure, separate from the system it runs on.

## How I Work

This repository is my machines, not a template. It isn't meant to be a turnkey
way to copy my setup or to learn Nix, and a lot of it only makes sense if you
live on my network. I'm not a Nix expert either. I value the fleet staying up
over the config being pretty, so when something here looks strange, there is
usually a dated entry in `docs/` about the afternoon that made it that way.

My main machine is a Mac (`praxic`). Day to day I live in three apps: Arc for
browsing, Raycast for launching everything, and Ghostty for the terminal. The
actual work happens inside Ghostty with tmux + Neovim (nixvim), either locally
or over SSH on whichever box has the hardware the job needs.

Behind that is a small fleet, spread over a few places on purpose:

* `tank` is the home server: storage, PostgreSQL, Matrix, Prometheus/Grafana,
  and the bots.
* `taipan` has the GPU and serves local models.
* `h610` runs the second copy of…
