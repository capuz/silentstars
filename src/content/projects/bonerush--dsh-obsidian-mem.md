---
repo: "bonerush/dsh-obsidian-mem"
name: "dsh-obsidian-mem"
description: "DeepSeek Harness host plugin that keeps project documents and long-term memory as plain Markdown in a dedicated Obsidian vault."
readmeQualityOk: true
url: "https://github.com/bonerush/dsh-obsidian-mem"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["agent-memory", "cordis", "deepseek-harness", "dsh-plugin", "fts5", "markdown", "obsidian", "project-memory"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-24T05:00:27Z"
lastCommitAt: "2026-10-31T09:53:58Z"
lastReleaseAt: "2026-09-29T17:05:57Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 48
maintainers: ["bonerush", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/24a36d5626a9257df46f3e79e34bbb51bb2047729b26822d7cb2743234c8ff0a/bonerush/dsh-obsidian-mem"
---

# dsh-obsidian-mem

A **DeepSeek Harness host plugin** that keeps a project's documents and long-term
memory as plain Markdown in a dedicated [Obsidian](https://obsidian.md) vault, and
draws that memory in the native sidebar: a GitHub-style contribution calendar, a
day-grouped activity timeline, searchable notes with highlighted snippets, and a
force-directed knowledge graph.

One repository gets one stable `projectId`, one committed pointer file and one
fixed directory in the vault. The plugin writes there; Obsidian just shows you
the result. Obsidian does not need to be running, and no part of the vault
depends on DSH.

```
repository                                vault (~/Documents/dsh-memory)
├── .obsidian-mem   ───────────►          └── Projects/<slug>--<projectId 前8位>/
│     projectId, slug,                    ├── index.md                hub / MOC
│     displayName, schema: 1              ├── Docs/  Decisions/  Conventions/  Pitfalls/
└── src/ …                                ├── Daily/YYYY-MM-DD.md
                                          ├── Inbox/                  待分类
                                          └── _meta/hot.md            热记忆
```

Two layers, on purpose:…
