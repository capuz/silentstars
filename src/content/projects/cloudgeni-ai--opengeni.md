---
repo: "Cloudgeni-ai/opengeni"
name: "opengeni"
description: "OpenGeni is a self-hostable managed agent service for long-running infrastructure work."
url: "https://github.com/Cloudgeni-ai/opengeni"
homepage: "https://opengeni.ai/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["agents", "bun", "infrastructure", "openai", "temporal", "typescript"]
stars: 28
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-04-16T13:47:22Z"
lastCommitAt: "2026-07-01T07:04:58Z"
lastReleaseAt: "2026-06-26T08:48:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 44
maintainers: ["jorgensandhaug", "github-actions[bot]", "davletd"]
openGraphImageUrl: "https://opengraph.githubassets.com/df92f60c1754e5b536152115d6f36206fdaa168f2cc0d38223106d37eba4e78f/Cloudgeni-ai/opengeni"
---

# OpenGeni

OpenGeni is a self-hostable managed agent service for long-running workspace and infrastructure work.

It provides a session-based API for creating, steering, observing, interrupting, and replaying agent runs. The included React app is one client for that API; other products can call the same API directly and let OpenGeni own durable session state, event history, approvals, and final outputs.

Every session picks where it runs. A **managed sandbox** (a fresh cloud box OpenGeni provisions and tears down) and a **Connected Machine** (a computer you enroll — your laptop, a build server, a GPU box) are co-equal, first-class compute targets. A machine-targeted session runs directly on your hardware, under your own files and your own git credentials, with no cloud box in the loop.

If you want to try the managed version, go to [app.opengeni.ai](https://app.opengeni.ai).

## What It Does

- Runs OpenAI Agents SDK agents behind a durable API.
- Streams live session events over SSE while storing the replayable event log in Postgres.
- Coordinates long-running work with Temporal signals for follow-ups, approvals, and interrupts.
- Runs each session on a chosen compute target: a…
