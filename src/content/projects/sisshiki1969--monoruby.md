---
repo: "sisshiki1969/monoruby"
name: "monoruby"
description: "Ruby implementation with yet another JIT compiler."
readmeQualityOk: true
url: "https://github.com/sisshiki1969/monoruby"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 140
forks: 6
openIssues: 1
closedIssues: 54
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2022-02-06T06:11:45Z"
lastCommitAt: "2026-07-31T06:30:29Z"
lastReleaseAt: "2026-07-17T00:30:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 48
maintainers: ["sisshiki1969", "claude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/afd4b492cf5150b7e651b419788c26232917fa76947281fb86cf608ce99f5094/sisshiki1969/monoruby"
discussionCount: 0
---

# monoruby

Ruby implementation with yet another JIT compiler written in Rust.

## What's New in 2026

Monthly highlights of improvements since January 2026 (with representative PRs).

### July 2026

- Big language-semantics compliance drive on the ruby/spec "language" group: destructuring, block-argument semantics, `defined?`, flip-flops, `BEGIN`/`END`, and predefined globals ([#804](https://github.com/sisshiki1969/monoruby/pull/804)–[#874](https://github.com/sisshiki1969/monoruby/pull/874), notably [#861](https://github.com/sisshiki1969/monoruby/pull/861)).
- Implemented pattern matching (`case`/`in`, `=>`) ([#883](https://github.com/sisshiki1969/monoruby/pull/883)) and MRI's full eigenclass tower ([#877](https://github.com/sisshiki1969/monoruby/pull/877)).
- Green threads (M:1): scheduler core, real Thread / Mutex / Queue, scheduler-integrated blocking IO, and preemptive timeslice multithreading ([#941](https://github.com/sisshiki1969/monoruby/pull/941)–[#944](https://github.com/sisshiki1969/monoruby/pull/944), [#962](https://github.com/sisshiki1969/monoruby/pull/962)).
- Real TCP / UDP / UNIX-domain sockets ([#964](https://github.com/sisshiki1969/monoruby/pull/964),…
