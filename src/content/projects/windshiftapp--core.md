---
repo: "Windshiftapp/core"
name: "core"
description: "Self-hosted, open-source work management platform and Jira alternative (AGPL v3)."
readmeQualityOk: true
url: "https://github.com/Windshiftapp/core"
homepage: "https://windshift.sh"
language: "Go"
languages: ["Go", "JavaScript", "Svelte"]
languagePcts: [49, 26, 24]
topics: ["agile", "agpl", "docker", "golang", "issue-tracker", "jira-alternative", "kanban", "project-management", "scrum", "self-hosted"]
stars: 425
forks: 52
openIssues: 51
closedIssues: 162
watchers: 4
contributors: 19
recentReleases: 0
createdAt: "2025-12-15T14:26:44Z"
lastCommitAt: "2026-11-12T11:39:24Z"
lastReleaseAt: "2026-04-10T14:32:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 95
undervaluedScore: 34
maintainers: ["stefan-ernst", "mrtfn", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bad0910414289a062ebf5a000097ecc93968c0b51313028c666b85239136b44/Windshiftapp/core"
discussionCount: 6
---

## What Windshift is

Windshift is a work management platform for teams who want Jira's depth without Jira's weight.

It covers the core of what Jira does: projects, epics, stories, sub-tasks, sprints and backlogs, boards, roadmaps, custom workflows, custom fields, screens, permissions, automation, and dashboards. Filtering and saved searches use Windshift Query Language, a JQL-style query language.

It also replaces the add-ons and adjacent tools you would otherwise stitch together: service management with SLAs and a customer portal, a knowledge base, test management, time tracking, and an asset/CMDB register.

A built-in importer handles the move off Jira.

It ships as a single Go binary with the Svelte frontend built in, SQLite by default or PostgreSQL for data storage. No Java, no Elasticsearch cluster, no per-user pricing, and your data stays on your infrastructure.

## Agents and automation

Windshift runs coding agents against your repositories. Agent Studio binds an agent to a workspace, launches it from a work item, and links the resulting pull request back to that item. Source control integrations cover GitHub, GitLab, Gitea, and Forgejo.

The built-in MCP server exposes…
