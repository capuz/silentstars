---
repo: "will-be-done/will-be-done"
name: "will-be-done"
description: "Local-first task manager with a visual weekly timeline. Works offline, syncs across devices, and self-hosts with one Docker command. Uses SQLite by default, so no external database is needed."
readmeQualityOk: true
url: "https://github.com/will-be-done/will-be-done"
homepage: "https://will-be-done.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["kanban", "local-first", "offline-first", "personal-task-manager", "self-hosted", "task-manager", "bun", "productivity", "pwa", "react"]
stars: 184
forks: 13
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-01-17T09:39:09Z"
lastCommitAt: "2026-11-10T11:38:36Z"
lastReleaseAt: "2026-05-02T11:10:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 36
maintainers: ["quolpr", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b92b5cd9e1dd15143744c59167b8abaf0d52d1a421f4e11b1a46c3a1833d20c/will-be-done/will-be-done"
discussionCount: 8
---

# Will Be Done

**An offline-first, self-hosted task planner built around a visual weekly timeline.**

The workflow is short. Collect tasks, place them on a weekly timeline, and keep the few you care about right now in Stash. It is also local-first. Your tasks stay available offline, changes apply without a round trip to the server, and sync catches up across devices when your server is back.

I want it to feel fast in the same way Linear feels fast. The app should open straight into your tasks, without a big loading spinner first. It reads from local persistent storage on demand, so startup should stay quick even after years of saved tasks.

Under the hood, Will Be Done runs on [HyperDB](https://github.com/will-be-done/hyperdb), my own local-first database layer. I built it after more than two years of researching what kind of database would actually fit the apps I want to make: offline-first, reactive, fast at startup, and able to share the same typed data logic between the browser and the server.

[Try the live demo](https://demo.will-be-done.app) | [Use the cloud app](https://app.will-be-done.app/signup) | [Download desktop…
