---
repo: "GuYu-001/ccg-ros2-workflow"
name: "ccg-ros2-workflow"
description: "L-Site Feng Lao CCG - Robot ROS2 Development Edition"
originalDescription: "L站风佬CCG-机器人ROS2开发版"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/GuYu-001/ccg-ros2-workflow"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [50, 40]
stars: 10
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 10
recentReleases: 1
createdAt: "2026-01-17T08:47:20Z"
lastCommitAt: "2026-11-24T01:23:53Z"
lastReleaseAt: "2026-11-24T01:59:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 65
maintainers: ["fengshao1227", "GuYu-001"]
openGraphImageUrl: "https://opengraph.githubassets.com/24a99f098230cb475528ed2e0891d5642f950558ebb09109d513aafa21ded986/GuYu-001/ccg-ros2-workflow"
---

# CCG-ROS2 - Multi-Model ROS2 Development

[Simplified Chinese](https://github.com/GuYu-001/ccg-ros2-workflow/blob/HEAD/README.zh-CN.md) | English

## Choose the skills you use (v3.7.0)

Install native skills independently, or select them during the CCG setup wizard. Each selected skill gets a `ccg-` entry; its scripts and references live in a versioned source cache.

```bash
npx ccg-ros2-workflow skills catalog
npx ccg-ros2-workflow skills install verify-quality ros2-control
npx ccg-ros2-workflow skills list --installed --json
npx ccg-ros2-workflow skills update
npx ccg-ros2-workflow skills remove ros2-control
# Codex native skills
npx ccg-ros2-workflow skills install verify-quality --target codex
# Configure the framework with a saved selection
npx ccg-ros2-workflow init --skills verify-quality,verify-security
npx ccg-ros2-workflow doctor --json
```
