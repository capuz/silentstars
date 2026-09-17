---
repo: "projectbluefin/bluefin"
name: "bluefin"
description: "Bluefin - The next generation Linux workstation"
readmeQualityOk: true
url: "https://github.com/projectbluefin/bluefin"
homepage: "https://projectbluefin.io"
language: "JSON"
languages: ["JSON", "Shell"]
languagePcts: [49, 33]
stars: 35
forks: 22
openIssues: 37
closedIssues: 274
watchers: 1
contributors: 7
recentReleases: 7
createdAt: "2026-05-30T09:10:01Z"
lastCommitAt: "2026-09-17T08:50:57Z"
lastReleaseAt: "2026-07-04T04:26:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "fork_magnet"]
healthScore: 95
undervaluedScore: 54
maintainers: ["github-actions[bot]", "castrojo"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f62f8a4b2964e1574b55b5b5ce4a264391bb968e306fd0703f27c37d18cc3ef/projectbluefin/bluefin"
fundingLinks: ["GITHUB:https://github.com/castrojo", "GITHUB:https://github.com/tulilirockz"]
---

# Bluefin
*Deinonychus antirrhopus*

**Bluefin** is a cloud-native desktop operating system built on Fedora Linux. For end users it provides a system as reliable as a Chromebook with near-zero maintenance. For developers, it offers a cloud-native workflow with integrated container tools, declarative system management, and seamless CI/CD integration.

🌐 **[Try Bluefin](https://projectbluefin.io/#scene-picker)**

## Latest Release

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://docs.projectbluefin.io/img/cards/bluefin-dark.png">
  </picture>
</a>

## Images

Full catalog at [docs.projectbluefin.io/images →](https://docs.projectbluefin.io/images/)

### Bluefin

Primary Bluefin desktop image for most systems.

```bash
# Stable — recommended, daily automated promotion
sudo bootc switch ghcr.io/projectbluefin/bluefin:stable --enforce-container-sigpolicy
# Stable — NVIDIA
sudo bootc switch ghcr.io/projectbluefin/bluefin-nvidia:stable --enforce-container-sigpolicy

# Testing — tracks Fedora latest, daily rebuilds
sudo bootc switch ghcr.io/projectbluefin/bluefin:testing --enforce-container-sigpolicy
# Testing — NVIDIA
sudo bootc switch…
