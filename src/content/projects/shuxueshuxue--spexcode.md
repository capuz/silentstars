---
repo: "shuxueshuxue/Spexcode"
name: "Spexcode"
description: "Spec-driven orchestration for your coding agents."
readmeQualityOk: true
url: "https://github.com/shuxueshuxue/Spexcode"
homepage: "https://spexcode.net"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [65, 29]
stars: 149
forks: 17
openIssues: 26
closedIssues: 53
watchers: 0
contributors: 5
recentReleases: 4
createdAt: "2026-06-19T16:52:26Z"
lastCommitAt: "2026-08-10T05:03:51Z"
lastReleaseAt: "2026-08-10T05:04:56Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 34
maintainers: ["shuxueshuxue"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1274574043/7c6d3753-7e68-4770-86d5-69d883e63da7"
---

<p>
</p>

<p>
</p>

</div>

Spec-driven orchestration for your coding agents. SpexCode keeps a versioned tree of specs inside
your git repo, links every spec to the code it governs, and runs a session manager that dispatches
coding agents into isolated worktrees. You review and merge; the tool keeps intent and
implementation from drifting apart.

English | [中文](https://github.com/shuxueshuxue/Spexcode/blob/HEAD/docs/README.zh-CN.md) · Docs: [spexcode.net](https://spexcode.net) · License: MIT

| Feature | Description |
|---|---|
| **Computable spec–code drift** | Every spec pins the file it governs, down to the function. Whether code moved without its spec is computed from commits and line ranges, the same way on every machine: advisory for the file, blocking when an anchored function changes. |
| **Session & worktree management** | Each task runs in its own worktree and branch; independent tasks run in parallel. Sessions form a hierarchy: a session can dispatch and supervise workers of its own, so a worker can have a supervisor and that supervisor another. Workers propose; you review once, at merge time. |
| **Shareable URLs** | Spec nodes, sessions, evals, live terminals: every…
