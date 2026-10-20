---
repo: "open-tap/homebrew-casks"
name: "homebrew-casks"
description: "This tap actively maintains updated casks, hosts apps removed from homebrew/cask due to gatekeeper, and welcomes unsigned releases from community developers."
readmeQualityOk: true
url: "https://github.com/open-tap/homebrew-casks"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["community-apps", "fails-gatekeeper-check", "homebrew-cask", "homebrew-tap", "macos", "unsigned-apps", "homebrew"]
stars: 80
forks: 43
openIssues: 2
closedIssues: 52
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-09-16T13:59:49Z"
lastCommitAt: "2026-10-20T08:50:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 38
maintainers: ["cask-ci[bot]", "maxinchun5", "SSakutaro"]
openGraphImageUrl: "https://opengraph.githubassets.com/27fd37f061ae1acc9bd3caa91af323d859d73ee93d3ae52990cc5ae0a1c3e335/open-tap/homebrew-casks"
---

# Open Tap

This repository is a **community-driven tap** built on top of [Homebrew Cask](https://github.com/Homebrew/homebrew-cask). It has one clear mission: to keep software installable when the official tap can't.

> Maintaining this tap takes ongoing effort. A ⭐️ helps motivate us and makes the tap more discoverable to others
> -- Thank You! ☺️
>
> **Disclaimer:** Unofficial community tap. Not affiliated with Homebrew official.

## Why This Tap Exists

There are two kinds of casks that end up here:

### **1. Casks disabled by the official tap.**

When Gatekeeper checks cause a cask to be removed from `homebrew/cask`, it would normally be lost — no more installs, no more version bumps. This tap catches those casks and keeps them alive. They are still monitored for new releases, so you stay up to date even after the official tap moves on.

### **2. Unsigned apps from the community.**

Independent developers and community members often ship great software that isn't signed or notarized. The official tap won't take it. This tap will. It's an open space for those apps to be published, installed, and maintained through Homebrew.

In short: if it works, and you want to install it…
