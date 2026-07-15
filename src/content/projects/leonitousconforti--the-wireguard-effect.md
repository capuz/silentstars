---
repo: "leonitousconforti/the-wireguard-effect"
name: "the-wireguard-effect"
description: "Cross platform wireguard api client for nodejs built on wireguard-go with effect-ts"
readmeQualityOk: true
url: "https://github.com/leonitousconforti/the-wireguard-effect"
homepage: "https://leonitousconforti.github.io/the-wireguard-effect/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["effect-ts", "typescript", "vpn", "wireguard"]
stars: 22
forks: 0
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2024-02-19T00:37:32Z"
lastCommitAt: "2026-07-15T05:55:00Z"
lastReleaseAt: "2026-06-08T04:53:27Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 67
maintainers: ["leonitousconforti", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2014887e5b215df421662f9e7fd91ad0839fede96dbd3ecece7cda69494c04ea/leonitousconforti/the-wireguard-effect"
fundingLinks: ["GITHUB:https://github.com/leonitousconforti"]
---

# the-wireguard-effect

the-wireguard-effect has turned into a couple of things. It started as a `Cross platform wireguard api client for nodejs built on wireguard-go with effect-ts`, but has since added a cross platform CLI to control some wireguard interfaces without needing to install anything, a wireguard demo server that implements the same protocol as demo.wireguard.com so it will work with all the existing examples, a lot of helpers and examples for config generation, and unit + e2e testing.

## Motivation/ideation :bulb:

The motivation for this project came from wanting to create wireguard configurations and ultimately control a wireguard interface from JS for a different project of mine. The motivation for adding the CLI, demo-server, config generation, and testing/experiments came from me wanting to experiment with and learn more about wireguard .

## Goals :white_check_mark:

- [x]   - fully typed wireguard configurations (thanks to @effect/schema)
- [x]   - doesn't require wireguard to be installed (ships with most prebuilds)
- [x]   - cross platform (supports linux amd64, linux arm64, mac amd64, mac arm64, and windows amd64)
- [x]   - userspace api implementation…
