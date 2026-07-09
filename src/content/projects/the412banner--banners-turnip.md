---
repo: "The412Banner/Banners-Turnip"
name: "Banners-Turnip"
description: "Automated bleeding-edge Mesa Turnip Vulkan driver builds for Qualcomm Adreno GPUs — packaged for AdrenoTools, updated on every upstream Mesa commit."
readmeQualityOk: true
url: "https://github.com/The412Banner/Banners-Turnip"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [66, 34]
stars: 113
forks: 11
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-02-21T02:37:34Z"
lastCommitAt: "2026-07-09T20:44:22Z"
lastReleaseAt: "2026-04-27T18:01:41Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 32
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/65f4da1d86fa0b8b3eb4108edb650067476d89f4edda02fd51828b8123e63cd9/The412Banner/Banners-Turnip"
---

</p>

# Banners-Turnip

> Automated, bleeding-edge builds of the [Mesa Turnip](https://docs.mesa3d.org/drivers/freedreno.html) Vulkan driver — compiled directly from the latest upstream Mesa commits and packaged for [AdrenoTools](https://github.com/K11MCH1/AdrenoToolsDrivers)-compatible apps on Qualcomm Adreno GPUs.

---

## What Is This?

[Turnip](https://docs.mesa3d.org/drivers/freedreno.html) is the open-source Mesa Vulkan driver for Qualcomm Adreno GPUs — developed as part of the [Mesa](https://gitlab.freedesktop.org/mesa/mesa) project and maintained by the Freedreno community. Unlike the proprietary Qualcomm driver, Turnip is fully open-source and often ships fixes and feature support ahead of official Qualcomm releases.

This repo automatically builds Turnip from the absolute latest commit on `mesa/main` — no waiting for official Mesa releases. A [Mesa upstream watcher](https://github.com/The412Banner/Banners-Turnip/blob/HEAD/.github/workflows/mesa-watcher.yml) polls for new commits every hour and triggers a fresh build automatically whenever `mesa/main` advances. The result is an [AdrenoTools](https://github.com/K11MCH1/AdrenoToolsDrivers)-compatible ZIP you can drop…
