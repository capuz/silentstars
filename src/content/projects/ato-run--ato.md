---
repo: "ato-run/ato"
name: "ato"
description: "Run and install your project across platforms, without tedious setup. Ato turns your project into a single TOML-defined unit you can share and execute."
readmeQualityOk: true
url: "https://github.com/ato-run/ato"
homepage: "https://ato-run.github.io/ato/"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 5
forks: 2
openIssues: 125
closedIssues: 320
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-04-26T05:37:06Z"
lastCommitAt: "2026-09-27T09:28:10Z"
lastReleaseAt: "2026-04-27T15:43:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 60
maintainers: ["Koh0920"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8fe58d15499e752e9b2976fffb63dda7f0f8be218b28d2701371c44c9ec7180/ato-run/ato"
discussionCount: 0
---

# Ato

Ato is a computing interface that lets you save, share, and resume files,
applications, execution state, and operation history as one common unit
called a **Capsule**. It isn't just file sharing — the goal is to hand over
a computation's midpoint as-is, so the recipient can pick up and continue
from exactly there. A single file, a file with its application, or a full
working state with history are all expressed through the same unified
Capsule model.

*([日本語 README](https://github.com/ato-run/ato/blob/HEAD/README.ja.md))*

---

## Main use cases

- **Faster bug reproduction**: instead of sending repro steps and
  screenshots, share the Workspace, Terminal, and Browser state where the
  error is actually happening, as a Capsule. The recipient starts debugging
  from that exact point, with no environment setup in between.
- **Collaborating with AI agents**: not just a code diff, but the history of
  commands run, files changed, tests, and browser actions can be Replayed
  and inspected. A human can pick up from the working point, or hand it off
  to another AI agent to continue.
- **Sharing application state**: share not just the app itself, but the
  actual state you've…
