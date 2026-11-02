---
repo: "kuasar-sandbox/sandboxer"
name: "sandboxer"
description: "MicroVM lifecycle engine with snapshot, restore, guest control, and on-demand data loading."
readmeQualityOk: true
url: "https://github.com/kuasar-sandbox/sandboxer"
homepage: "https://github.com/kuasar-sandbox/kuasar-sandbox"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["ai-agent", "cloud-hypervisor", "kuasar-sandbox", "kvm", "microvm", "sandbox", "snapshot"]
stars: 5
forks: 7
openIssues: 21
closedIssues: 111
watchers: 0
contributors: 6
recentReleases: 9
createdAt: "2026-07-03T03:40:10Z"
lastCommitAt: "2026-11-02T15:17:03Z"
lastReleaseAt: "2026-09-15T00:11:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 96
undervaluedScore: 82
maintainers: ["fullof-work", "novahe"]
openGraphImageUrl: "https://opengraph.githubassets.com/680c6b5e12644354f85386a066055b00553b58f4f98058631c9f1160ec0bf500/kuasar-sandbox/sandboxer"
---

[English](https://github.com/kuasar-sandbox/sandboxer/blob/HEAD/README.md) | [简体中文](https://github.com/kuasar-sandbox/sandboxer/blob/HEAD/README_zh.md)

# sandboxer

For the first cross-component sandbox or Demo, follow the project
[Quick Start](https://github.com/kuasar-sandbox/kuasar-sandbox/blob/main/docs/quickstart.md)
with the matching aggregate release and
[workbench](https://github.com/kuasar-sandbox/kuasar-sandbox/blob/main/workbench/README.md).
This component can still be built/deployed independently; workbench is not a
production runtime dependency. Published architectures are specific to the
selected release; source support does not imply all historical assets exist.

`sandboxer` is the **MicroVM lifecycle engine** for [Kuasar Sandbox](https://github.com/kuasar-sandbox/kuasar-sandbox). It creates sandboxes, captures and restores state, controls the guest, serves block devices, loads memory and disk data on demand, and coordinates each sandbox's cgroup, balloon, and VMM lifecycle.

The repository is both a component of the complete Kuasar Sandbox platform and an independently usable runtime engine. It exposes narrow Go packages and host-local protocols instead of…
