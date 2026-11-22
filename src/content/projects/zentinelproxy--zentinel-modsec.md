---
repo: "zentinelproxy/zentinel-modsec"
name: "zentinel-modsec"
description: "Pure Rust ModSecurity (SecLang) rule engine that runs the OWASP Core Rule Set. No C dependency, no unsafe; CRS compatibility measured in CI."
readmeQualityOk: true
url: "https://github.com/zentinelproxy/zentinel-modsec"
homepage: "https://docs.rs/zentinel-modsec"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["libinjection", "modsecurity", "owasp", "pure-rust", "rust", "security", "waf", "zentinel", "appsec", "coreruleset"]
stars: 19
forks: 11
openIssues: 0
closedIssues: 23
watchers: 1
contributors: 7
recentReleases: 6
createdAt: "2026-01-11T08:36:38Z"
lastCommitAt: "2026-11-22T11:50:42Z"
lastReleaseAt: "2026-11-21T13:57:20Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 93
undervaluedScore: 75
maintainers: ["raffaelschneider", "phihos", "PQCrypta"]
openGraphImageUrl: "https://opengraph.githubassets.com/eda0640d574f42c454e041af8360be04997ac6e11ab454ed08e2953ddcc83eac/zentinelproxy/zentinel-modsec"
---

`zentinel-modsec` parses ModSecurity `.conf` rule files and evaluates them
against requests and responses, with no C or C++ dependency and no FFI
(`#![deny(unsafe_code)]`). SQL injection and XSS detection (`@detectSQLi`,
`@detectXSS`) are a pure Rust port of libinjection v4.0.2, the version
ModSecurity v3 uses, with the same verdicts. CRS compatibility is
reported as a number, not asserted: CI runs the CRS regression corpus on every
push and fails if the pass count changes (see [CRS conformance](#crs-conformance)).

It is the engine behind Zentinel's
[ZentinelSec agent](https://registry.zentinelproxy.io/zentinelsec/). The
[ModSecurity agent](https://github.com/zentinelproxy/zentinel-agent-modsec) is
a different thing: it wraps the C++ libmodsecurity.

## Quick start

```toml
[dependencies]
zentinel-modsec = "0.11"
```
