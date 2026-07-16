---
repo: "app-vitals/shipwright"
name: "shipwright"
description: "The open-source autonomous delivery agent for Claude Code."
readmeQualityOk: true
url: "https://github.com/app-vitals/shipwright"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["ai", "claude-code", "cli", "coding-agent", "mcp", "typescript", "ai-agents", "autonomous-agents", "ci-cd", "claude"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 384
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-06T14:10:22Z"
lastCommitAt: "2026-07-16T06:00:44Z"
lastReleaseAt: "2026-06-18T06:50:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 62
maintainers: ["dmcaulay", "dodizzle", "EugeneTrapeznikov"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1261308038/fd25ee1d-9dda-49e7-8421-147e27306d7c"
discussionCount: 0
---

# Shipwright Harness -- autonomous delivery agent for Claude Code

**The open-source autonomous delivery agent for Claude Code.** A deployable cloud agent and the autonomous coding system that powers it — built on the Shipwright plugin, running on your own codebase.

  <video src="https://github.com/app-vitals/shipwright/raw/main/brand/assets/videos/shipwright-intro.mp4" controls muted width="900"></video>
</p>

  <br />
  <em>Plan → build → review → ship — one task through the pipeline. (Illustrative.)</em>
</p>

> **Brand vs. package:** the project is **Shipwright Harness**; the plugin/package you install is **`shipwright`**.

## Install

```text
/plugin install shipwright@app-vitals/shipwright
```

Requires [Claude Code](https://www.anthropic.com/claude-code). Point it at your own repository — Shipwright is repo-agnostic.

**Deploying the services to Kubernetes?** The `shipwright` Helm chart is published to a Helm repo on each chart version bump:

```bash
helm repo add shipwright https://app-vitals.github.io/shipwright
helm install my-release shipwright/shipwright --namespace shipwright --create-namespace
```

See…
