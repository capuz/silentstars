---
repo: "JiangNanGenius/floe-agent"
name: "floe-agent"
description: "Floe — a native iOS/iPadOS AI agent workspace for iPhone and iPad, built for private bring-your-own-key workflows."
readmeQualityOk: true
url: "https://github.com/JiangNanGenius/floe-agent"
homepage: "https://www.floe-agent.com/"
language: "Swift"
languages: ["Swift"]
languagePcts: [95]
topics: ["ai-agent", "ios", "ipados", "open-source", "ssh", "swift", "vnc", "byok", "ipad", "iphone"]
stars: 37
forks: 9
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 1
recentReleases: 10
createdAt: "2026-08-12T19:57:04Z"
lastCommitAt: "2026-09-10T08:20:03Z"
lastReleaseAt: "2026-08-19T06:30:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 43
maintainers: ["JiangNanGenius"]
openGraphImageUrl: "https://opengraph.githubassets.com/359c8f1fd7fcae0312da88d30f02b73f914661071154a3aa9cb98165b2ee6d4a/JiangNanGenius/floe-agent"
---

<h1>Floe Agent for iPhone &amp; iPad</h1>
  <p><strong>Floe — Native iOS AI Agent</strong></p>
  <p>Your models. Your files. Your machines.</p>
  <p>A private, bring-your-own-key AI agent workspace built natively for iPhone and iPad.</p>
  <p>
  </p>
</div>

Floe Agent turns a model conversation into a durable task. Each message continues the same task, while every model execution becomes a separate run with its own progress, tool evidence, approvals, checkpoints, and recovery state. A task can use an app-managed private workspace or an explicitly selected project workspace.

## Current upgrade — 1.6.2 beta candidate

**1.6.2 (137)** is being prepared for release; installation availability requires separate TestFlight verification. See the [beta notes](https://github.com/JiangNanGenius/floe-agent/blob/HEAD/docs/RELEASE_NOTES_1.6.2.md). This round hardens the toolchain itself and the Chinese-document experience:

- **Background jobs (jobs.\*)**: large downloads and long Python data pulls/cleaning leave the task's critical path — the agent gets a durable jobID immediately, keeps working, and completion re-enters the conversation automatically. Downloads survive app suspension with…
