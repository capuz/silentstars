---
repo: "Michael-JB/ctx"
name: "ctx"
description: "Frictionless context switching, in the terminal setup you already have."
readmeQualityOk: true
url: "https://github.com/Michael-JB/ctx"
homepage: "http://ramyun.co.uk/ctx/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-29T16:43:58Z"
lastCommitAt: "2026-10-29T21:24:37Z"
lastReleaseAt: "2026-08-14T07:43:47Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 66
maintainers: ["Michael-JB", "github-actions[bot]", "moldhouse"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1a4423644ef150b681cd44541a525cb4f262eefca82473ff1b74d33368d5d2f/Michael-JB/ctx"
---

# ctx

The way I write code has changed. With agents, I context-switch more, and the
time it takes to spin up or tear down a context became increasingly noticeable.
I didn't enjoy the `git worktree` UX, so I ended up maintaining multiple
long-lived clones of the same repository nestled in different tmux sessions to
work in parallel. This worked well for me, but it wasn't exactly elegant. So
here we are.

`ctx` lets you manage repo-scoped work contexts: each context is a fresh full
checkout on its own local branch, wrapped in a terminal multiplexer session
with your panes already laid out.

Disclaimer: this is fully vibe-coded.

## Install

```sh
cargo install ctx-tui
```

Or grab a prebuilt binary from the
[latest release](https://github.com/Michael-JB/ctx/releases/latest).

## Setup

`ctx` runs fine with zero config; setup is optional but will likely improve
your experience. The fastest way through it is to not do it yourself: tell your
agent "set up ctx following its README" and let it work through this section.

Instructions for the agent: ask the user each question, then apply their
answer using the concrete snippets under Configuration.

1. Which multiplexer do you use, tmux…
