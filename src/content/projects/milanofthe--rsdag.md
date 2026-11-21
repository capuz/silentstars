---
repo: "milanofthe/rsdag"
name: "rsdag"
description: "Expression graph compiler for the equation systems"
readmeQualityOk: true
url: "https://github.com/milanofthe/rsdag"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 7
forks: 0
openIssues: 4
closedIssues: 40
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-07T09:19:40Z"
lastCommitAt: "2026-11-21T11:32:21Z"
lastReleaseAt: "2026-10-08T09:45:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 59
maintainers: ["milanofthe"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ddbcf2a803d2872b2f6ae9c80942692514705088b414dc95e303e38947cc02a/milanofthe/rsdag"
---

# rsdag

Expression graph backend for hybrid event and continuous ODE and DAE
simulators: a hash-consed expression graph with functions and calls,
forward and reverse differentiation, a flat instruction tape split into a
per-parameter prolog and a per-iteration main phase, an interpreter over
any scalar type, and a native code backend for AArch64 and x86-64.

A simulator's model through rsdag: roles order the inputs, the residuals
and their Jacobian compile into one program whose prolog runs once per
parameter binding and whose main phase runs per iteration; the consumer's
loop factors the Jacobian with a sparse LU library, drives the program and
handles the events its guards report.

Licensed under the [GNU Affero General Public License v3.0](https://github.com/milanofthe/rsdag/blob/HEAD/LICENSE): free to
use, modify and distribute, including commercially, as long as the source of
the combined work stays available under the same license, network use
included. The copyright holder licenses rsdag on other terms as well (see
NOTICE); for a commercial license contact info@milanrother.com.
