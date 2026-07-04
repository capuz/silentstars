---
repo: "patchloom/patchloom"
name: "patchloom"
description: "Single-binary CLI that gives AI agents safe, structured file editing"
readmeQualityOk: true
url: "https://github.com/patchloom/patchloom"
homepage: "https://github.com/patchloom/patchloom"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["ai-agents", "automation", "cli", "code-generation", "developer-tools", "devtools", "file-editing", "json", "mcp", "model-context-protocol"]
stars: 6
forks: 1
openIssues: 7
closedIssues: 688
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-14T19:36:10Z"
lastCommitAt: "2026-07-04T22:20:33Z"
lastReleaseAt: "2026-06-21T04:04:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 69
maintainers: ["SebTardif", "patchloom-release[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1239125030/4b5abc13-1b7d-4406-a82b-574ab66ac497"
discussionCount: 0
---

</p>

# Patchloom

**One binary. Every platform. Structured file edits for AI agents.**

Patchloom is a single-binary CLI that gives AI coding agents safe, structured file editing on any operating system. It edits JSON, YAML, and TOML by selector (not regex), preserves comments, understands code structure across 20 languages, batches multiple file edits into one tool call, and works identically on Linux, macOS, and Windows.

```bash
# Edit a YAML value by selector without breaking comments or formatting
patchloom doc set config.yaml database.port 5432 --apply

# Batch 6 file edits into a single tool call
patchloom batch --apply <<'EOF'
doc.set package.json version "2.0.0"
doc.set config.yaml app.version "2.0.0"
doc.set config.toml project.version "2.0.0"
replace README.md "1.0.0" "2.0.0"
replace CHANGELOG.md "1.0.0" "2.0.0"
file.create VERSION "2.0.0"
EOF
```

**[Why Patchloom?](#why-patchloom)** | **[Install](#install)** | **[Quick start](#quick-start)** | **[Commands](#commands)** | **[Comparison](#how-patchloom-compares)** | **[Architecture](#how-it-works-with-your-ai-agent)** | **[Status](#status)**

---

## Why Patchloom?

### The problem

AI agents edit files through tool…
