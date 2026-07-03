---
repo: "rudrankriyam/Core-AI-Framework-Lab"
name: "Core-AI-Framework-Lab"
description: "A practical lab for exploring Apple's Core AI framework, model assets, specialization, and on-device inference."
url: "https://github.com/rudrankriyam/Core-AI-Framework-Lab"
homepage: "https://developer.apple.com/core-ai/"
language: "Swift"
languages: ["Swift"]
languagePcts: [85]
topics: ["ai", "apple", "apple-silicon", "core-ai", "generative-ai", "ios", "machine-learning", "macos", "metal", "model-conversion"]
stars: 61
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-06-08T18:53:57Z"
lastCommitAt: "2026-07-03T12:21:42Z"
lastReleaseAt: "2026-06-24T06:28:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 36
maintainers: ["rudrankriyam"]
openGraphImageUrl: "https://opengraph.githubassets.com/de2f01bd09aa76a517e13a1bb68a749d43700c056f8a55ec8e0051d1b4aa3d1a/rudrankriyam/Core-AI-Framework-Lab"
fundingLinks: ["GITHUB:https://github.com/rudrankriyam"]
---

# Core AI Framework Lab

</p>

A native SwiftUI workbench for discovering, converting, inspecting, running,
benchmarking, and packaging models with Apple's `CoreAI.framework`.

- **Explore** 33 pinned Apple model recipes across language, vision, audio, and
  diffusion.
- **Run** task-specific playgrounds or inspect an arbitrary `.aimodel` through
  the generic Function Workbench.
- **Prove and package** results with project provenance, benchmark evidence,
  physical-device evidence, and verified Swift integration exports.

> [!NOTE]
> Core AI is the asset, specialization, and runtime layer explored here. It is
> not Core ML or `FoundationModels`; only the Qwen adapter bridges through
> `FoundationModels`.

## Contents

- [Quick Start](#quick-start)
- [Workspaces](#workspaces)
- [Common Workflows](#common-workflows)
- [Model Workflows](#model-workflows)
- [For Contributors and Agents](#for-contributors-and-agents)
- [Current Boundaries](#current-boundaries)
- [Documentation](#documentation)
- [License](#license)

## Quick Start

1. Select Xcode 27 and confirm the toolchain:

   ```bash
   export DEVELOPER_DIR=/Applications/Xcode-beta.app/Contents/Developer
   xcodebuild -version…
