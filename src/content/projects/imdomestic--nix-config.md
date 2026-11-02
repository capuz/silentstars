---
repo: "imdomestic/nix-config"
name: "nix-config"
description: "My nix stuff"
readmeQualityOk: true
url: "https://github.com/imdomestic/nix-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [67]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-01-12T17:56:28Z"
lastCommitAt: "2026-11-02T11:35:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 72
maintainers: ["HCHogan", "zty20040403", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/933d279de69eecd0d93146ce4c5ef4069e4a1440a6842f11ae24ebcf9030e530/imdomestic/nix-config"
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
browsing, Raycast for launching everything, and Rex for the terminal. The
actual work happens inside Rex with Neovim (nixvim), either locally
or over SSH on whichever box has the hardware the job needs; see
[`docs/rex.md`](https://github.com/imdomestic/nix-config/blob/HEAD/docs/rex.md).

Behind that is a small fleet, spread over a few places on purpose:

* `tank` is the home server: storage, PostgreSQL, Matrix, Prometheus/Grafana,
  and the bots.
* `taipan` has the…
