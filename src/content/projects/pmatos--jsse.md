---
repo: "pmatos/jsse"
name: "jsse"
description: "An agent-coded JS engine in Rust. I didn't touch a single line of code here. Not one. This repo is a write-only data store. I didn't even create this repo by hand -- my agent did that."
readmeQualityOk: true
url: "https://github.com/pmatos/jsse"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["engine", "javascript", "js"]
stars: 70
forks: 0
openIssues: 30
closedIssues: 140
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-01-27T14:05:15Z"
lastCommitAt: "2026-07-29T06:14:44Z"
lastReleaseAt: "2026-07-23T14:45:16Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 38
maintainers: ["pmatos", "semantic-release-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/734c93a95e0196da007021258380123eb74861473a5cc1a7a758eff3796345d3/pmatos/jsse"
---

# jsse

An agent-coded JS engine in Rust. I didn't touch a single line of code here. Not one. This repo is a write-only data store. I didn't even create this repo by hand -- my agent did that.

**Goal: 100% test262 pass rate.**

Read more: [jsse - a JavaScript engine built by an agent](https://p.ocmatos.com/blog/jsse-a-javascript-engine-built-by-an-agent.html).

Per the test262 specification ([INTERPRETING.md](https://github.com/tc39/test262/blob/main/INTERPRETING.md)), test files without `noStrict`, `onlyStrict`, `module`, or `raw` flags must be run **twice**: once in default (sloppy) mode and once with `"use strict";` prepended. Our test runner implements this dual-mode execution. Current default run: **99,568 / 99,568 (100.00%)**.

*ES Modules now supported with dynamic `import()` and `import.meta`. Async tests run with Promise/async-await support.*

## Structure

- `spec/` — ECMAScript specification (submodule from [tc39/ecma262](https://github.com/tc39/ecma262))
- `test262/` — Official test suite (submodule from [tc39/test262](https://github.com/tc39/test262))
- `tests/` — Additional custom tests
- `scripts/` — Test runner and tooling

## Supported Features

- CLI with file…
