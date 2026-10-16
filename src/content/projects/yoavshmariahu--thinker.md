---
repo: "yoavshmariahu/thinker"
name: "thinker"
description: "thinker — a knowledge cache for coding agents"
readmeQualityOk: true
url: "https://github.com/yoavshmariahu/thinker"
homepage: "https://zerotime.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [84]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-26T23:27:59Z"
lastCommitAt: "2026-10-16T08:26:38Z"
lastReleaseAt: "2026-10-13T07:34:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["yoavshmariahu"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee6df19b4de22c913bfe379569868ea6d4d82935d90cde5f6802282f3900f3eb/yoavshmariahu/thinker"
---

# thinker: a knowledge cache for coding agents

Your coding agent rediscovers your codebase on every task: where things live, how the
parts connect, which change broke what last time. `thinker` remembers it instead.

- **It injects the right context and skills, as the agent works.** Thinker learns from
  your merged pull requests, your agent sessions and your skill files, and keeps short
  notes pinned to the exact code they describe. On each request it ranks them and serves
  only the ones that fit, with pointers into the code, so the agent starts at the right
  place instead of searching for it.
- **It keeps the cache fresh on its own.** Every session grades the notes it was served:
  a note the agent acted on gains confidence, a note the trace contradicts is corrected,
  an unused one decays. A note whose code changed is held back and re-verified before it
  is served again. New pull requests become notes as they merge.
- **Tasks finish faster, on fewer tokens, with fewer pitfalls.** The agent spends less of
  its budget rebuilding a picture of the repository, and the traps the history already
  knows about are in front of it before it touches the code.

Website, docs and…
