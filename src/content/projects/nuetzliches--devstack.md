---
repo: "nuetzliches/devstack"
name: "devstack"
description: "Your whole stack, always running the code you saved, never a broken build. Every git worktree a lane, lanes on the team's servers, one CLI, dashboard and MCP server for your coding agents. Windows and Linux, native."
readmeQualityOk: true
url: "https://github.com/nuetzliches/devstack"
homepage: "https://nuetzliches.github.io/devstack/"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["dev-environment", "developer-tools", "docker-compose", "hot-reload", "local-development", "mcp", "orchestrator", "rust", "windows", "cli"]
stars: 5
forks: 1
openIssues: 11
closedIssues: 50
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-10-14T12:24:13Z"
lastCommitAt: "2026-11-03T19:05:40Z"
lastReleaseAt: "2026-10-16T11:15:35Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 96
undervaluedScore: 68
maintainers: ["7schmiede", "fen89", "p-i-p"]
openGraphImageUrl: "https://opengraph.githubassets.com/e097ebc97b32b1f8fc5160c61d189c43c42b6043f55c2621d654224a38b3f618/nuetzliches/devstack"
---

# devstack

**Your whole stack, always running the code you saved, never a broken build.**
Native services, their containers, every git worktree beside it, and when your
laptop runs out of room, the team's server: one CLI, one dashboard, one MCP
server for your coding agents.

```
devstack up        # infrastructure, builds, every service: healthy or it says why
devstack ui        # every stack, live, in the browser
```

- **Save, and it is live, or it says why not.** A change builds as a
  *candidate* beside the running instance and takes over only once it is
  healthy. A compiler error leaves the old build answering; `devstack status`
  says `not yet active: building | failed | held` until your change runs.
- **Every worktree is a lane.** `git worktree add` and `devstack up` in it: the
  same stack on its own ports, with its own containers and data, beside the
  main one. Ten agents on ten branches, no collisions.
- **Lanes on other machines.** `devstack up --on build-server` runs a
  worktree's lane on a machine of the team's pool, its ports forwarded to
  yours as if it ran locally. Move it back with one command, share it with a
  reviewer, give it the main ports.
- **Made for…
