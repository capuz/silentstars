---
repo: "nklmilojevic/sofka"
name: "sofka"
description: "A Kubernetes TUI, reimagined in Rust - built on kube-rs and ratatui, async-first from the ground up."
readmeQualityOk: true
url: "https://github.com/nklmilojevic/sofka"
homepage: "https://sofka.rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 292
forks: 17
openIssues: 4
closedIssues: 38
watchers: 1
contributors: 8
recentReleases: 10
createdAt: "2026-07-01T12:31:02Z"
lastCommitAt: "2026-09-05T07:50:03Z"
lastReleaseAt: "2026-07-05T12:54:26Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 32
maintainers: ["nklmilojevic", "caseycs", "vyrti"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1286083218/507b0cdd-5fda-47fa-a1ff-c756cbbacaa3"
---

# sofka

A Kubernetes TUI written in Rust, on [`kube-rs`](https://kube.rs) and
[`ratatui`](https://ratatui.rs). Async everywhere, so the UI never blocks on the
cluster.

**[sofka.rs](https://sofka.rs)** - the website, with a watchable tour of a real
session ([sofka.rs/#play](https://sofka.rs/#play)).

## Why "sofka"

That's Sophie, a Russian Blue. She sits behind the monitor and watches the
screen. Constantly, not sometimes. She has the narrow-eyed look of someone who
has seen a pod in `CrashLoopBackOff`. She catches every state change and doesn't
get distracted. She is, in effect, a cluster watchman that is a cat.

`sofka` is the Serbian short form of Sophia, which means "wisdom". A good cluster
TUI and a good cat both watch things closely, and both know when something is
wrong.

<br clear="right">

## What it does

sofka is a reimagining of [k9s](https://github.com/derailed/k9s) with one generic
object pipeline instead of a renderer per resource kind. Same purpose, different
architecture. The short version:

- **Every CRD works on day one** - one generic render pipeline, curated columns
  for common kinds, NAME/AGE for the rest, and `enter` on a CRD drills into its
  custom…
