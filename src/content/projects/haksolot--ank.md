---
repo: "haksolot/ank"
name: "ank"
description: "The stupid coordination tool - tasks and architecture decisions in your repo, behind one CLI any coding agent can call"
readmeQualityOk: true
url: "https://github.com/haksolot/ank"
homepage: "https://ank.dekrow.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["adr", "agent-skill", "agentic-workflow", "cli", "git", "rust", "task-management", "skills"]
stars: 91
forks: 6
openIssues: 3
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-07-28T02:51:03Z"
lastCommitAt: "2026-10-26T18:06:44Z"
lastReleaseAt: "2026-08-22T01:32:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 39
maintainers: ["haksolot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1314471674/d1d79142-2d49-435f-9900-65e50728efb4"
discussionCount: 0
---

Tasks and architecture decisions in your repo, behind one CLI any coding agent can call.</p>

An agent can read every line of your code, but not your tracker, your wiki, or
the thread where you decided that sessions must never be self-contained JWTs.
Ank keeps those decisions and the work in `.ank/`, attached to the code they
constrain, and serves them through one CLI.

## Install

```sh
npm install -g @haksolot/ank     # the binary for your platform
npx skills add haksolot/ank      # the skills, for your agent
```

Linux, macOS and Windows; needs git 2.34 or newer. The shell installers and
every other route are in [Install][install]. The version is `0.x` on purpose: the loop and
the exit codes are specified, the storage format is not yet.

## The loop

```sh
ank context <path>    # what binds this perimeter, and what is takeable
ank claim <id>        # take a task and freeze its criterion
ank show <id>         # the entity whole
ank log "<message>"   # what you learned, while you work
ank done              # run the declared verifiers and record the proof
ank release --reason "<why>"   # hand the task back
```

[The quickstart][start] walks it from `ank init` onward, with real…
