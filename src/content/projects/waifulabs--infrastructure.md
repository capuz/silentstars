---
repo: "waifulabs/infrastructure"
name: "infrastructure"
description: "Fiance unapproved kubernetes cluster running Talos, Flux, Renovate and GHA."
readmeQualityOk: true
url: "https://github.com/waifulabs/infrastructure"
homepage: "https://discord.gg/home-operations"
language: "YAML"
languages: ["YAML", "JSON"]
languagePcts: [75, 23]
topics: ["kubernetes", "k3s", "home-automation", "home-assistant", "node-red", "k8s-at-home", "renovate", "ansible"]
stars: 232
forks: 4
openIssues: 1
closedIssues: 55
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2021-08-24T00:44:55Z"
lastCommitAt: "2026-09-19T02:47:30Z"
lastReleaseAt: "2023-04-16T00:10:49Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 42
maintainers: ["waifuz-bot[bot]", "kashalls"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e0b445757c5ffb330e265c82821dd820cbc8bb9c85630cd6d3ff10b7fb68bc3/waifulabs/infrastructure"
fundingLinks: ["GITHUB:https://github.com/kashalls"]
---

# Kashall's Infrastructure

</div>

## Overview

This repository runs my **home lab** — a few computers in my house that host the apps and services my household depends on (media library, home automation, dashboards, chat, and more) instead of renting them from big cloud providers.

The twist: nothing is configured by hand. The *entire* setup is written down as code in this repo, and software continuously keeps the real machines matched to it. Push a change and it rolls out on its own; if a machine dies, I can rebuild it from scratch in minutes.

<details>
<summary>🤓 <b>For the technically curious</b> — the interesting bits</summary>

- **[Talos Linux](https://www.talos.dev/)** — a minimal, immutable OS with no SSH or shell; every node is defined entirely from [`talos/`](https://github.com/waifulabs/infrastructure/blob/HEAD/talos/) and managed over an API.
- **[Flux](https://fluxcd.io/) GitOps** — the cluster reconciles itself to match this repo. Every change is a reviewed commit, never a manual `kubectl apply`.
- **[Cilium](https://cilium.io/) + BGP** — pods get routable IPs and LoadBalancer services are advertised straight to my UniFi router via BGP.
- **[External DNS UniFi…
