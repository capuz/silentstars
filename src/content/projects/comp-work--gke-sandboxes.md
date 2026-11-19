---
repo: "comp-work/gke-sandboxes"
name: "gke-sandboxes"
description: "Self-hosted workspace sandboxes on GKE with gVisor and filesystem snapshots."
readmeQualityOk: true
url: "https://github.com/comp-work/gke-sandboxes"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 78
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-11-17T19:13:38Z"
lastCommitAt: "2026-11-19T05:03:27Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 8
maintainers: ["FOLLGAD", "pontusab"]
openGraphImageUrl: "https://opengraph.githubassets.com/50b68faf5f39b14b59b18d702696d558598041c74f4c5f18af13ba3a60e16dc1/comp-work/gke-sandboxes"
---

# gke-sandboxes

Give each cloud agent its own Linux sandbox, in your own Google Cloud project. A sandbox runs commands and keeps files. Put it to sleep while the user is away, and open the same ID later to get the files back.

A 2 vCPU / 4 GB sandbox costs about **1.9¢ for each hour it is awake**, cluster overhead included. Daytona and E2B list 16.6¢ for the same hour. A sleeping sandbox costs only its storage.

## Set it up

Paste this into Claude Code, Cursor, Codex or another coding agent:

```text
Set up gke-sandboxes in my Google Cloud project. Follow these instructions step by step:
https://raw.githubusercontent.com/comp-work/gke-sandboxes/main/skills/setup-gke-sandboxes/SKILL.md
```

The agent deploys the cluster with Terraform, runs the verifier, and shows you how to connect your backend. Or [deploy it by hand](https://github.com/comp-work/gke-sandboxes/blob/HEAD/docs/deploy.md).

Then use it from your backend, on Node.js 22+ or Bun:

```sh
npm install @getenergy/gke-sandboxes
```
