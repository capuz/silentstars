---
repo: "XinbaoQiao/VRAMRadar"
name: "VRAMRadar"
description: "Local-first Windows and macOS GPU capacity monitor for SSH and Slurm servers"
readmeQualityOk: true
url: "https://github.com/XinbaoQiao/VRAMRadar"
homepage: "https://github.com/XinbaoQiao/VRAMRadar"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [70, 21]
topics: ["gpu-monitoring", "macos", "slurm", "ssh", "windows"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-08-26T12:41:05Z"
lastCommitAt: "2026-09-19T08:13:51Z"
lastReleaseAt: "2026-09-12T06:14:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 68
maintainers: ["XinbaoQiao"]
openGraphImageUrl: "https://opengraph.githubassets.com/443df6d79c15ce6393256b2edfe3d2110e8a3395479ef992a71d4d931ef0061f/XinbaoQiao/VRAMRadar"
---

<strong>English</strong> · <a href="README.zh-CN.md">简体中文</a>
</p>

</p>

<h1 align="center">VRAM Radar</h1>

  <strong>Know where your GPU capacity is—without leaving the flow.</strong>
</p>

  A local desktop view of GPU capacity, jobs, and connection state across SSH hosts and Slurm clusters.
</p>

</p>

  · <a href="#quick-start">Quick start</a>
  · <a href="#what-stays-visible">Features</a>
  · <a href="docs/server-config-discovery.md">SSH setup</a>
</p>

## Latest update · v0.9.7

Slurm GPU allocation now stays visible when other users' task details are hidden.

- Read allocated GPU counts directly from scheduler node details, including clusters that omit GPUs from `AllocTRES`.
- Keep unavailable allocation data marked unknown instead of reporting free GPUs.
- Simplify setup guidance and fix English accessibility labels for server navigation and ordering.

Download from [Latest Release](https://github.com/XinbaoQiao/VRAMRadar/blob/HEAD/../../releases/latest). See the [release notes](https://github.com/XinbaoQiao/VRAMRadar/blob/HEAD/docs/release-notes-v0.9.7.md).

## Vibe Coding made the code flow easier—and the server state harder to feel

Agents can edit code, run commands,…
