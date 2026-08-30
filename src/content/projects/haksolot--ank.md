---
repo: "haksolot/ank"
name: "ank"
description: "The stupid coordination tool - tasks and architecture decisions in your repo, behind one CLI any coding agent can call"
readmeQualityOk: true
url: "https://github.com/haksolot/ank"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["adr", "agent-skill", "agentic-workflow", "cli", "git", "rust", "task-management"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-28T02:51:03Z"
lastCommitAt: "2026-08-30T00:42:38Z"
lastReleaseAt: "2026-08-22T01:32:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 48
maintainers: ["haksolot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1314471674/d1d79142-2d49-435f-9900-65e50728efb4"
discussionCount: 0
---

<source media="(prefers-color-scheme: dark)" srcset="assets/ank-dark.svg">

<h1 align="center">ank</h1>

Tasks and architecture decisions in your repo, behind one CLI any coding agent can call.</p>

```sh
npm install -g @haksolot/ank     # one executable, and nothing beside it
npx skills add haksolot/ank      # the skill, into whichever agent you run
```

Needs **git 2.34 or newer**. Every other route is in [handing ank to an agent][agents].

---

An agent that spawns on your codebase can read every line of it. It cannot read
your tracker, your wiki, or the thread where you decided six months ago that
sessions must never be self-contained JWTs. So it writes plausible code that
breaks a rule nobody wrote down where it could be found.

Ank puts that layer in the repository, attached to the code it constrains, and
serves it through one command surface. `.ank/` is opaque to an agent, the way
`.git/` is: not a directory to grep, a CLI to call.

<source media="(prefers-color-scheme: dark)" srcset="assets/demo-dark.gif">

Four verbs carry the loop: `ank context` for what binds here and what is takeable,
`ank claim` to take a task and freeze its criterion, `ank log` while you work, and…
