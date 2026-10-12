---
repo: "rascheel/scheel-skills"
name: "scheel-skills"
description: "Agent skill for generating snap packages from existing codebases"
readmeQualityOk: true
url: "https://github.com/rascheel/scheel-skills"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [54, 46]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-30T21:24:07Z"
lastCommitAt: "2026-10-12T11:14:53Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 41
maintainers: ["rascheel", "lorenzo-medici"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d6a8ffeb0c454d5cc07eb029eb61abef645df1d493757e0f0c76102fbd8e2e2/rascheel/scheel-skills"
---

# Snap Packaging Skills

A set of AI agent skills that automate the full lifecycle of packaging applications as snaps — from codebase analysis through building, validating, and publishing to the Snap Store. Compatible with Claude Code, Gemini CLI, and other skill-aware AI agents.

## Skills Overview

| Skill | Purpose |
|-------|---------|
| **snap-builder** | **Start here.** Entry point for the full pipeline: analyze → package → validate → patch → rebuild (looping until clean or max iterations) |
| **snap-analyzer** | Scans a codebase and produces `snap-analysis.json` — a structured packaging specification covering language, plugin, interfaces, hooks, and layouts |
| **snap-oci-analyzer** | Analyzes OCI/container input and produces the same specification with OCI-specific packaging facts (extracts images with [docker-to-snap](https://github.com/canonical/docker-to-snap), cloned automatically when missing) |
| **snapcraft-author** | Pipeline stage: reads `snap-analysis.json` and generates `snap/snapcraft.yaml`, lifecycle hooks, and `SNAP_PACKAGING.md`, then builds the snap |
| **snap-validator** | Installs the snap in a clean LXD container, exercises all apps/daemons, captures…
