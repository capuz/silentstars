---
repo: "jamesc/beamtalk"
name: "beamtalk"
description: "BeamTalk: Where actors don't just run—they evolve."
readmeQualityOk: true
url: "https://github.com/jamesc/beamtalk"
language: "Rust"
languages: ["Rust", "Erlang"]
languagePcts: [57, 33]
stars: 6
forks: 1
openIssues: 1
closedIssues: 41
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-01-27T12:45:11Z"
lastCommitAt: "2026-09-09T08:19:18Z"
lastReleaseAt: "2026-09-09T07:51:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 67
maintainers: ["jamesc", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc6a3b0447db9ea00ae4178ab52c778f442d2914790f0f64e3f95fc3787a7359/jamesc/beamtalk"
---

<picture>
  <source srcset="docs/images/beamtalk-logo-dark.svg" media="(prefers-color-scheme: dark)" style="max-width: 480px; width: 100%; height: auto;" />
  <source srcset="docs/images/beamtalk-logo-light.svg" media="(prefers-color-scheme: light)" style="max-width: 480px; width: 100%; height: auto;" />
</picture>

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
config := #{#host => "localhost", #port => 8080}…
