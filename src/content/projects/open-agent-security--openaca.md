---
repo: "open-agent-security/openaca"
name: "openaca"
description: "Open Agent Composition Analysis"
url: "https://github.com/open-agent-security/openaca"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-05T19:48:54Z"
lastCommitAt: "2026-06-23T23:17:44Z"
lastReleaseAt: "2026-06-23T16:22:35Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 47
maintainers: ["vinodkone", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecb0cf83e7afad6c5a9720ad60c232932c28634eb08a27d664a92fad45b5d0f5/open-agent-security/openaca"
---

# OpenACA - Open Agent Composition Analysis

Your dependency scanner can see your libraries. It usually cannot see the
plugins, MCP servers, skills, hooks, commands, and bundled dependencies that
compose your AI agent stack.

**OpenACA** is the open reference scanner for **Agent Composition Analysis
(ACA)**. It resolves stable identities for agent-stack components, builds an
Agent BOM, and matches those components against known security advisories
(OSV / GHSA / CVE / MAL).

> **Status:** V0 - early and evolving, available on
> [PyPI](https://pypi.org/project/openaca/).
> Start with the [Quickstart](#quickstart), then see the
> [docs](https://github.com/open-agent-security/openaca/blob/main/docs/README.md)
> for scan modes, coverage, CLI reference, and schema details.

## What OpenACA does

- **Identity Resolution** - normalize agent config such as `npx
  @scope/foo@1.4.0`, Git-backed skills, and plugin marketplace refs into
  stable component identities.
- **Composition Graph** - show how components enter the stack:
  host -> plugin -> skill / MCP server / hook -> dependency.
- **Risk Attribution** - trace a vulnerable dependency back to the plugin,
  skill, or MCP server that…
