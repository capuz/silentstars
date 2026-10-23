---
repo: "entireio/entire-graph"
name: "entire-graph"
description: "🪾 Make your agents more efficient with a precomputed map of your Git repository: ranked code search plus definitions, callers, types, routes, and change impact, each with file:line locations."
readmeQualityOk: true
url: "https://github.com/entireio/entire-graph"
language: "C"
languages: ["C"]
languagePcts: [95]
stars: 60
forks: 72
openIssues: 28
closedIssues: 12
watchers: 1
contributors: 20
recentReleases: 9
createdAt: "2026-05-28T12:38:52Z"
lastCommitAt: "2026-10-23T08:47:09Z"
lastReleaseAt: "2026-09-06T06:16:40Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 85
undervaluedScore: 44
maintainers: ["evisdren", "ashtom", "khaong"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2645851ea6ce24de9c31cbf290f773a049ec0e912c45af6bd362f4abc26522e/entireio/entire-graph"
---

# Entire Graph

Agents are continually spending their budgets before they write the first line
of code, rummaging through files, grepping for function names, and re-reading
the same files and configs, as they attempt to understand a codebase fresh with
each session. According to [OpenRouter's Head of Insights](https://www.linkedin.com/posts/peterjameswalker_february-6th-2026-potentially-the-last-share-7493029881841344512-IK89/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABfX0nABz6sCWbPldiV_9liETVfz5fRLAD0), agentic
token usage grew 14x between February and August 2026, up from 0.51 trillion tokens
to 7.3 trillion.

Entire Graph is a plugin for the Entire CLI specifically designed to enable your
agents to stop paying that cost. It hands your agent a precomputed map of a Git
repository: ranked code search plus definitions, callers, types, routes, and
change impact, each with `file:line` locations. The built-in analyzer parses the
repository locally with tree-sitter and makes no network requests, model calls,
or API-key lookups.

When running [LoCoMo](https://github.com/snap-research/locomo) against competitors,
we measured the top score of 94.74% for Entire Graph. We also…
