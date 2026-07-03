---
repo: "AerynOS/recipes"
name: "recipes"
description: "AerynOS Package Recipes. Build dashboard: https://dash.aerynos.dev"
url: "https://github.com/AerynOS/recipes"
homepage: "https://aerynos.com"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [53, 37]
stars: 93
forks: 87
openIssues: 76
closedIssues: 135
watchers: 8
contributors: 74
recentReleases: 0
createdAt: "2024-01-09T11:40:15Z"
lastCommitAt: "2026-07-03T12:39:44Z"
status: "thriving"
tags: ["solo_builder", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 55
maintainers: ["ReillyBrogan", "hphilm", "Jaredy899"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f17ec88e477067ecfd1b230bd3970f2985e0024b071eb01a74f233aedcf2ccb/AerynOS/recipes"
fundingLinks: ["KO_FI:https://ko-fi.com/AerynOS"]
---

# Recipes

This repository contains all of the recipes required to build AerynOS from source.

## Keeping the repository small while we develop our infra and tooling

We are currently working on technology that will allow us to scale the repo out without having to worry as much about ABI mismatched packages.

Until that technology is ready, we are having to be quite strict in terms of which packages we accept for the repository, in order to avoid exploding the amount of manual rebuilds we need to do.

Please understand and accept that this is a conscious choice driven by necessity.

### Current packaging focus

AerynOS should be considered an in-development, Alpha quality, tech preview Linux distribution, which primarily exists to prove out our tooling approach at the moment. This will obviously change as and when the tooling and infrastructure capabilities mature.

The focus for now is squarely on maintaining our currently supported Desktop stacks + development tooling.

The aim right now is to ship the following:

 - The desktop environment (COSMIC, GNOME and KDE are considered stable)
 - Any "lightweight" compositors with associated stack (such Sway and Niri)
 - Flatpak w/…
