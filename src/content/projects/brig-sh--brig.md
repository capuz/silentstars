---
repo: "brig-sh/brig"
name: "brig"
description: "Brig: run coding agents in a microVM sandbox - the Go cli (brig) and session daemon (brigd)"
readmeQualityOk: true
url: "https://github.com/brig-sh/brig"
homepage: "https://brig.sh"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["agentic-ai", "microvm", "sandboxing"]
stars: 152
forks: 15
openIssues: 127
closedIssues: 84
watchers: 1
contributors: 8
recentReleases: 10
createdAt: "2026-08-12T11:28:24Z"
lastCommitAt: "2026-09-26T08:47:10Z"
lastReleaseAt: "2026-08-28T16:30:36Z"
status: "newborn"
tags: ["needs_contributors", "release_machine"]
healthScore: 85
undervaluedScore: 32
maintainers: ["pmoust", "ananos", "asapranidis"]
openGraphImageUrl: "https://opengraph.githubassets.com/c71a2e6664e3893934dfefe8adc3860a480345dd91f3ce4fbbd668d042a47bef/brig-sh/brig"
discussionCount: 1
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/brig-lockup-on-dark.svg">
  </picture>
</p>

</p>

**Brig runs a coding agent inside a microVM on your own machine.**

An agent working unattended can only damage what you handed it. Point it at one
project, and a bad edit or a bad command reaches no further than that project.
When you are done, throw the sandbox away and start clean.

## How it works

One command starts a sandbox and runs the agent in it:

```bash
brig run claude ~/code/demo
```

A session is `<agent>` or `<agent>@<label>`, the ref every command takes.
`claude` and `claude@refactor` are two independent sessions of the same
agent, each with its own sandbox. The guest home is the host directory
holding a session's settings and history. `claude` resolves to the
`claude-code` agent, so its guest home is `~/.brig/homes/brig-claude-code`,
and `claude@refactor`'s is the sibling
`~/.brig/homes/brig-claude-code-refactor`, not a directory inside it. Brig creates that home, and `brig rm` deletes it.
Pass `--home <dir>` to use a guest home of your own, which Brig never deletes.

Name a project on the run line, and Brig mounts it read-write at…
