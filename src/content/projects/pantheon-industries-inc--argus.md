---
repo: "Pantheon-Industries-Inc/argus"
name: "argus"
description: "Argus is an open source dataset-and-format-agnostic harness for the densest annotation of robot learning data."
readmeQualityOk: true
url: "https://github.com/Pantheon-Industries-Inc/argus"
homepage: "https://pantheon.inc/research/argus"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 105
forks: 15
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-27T16:20:11Z"
lastCommitAt: "2026-10-22T08:52:12Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 31
maintainers: ["ericligit05"]
openGraphImageUrl: "https://opengraph.githubassets.com/485867fe3be0aa092f95e38d6148daa9e722042088c089dd36f2d9631719edb7/Pantheon-Industries-Inc/argus"
---

> [!IMPORTANT]
> Argus has many tunable command-line options. Please read [Settings](#settings) in full.

### \* DiverseUMI (October 2026)

We released [DiverseUMI](https://huggingface.co/datasets/Pantheon-inc/DiverseUMI-sample100), 99.6 hours of bimanual UMI annotated by Argus at Sol 6.1 High. It spans 12,219 episodes across 179 skills, each with dense action, outcome and progress labels, key events, object state changes, scene graphs and operator recoveries, alongside SLAM-tracked wrist poses and gripper actions.

### \* WGO-Bench (October 2026)

Recently, [Midcentury AI](https://www.midcentury.xyz/blog/optimizing-argus) pushed an adaptation of Argus to SOTA (**50.2% semantic F1**) on WGO-Bench. Because this result uses **Sol 6.1 High**, its advantage over older-model baselines cannot be attributed to the harness alone.

### \* Argus improvements (October 2026)

Argus now annotates depth, tactile and other sensor data jointly with video, state and actions. By default the model inspects any recording with depth or a touch sensor and can read any of its fields at full rate. It also inspects any recording with fields the prompt does not carry, such as EgoDex hand poses. A recording…
