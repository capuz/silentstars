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
forks: 0
openIssues: 12
closedIssues: 16
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-14T12:24:13Z"
lastCommitAt: "2026-10-23T08:46:24Z"
lastReleaseAt: "2026-10-16T11:15:35Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 91
undervaluedScore: 61
maintainers: ["7schmiede", "fen89"]
openGraphImageUrl: "https://opengraph.githubassets.com/1587e35de57da7aa8c7cd86779032e4c8574c91e4fe082a8da2847769e3e217a/nuetzliches/devstack"
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
