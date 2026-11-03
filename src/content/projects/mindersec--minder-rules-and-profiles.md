---
repo: "mindersec/minder-rules-and-profiles"
name: "minder-rules-and-profiles"
description: "A repository containing example Minder rules and profiles"
readmeQualityOk: true
url: "https://github.com/mindersec/minder-rules-and-profiles"
language: "Starlark"
languages: ["Starlark", "Open Policy Agent"]
languagePcts: [55, 40]
stars: 24
forks: 23
openIssues: 22
closedIssues: 39
watchers: 9
contributors: 28
recentReleases: 0
createdAt: "2023-11-01T13:39:29Z"
lastCommitAt: "2026-11-03T19:05:43Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 64
maintainers: ["dependabot[bot]", "intelligent-ears", "evankanderson"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7eeb04625b14357259949b4f54826957f516e73dcb2f5c57d45887a25b9fe6b/mindersec/minder-rules-and-profiles"
---

# Minder Rules and Profiles

A repository containing Minder rules and profiles describing security policies and various tool integrations.

## What are rule types, profiles, and data sources?

Minder is a tool that allows you to define security policies and integrate with various tools to enforce those policies.
Its engine is designed to be extensible through rule types, profiles and data sources, allowing you to integrate your own
logic and processes.

A profile defines your security policies that you want to apply to your software supply chain. Profiles contain rules
(or rule types) that query data in a provider, and specifies whether Minder will issue alerts or perform automatic
remediations when an entity is not in compliance with the policy.

Profiles in Minder allow you to group and manage rules for various entity types, such as `repositories`, `pull requests`,
`artifacts`, etc., across your registered GitHub repositories.

Data sources are designed to enrich the information available about an entity, allowing us to make more informed policy
evaluations.
Unlike providers, which create entities, a data source offers additional information about an existing entity or one of…
