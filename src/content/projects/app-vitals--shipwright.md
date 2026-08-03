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
stars: 9
forks: 2
openIssues: 0
closedIssues: 383
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-06T14:10:22Z"
lastCommitAt: "2026-08-03T06:42:47Z"
lastReleaseAt: "2026-06-18T06:50:52Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 62
maintainers: ["dmcaulay", "dodizzle"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1261308038/fd25ee1d-9dda-49e7-8421-147e27306d7c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260803%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260803T064631Z&X-Amz-Expires=300&X-Amz-Signature=aa29d0b737f5e6ac50ee36c947b8af5af7951834f3548a56cc5194962ed6e9b9&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTczOTg5MSwibmJmIjoxNzg1NzM5NTkxLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.uJhdyFrWdcCz1g3bEGT3z9nvYmIhw89JWJZTh7OzEKI"
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
