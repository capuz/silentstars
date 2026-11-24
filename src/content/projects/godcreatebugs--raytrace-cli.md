---
repo: "Godcreatebugs/raytrace-cli"
name: "raytrace-cli"
description: "Sandbox to create a local isolation for agentic run. \"Eye of Sauron\" for agents, observe everything from file access to network calls with rayTrace sandbox"
readmeQualityOk: true
url: "https://github.com/Godcreatebugs/raytrace-cli"
homepage: "https://www.raytracer.si/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [54, 21]
topics: ["docker", "gvisor", "npm", "pypi", "sandbox", "sandbox-environment", "sandboxing", "ai-agents", "claude-code", "mcp"]
stars: 77
forks: 27
openIssues: 4
closedIssues: 14
watchers: 1
contributors: 13
recentReleases: 10
createdAt: "2026-10-06T18:51:26Z"
lastCommitAt: "2026-11-23T14:43:29Z"
lastReleaseAt: "2026-11-17T04:48:33Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 42
maintainers: ["Godcreatebugs", "revanthchristober", "Aschenbath"]
openGraphImageUrl: "https://opengraph.githubassets.com/00cf1e286959ab228e26d191c38ac812fdde1165577b1f26dcc8b032133fc796/Godcreatebugs/raytrace-cli"
discussionCount: 4
---

See what your coding agents did, rather than what they said they did.

## Why sandboxing matters

A coding agent doesn't just suggest edits. It runs commands, installs packages,
reads and writes files, and opens network connections — often with permission
to do all of that on your machine.

What it tells you afterwards is a claim. "Tests passed" is what the agent
reported. That report can miss a command that phoned home, a package you didn't
ask for, a file outside the task, or a test whose real exit code was not zero.
And if the agent is running on your laptop, it can reach everything else there:
secrets, private networks, and files that were never part of the work.

Sandboxing is how you change both of those problems. The agent works in an
isolated copy of the project, where it cannot see your machine. And the record
of what happened is taken from outside that sandbox, so the agent cannot turn
it off or edit it.

*Why we built RayTrace — the gap between what an agent reports and what actually ran.*

## How RayTrace sandboxes

RayTrace runs Claude Code or Codex in that isolated copy, records what actually
happened, and shows it in a dashboard.
