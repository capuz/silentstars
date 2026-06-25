---
repo: "Lincoln504/pi-research"
name: "pi-research"
description: "Web research for pi witth smart and safe tooling + agent system"
url: "https://github.com/Lincoln504/pi-research"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 18
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-05T23:05:32Z"
lastCommitAt: "2026-06-25T02:06:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["Lincoln504", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7d3d8696d7f913c2085c4bcc9d3c4648515722846d1349c56f6e65a4e08a8ed/Lincoln504/pi-research"
---

Multi-agent web research for [pi](https://github.com/badlogic/pi-mono). A coordinator
breaks a question into parallel research tracks, each researcher searches and scrapes
the live web through a stealth browser, and an evaluator decides whether the answer is
complete or another round is needed. The result is a single cited Markdown report.

---

## Why

- **Reads the open web directly.** Search runs through `camoufox` (a stealth Firefox)
  rather than a paid search API, so there is no search key to manage, no per-query rate
  limit, and no infrastructure to stand up. You still bring your own LLM key.
- **Parallel by default.** A question is decomposed into independent researcher sessions
  that run at the same time, so a broad topic is covered in breadth without you having to
  split it up yourself.
- **Safe to hand to an agent.** Researchers can search and scrape, but they cannot write
  files, edit files, or run shell commands. The web tools are isolated and rate-limited,
  which keeps an autonomous agent on task and contained.
- **One engine, several front-ends.** The same core backs the pi extension, a standalone
  CLI / agent skill, the OpenClaw plugin, and a programmatic SDK…
