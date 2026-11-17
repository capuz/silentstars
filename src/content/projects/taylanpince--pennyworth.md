---
repo: "taylanpince/pennyworth"
name: "pennyworth"
description: "Pennyworth is a paperclip-based agent manager"
readmeQualityOk: true
url: "https://github.com/taylanpince/pennyworth"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 30]
stars: 10
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-05T11:42:53Z"
lastCommitAt: "2026-11-17T14:38:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 36
maintainers: ["taylanpince"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b57a6094510570940bedb91fe451d05c3f43548be0f92ba9d2eb38693a6d3c1/taylanpince/pennyworth"
---

# Pennyworth

A local-first personal executive assistant. It runs on your own machine, reads your meetings, calendar, Slack and labelled email, and turns them into meeting notes in Obsidian and a single task list you work from a board. It also does research and drafting on request, and runs coding jobs in your repositories when you ask in plain words.

It is built on [Paperclip](https://github.com/paperclipai/paperclip) (agents, tasks, routines) with Codex agents, Obsidian as long-term memory, and small deterministic services in between. It was built for one person's workflow and is opinionated about it: read-only access to every source, nothing is ever sent on your behalf, and judgement stays in agents while matching, routing, writing and deduplication stay in code.

- **Meetings:** transcripts (local files, or Google Meet transcripts and Gemini notes in Drive) are matched to Calendar events. Pennyworth writes a canonical meeting note, appends a dated entry to the right project note, and creates tasks for your own action items.
- **Slack:** messages waiting on your reply, and things you promised, become tasks. They close themselves once you answer, or once you review the PR you…
