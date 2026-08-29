---
repo: "sagarbehere/working-memory-system"
name: "working-memory-system"
description: "Personal working-memory system on Hermes Agent: capture thoughts in plain language, the agent files, retrieves, and reminds you — git-versioned, self-hosted."
readmeQualityOk: true
url: "https://github.com/sagarbehere/working-memory-system"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-26T08:20:34Z"
lastCommitAt: "2026-08-29T17:27:06Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["sagarbehere", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6c3ba330737056963c2f76eaa866c221fed456e0c03e9ee4c2304f629c6c076/sagarbehere/working-memory-system"
---

# Working Memory System

> [!WARNING]
> **This README is out of date and is pending a full rewrite.** On 2026-08-29
> the system was deliberately simplified: the local reminder store, its
> five-minute cron tick, and the SQLite records store were all removed, and
> the raw log became a plain verbatim transcript. Reminders now live entirely
> in Todoist. Config keys, file layout, and several components described below
> no longer exist.
>
> For what the system actually is today, read
> [`CLAUDE.md`](https://github.com/sagarbehere/working-memory-system/blob/HEAD/CLAUDE.md) (orientation),
> [`working-memory-system-spec-v3.md`](https://github.com/sagarbehere/working-memory-system/blob/HEAD/working-memory-system-spec-v3.md)
> (plumbing), and
> [`second-brain-implementation-guide.md`](https://github.com/sagarbehere/working-memory-system/blob/HEAD/second-brain-implementation-guide.md)
> (why it is shaped this way).

A capture-anywhere second brain on top of [Hermes Agent](https://hermes-agent.nousresearch.com): dump a thought in plain language from any chat, and the agent files it, organizes it, retrieves it later, and reminds you on schedule. No folders, no categories, no notes app to…
