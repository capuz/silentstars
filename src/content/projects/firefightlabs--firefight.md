---
repo: "FireFightLabs/firefight"
name: "firefight"
description: "Open-source AI SRE and incident management. Finds the root cause and fixes it."
readmeQualityOk: true
url: "https://github.com/FireFightLabs/firefight"
homepage: "https://firefight.app"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [85]
topics: ["agentic-ai", "ai-agents", "alerting", "devops", "incident-management", "incident-response", "mcp", "model-context-protocol", "open-source", "postmortem"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-21T09:59:37Z"
lastCommitAt: "2026-10-20T08:49:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 62
maintainers: ["UrosNikolic", "firefight-labs[bot]", "firefight-local[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7fa6aea471c30cbebe37f9925ad3e369a3abc38eae2ca94c831576e178c5013/FireFightLabs/firefight"
---

Halon finds the root cause and ships the fix. FireFight runs the incident in Slack.

## What it does

When something breaks in production, Halon figures out why and helps you fix it.

- **It finds the cause.** An alert or a question in Slack gets it started. Halon checks what changed recently, the logs, the metrics and your code, like an engineer on call would. It posts what it's checking as it goes.
- **It shows its work.** Every answer says how sure Halon is and links to the log line, graph or commit behind it. If it couldn't check something, it says so.
- **It fixes it, with your say.** Halon can roll back, restart, or open a pull request with the fix. Reading never needs permission. Small changes just happen and can be undone. Anything risky asks the right person in Slack first. Everything it does is logged.
- **It runs the incident too.** FireFight opens the Slack channel, assigns roles, pages whoever is on call, updates your status page and drafts the postmortem.

Run it on your own servers, or use FireFight Cloud.

## What Halon knows

Halon starts every run from your team's context: the resource map of what runs where, read live from your connected tools, the service…
