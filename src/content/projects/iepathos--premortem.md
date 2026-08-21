---
repo: "iepathos/premortem"
name: "premortem"
description: "Premortem for your app's config—finds all the ways it would die before it ever runs."
readmeQualityOk: true
url: "https://github.com/iepathos/premortem"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["config", "configuration", "error-handling", "functional-programming", "rust", "serde", "settings", "type-safety", "validation"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-25T22:59:57Z"
lastCommitAt: "2026-08-21T04:10:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 39
maintainers: ["dependabot[bot]", "iepathos"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c3d17313870387f67a7ebc24cc8200a66f541d11d2fa31735111631dee57db3/iepathos/premortem"
---

# premortem

> Know how your app will die—before it does.

A configuration library that performs a **premortem** on your app's config—finding all the ways it would die before it ever runs.

## Why "premortem"?

The name is a bit tongue-in-cheek—but only a bit. Configuration errors are one of the leading causes of production outages. Bad config doesn't just cause bugs; it causes *incidents*, *pages*, and *3am debugging sessions*.

A **postmortem** is what you do *after* something dies—gathering everyone to analyze what went wrong. Traditional config libraries give you the postmortem experience:

```
$ ./myapp
Error: missing field `database.host`

$ ./myapp  # fixed it, try again
Error: invalid port value

$ ./myapp  # fixed that too
Error: pool_size must be positive

# Three deaths to find three problems
```

**premortem** gives you all the fatal issues upfront:

```
$ ./myapp
Configuration errors (3):
  [config.toml:8] missing required field 'database.host'
  [env:APP_PORT] value "abc" is not a valid integer
  [config.toml:10] 'pool_size' value -5 must be >= 1
```

One run. All errors. Know how your app would die—before it does.

Try it yourself: `cargo run --example error-demo`…
