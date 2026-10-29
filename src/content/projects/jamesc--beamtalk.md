---
repo: "jamesc/beamtalk"
name: "beamtalk"
description: "BeamTalk: Where actors don't just run—they evolve."
readmeQualityOk: true
url: "https://github.com/jamesc/beamtalk"
language: "Rust"
languages: ["Rust", "Erlang"]
languagePcts: [59, 32]
stars: 7
forks: 1
openIssues: 0
closedIssues: 52
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-01-27T12:45:11Z"
lastCommitAt: "2026-10-29T14:07:01Z"
lastReleaseAt: "2026-10-29T13:28:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 71
maintainers: ["jamesc"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff95a9dbc9ac9a4af68a8096dae0eb50af847cabc0fabf2e6a11ad04c73effdd/jamesc/beamtalk"
---

**A live, interactive Smalltalk-like language for the BEAM VM**

Beamtalk brings Smalltalk's legendary live programming experience to Erlang's battle-tested runtime. While inspired by Smalltalk's syntax and philosophy, Beamtalk makes pragmatic choices for modern development (see [Syntax Rationale](https://github.com/jamesc/beamtalk/blob/HEAD/docs/beamtalk-syntax-rationale.md)). Write code in a running system, hot-reload modules without restarts, and scale to millions of concurrent actors.

```beamtalk
// Spawn an actor with state
counter := Counter spawn

// Send messages (sync by default)
counter increment
counter increment
value := counter getValue // => 2

// Send an async message
counter increment!  // => ok
// Cascades - multiple messages to same receiver
Transcript show: "Hello"; cr; show: "World"

// Map literals
config := #{#host => "localhost", #port => 8080}
```

…and a live, browser-based IDE attached to the running system — system browser,
live method editing, and a workspace eval pane (the *[LiveView IDE](#liveview-ide)*):

---

## Why Beamtalk?

| Feature | Benefit |
|---------|---------|
| **Interactive-first** | REPL and live workspace, not batch compilation |
|…
