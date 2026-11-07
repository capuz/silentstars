---
repo: "laurigates/claude-plugins"
name: "claude-plugins"
description: "Claude Code plugins for development workflows"
readmeQualityOk: true
url: "https://github.com/laurigates/claude-plugins"
language: "Shell"
languages: ["Shell"]
languagePcts: [73]
topics: ["claude-code", "managed-by-opentofu", "plugins"]
stars: 59
forks: 6
openIssues: 110
closedIssues: 722
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-16T11:24:04Z"
lastCommitAt: "2026-11-07T16:11:50Z"
lastReleaseAt: "2025-12-28T06:21:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 46
maintainers: ["laurigates", "claude", "laurigates-release-please[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1117480701/538f7a95-e076-4f6e-aeea-cab92869832c"
discussionCount: 1
---

# Claude Plugins

> Experiments (`claude-probe`, `skill-catalog-routing`, `subagent-compaction`) live under `experiments/`, each exposed as a `just` module.

A curated collection of 49 Claude Code plugins providing 400+ skills and 22 agents for development workflows.

The same skills, subagents and safety hooks also run in **OpenCode**, **pi** and
**Antigravity CLI**.
Skills are read in place from a checkout of this repo, so a skill edit reaches
every harness without a copy step; subagents and hooks are exported to each
tool's own format. Browse everything in the [plugin catalog](https://github.com/laurigates/claude-plugins/blob/HEAD/docs/CATALOG.md).

## Supported harnesses

| Harness | Skills | Subagents | Safety hooks |
|---------|--------|-----------|--------------|
| [Claude Code](#claude-code) | Native plugin marketplace | Native | Native |
| [OpenCode](#opencode) | Skill adapter: a `search_skills` tool plus the top 5 matches injected each turn | Exported to OpenCode's agent format | Exported as OpenCode JS plugins |
| [pi](#pi) | Skill adapter (same as OpenCode) | Exported for `@tintinweb/pi-subagents` | Run by a generated pi extension |
| [Antigravity…
