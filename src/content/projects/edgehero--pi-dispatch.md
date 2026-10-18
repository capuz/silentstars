---
repo: "edgehero/pi-dispatch"
name: "pi-dispatch"
description: "Run the pi coding agent as a self-hosted service: jobs from cron, the CLI, or GitHub, GitLab, Forgejo and Azure DevOps events, each in a locked down Docker or Podman container, with a durable queue, spend caps checked before anything is spent, and a live admin panel."
readmeQualityOk: true
url: "https://github.com/edgehero/pi-dispatch"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["ai", "ai-tools", "chatgpt", "claude", "kimi", "pi", "pi-extension", "pi-package", "deepseek", "glm"]
stars: 183
forks: 9
openIssues: 4
closedIssues: 224
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-07-15T10:39:59Z"
lastCommitAt: "2026-10-18T08:15:51Z"
lastReleaseAt: "2026-08-01T13:27:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 33
maintainers: ["edgehero"]
openGraphImageUrl: "https://opengraph.githubassets.com/250a7c68b1029ca50350ca867b760f344f033faba87f51322a80aac0d0eb9a49/edgehero/pi-dispatch"
---

service" width="880">

# pi-dispatch

**Let a coding agent work on your repositories while you are not watching, without surprise bills and
without giving it the keys to your machine.**

[pi](https://github.com/earendil-works/pi) is an open source coding agent that you normally run in a
terminal. pi-dispatch runs it as a background service on your own machine or server. A job starts on a
schedule, from the command line, or when an issue, comment or pull request arrives from a forge (GitHub,
GitLab, Forgejo or Azure DevOps). Each job gets its own locked down container. The agent does one piece
of work
there, pi-dispatch records what it did and what it cost, and the container is thrown away.

pi has no job queue, no concurrency control, no spend limit and, by its own README, no permission
system. pi-dispatch adds exactly that layer and nothing else. It is not another agent to compare with
the one you use. It is the queue, the budget and the box around the pi you already run, steered by the
`.pi/` setup your repo already has.

What you get:

- **A container around every job.** Each job runs non root, with every Linux capability dropped, in a
  container that is deleted afterwards.…
