---
repo: "txjmb/jsonata-core"
name: "jsonata-core"
description: "Python Jsonata implementation with Rust backend also available as standalone Rust library"
readmeQualityOk: true
url: "https://github.com/txjmb/jsonata-core"
homepage: "https://txjmb.github.io/jsonata-core/"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
stars: 9
forks: 2
openIssues: 2
closedIssues: 15
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-01-19T13:42:54Z"
lastCommitAt: "2026-08-23T04:09:22Z"
lastReleaseAt: "2026-07-13T15:45:27Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 67
maintainers: ["txjmb", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c05e1d171ac1d9020cbb02918e9bd1d568339ac6fabea991fc6affb20cefdc9/txjmb/jsonata-core"
---

# jsonata-core (rust) + jsonatapy + jsonata C-ABI library + jsonata cli
#### Pypi stats

#### Crates.io stats

High-performance [JSONata](https://jsonata.org/) implementation in Rust, with Python binding and C ABI/library.  If you use this library, please add a github star!

Much of this project was built using Claude Code with significant human oversight. There was no performant
JSONata implementation in Python, so the goal was to port JSONata to Rust (with a PyO3 wrapper
for Python) and see how fast it could go. The answer: faster than V8 for most expression
workloads, and faster than the next pure-Rust implementation.  The rust versions are published on crates.io, and the python wheels on pypi.  There is also a command-line binary and Python command-line available (works great with uvx) for use in scripting.  The Python library is also usable in a command-line fashion, and a C-compatible library is available for those who want to easily use jsonata in C/C++.

Many, many thanks to the incredible work of all the maintainers of the [JSONata](https://github.com/jsonata-js/jsonata) reference library.  JSONata is a very powerful, well-designed, and useful language that has made an…
