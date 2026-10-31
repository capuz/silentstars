---
repo: "heymegabyte/install.doctor"
name: "install.doctor"
description: "A glorious combination of application / theme settings and a performant cross-platform, desktop-oriented software suite."
readmeQualityOk: true
url: "https://github.com/heymegabyte/install.doctor"
homepage: "https://megabyte.space"
language: "Shell"
languages: ["Shell"]
languagePcts: [48]
topics: ["common", "configurations", "files", "gitlab-ci", "mblabs", "megabytelabs", "miscellaneous", "npm", "other", "package"]
stars: 156
forks: 33
openIssues: 92
closedIssues: 27
watchers: 36
contributors: 6
recentReleases: 0
createdAt: "2023-01-14T04:19:19Z"
lastCommitAt: "2026-10-31T07:45:52Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 78
undervaluedScore: 39
maintainers: ["ProfessorManhattan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/588807533/7cd810a9-728b-4c5d-b285-a5ce6ab3a5ab"
fundingLinks: ["GITHUB:https://github.com/ProfessorManhattan", "OPEN_COLLECTIVE:https://opencollective.com/megabytelabs", "PATREON:https://patreon.com/ProfessorManhattan", "CUSTOM:donate.givedirectly.org"]
discussionCount: 4
---

---

> **Status:** Install Doctor is evolving from a hardcoded chezmoi-and-shell provisioner into a
> **configurable system for setting up and maintaining computers**. The provisioning machinery
> (chezmoi + `software.yml` + the ZX `installx` installer) is preserved; a Cloudflare-native control
> plane (**aid**) layers configuration, a browser dashboard, lazy CLI installation, per-host
> recovery, and bounded improvement cycles on top. This README describes what actually ships today —
> see **[Honest status](#honest-status)** for what is live vs. still in progress.

## What it is

Describe the environment you want once; make each authorized machine a verified, cooperating part of
it. Selected **desktop applications** install now; optional **command-line tools install the first
time you run them**. Every host stays reconciled to its desired state, observable, and recoverable.

The browser app at **[app.install.doctor](https://app.install.doctor)** is the normal interface. A
headless supervisor and an emergency CLI (`aid`) work **without a desktop or GUI**.

## Quick start

On macOS or Linux, run the minimal bootstrap, then pair the machine from any browser:

```bash
bash <(curl…
