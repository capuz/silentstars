---
repo: "hyperlight-dev/hyperlight-js"
name: "hyperlight-js"
description: "A JavaScript runtime executing inside hyperlight"
readmeQualityOk: true
url: "https://github.com/hyperlight-dev/hyperlight-js"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [65, 23]
stars: 16
forks: 5
openIssues: 18
closedIssues: 14
watchers: 1
contributors: 12
recentReleases: 1
createdAt: "2026-02-15T12:10:13Z"
lastCommitAt: "2026-11-03T11:16:21Z"
lastReleaseAt: "2026-09-03T20:05:45Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 52
maintainers: ["dependabot[bot]", "simongdavies", "ludfjig"]
openGraphImageUrl: "https://opengraph.githubassets.com/0163cec92046f94257b5a494df81d5a482e628683be50408374c48c0022bf19d/hyperlight-dev/hyperlight-js"
---

# Hyperlight-js

Provides a capability to run JavaScript inside of Hyperlight using quickjs as the JavaScript engine.

## Documentation

- [Custom guest runtimes](https://github.com/hyperlight-dev/hyperlight-js/blob/HEAD/docs/extending-runtime.md) - Extend with native modules and build and embed a custom guest using cargo-hyperlight

- [Execution Monitors](https://github.com/hyperlight-dev/hyperlight-js/blob/HEAD/docs/execution-monitors.md) - Timeout and resource limit enforcement for handler execution
- [Observability](https://github.com/hyperlight-dev/hyperlight-js/blob/HEAD/docs/observability.md) - Metrics and tracing
- [Crashdumps](https://github.com/hyperlight-dev/hyperlight-js/blob/HEAD/docs/create-and-analyse-guest-crashdumps.md) - Creating and analyzing guest crash dumps
- [Debugging the guest runtime](https://github.com/hyperlight-dev/hyperlight-js/blob/HEAD/docs/guest-runtime-debugging.md) - Debugging the guest runtime using GDB or LLDB
- [JS Host API](https://github.com/hyperlight-dev/hyperlight-js/blob/HEAD/src/js-host-api/README.md) - Node.js bindings (includes user modules and host functions)

## Build prerequisites  

1. Install…
