---
repo: "OneYoungMean/KimodoUnityBridge"
name: "KimodoUnityBridge"
description: "Free Local Unity AI Motion Generate Tool.Based By Nvlab Kimodo. "
readmeQualityOk: true
url: "https://github.com/OneYoungMean/KimodoUnityBridge"
language: "C#"
languages: ["C#", "Python"]
languagePcts: [56, 34]
topics: ["ai", "animation", "motion", "nvidia", "unity", "kimodo"]
stars: 92
forks: 16
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-05-19T09:07:32Z"
lastCommitAt: "2026-08-11T04:48:17Z"
lastReleaseAt: "2026-08-07T01:53:19Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 39
maintainers: ["OneYoungMean", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6905e5543559efe7727288b8cc2ff3f8f10a27720a7320892de95edcec0e5c84/OneYoungMean/KimodoUnityBridge"
---

# Kimodo Unity Motion Tools

Kimodo adds local AI humanoid animation generation to an existing Unity project. It supports prompt-driven motion, pose and end-effector constraints, analysis, baking, retargeting, Animator content, Timeline authoring, and runtime motion playback.

- Runs from a project-owned local runtime.
- Supports Windows, macOS, and Linux; CUDA is the primary acceleration path and CPU fallback is available.
- Keeps animation generation and assets inside the Unity project workflow.

## Requirements

- Unity 2022.3 or newer
- An existing Unity project
- A character with a valid Humanoid Animator for humanoid workflows
- At least 8 GB memory and sufficient disk space for the selected models

## Install

In Unity Package Manager, choose **Add package from git URL** and enter:

```text
https://github.com/OneYoungMean/KimodoUnityBridge.git
```

Or add the dependency to `Packages/manifest.json` without changing other entries:

```json
"com.unity.kimodo_unity_motion_tools": "https://github.com/OneYoungMean/KimodoUnityBridge.git"
```

## Minimal start

1. Import the package's **Light Sample** from Unity Package Manager, or open the…
