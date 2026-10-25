---
repo: "1ndahous3/br3k"
name: "br3k"
description: "We have pentest framework at home."
readmeQualityOk: true
url: "https://github.com/1ndahous3/br3k"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-03-12T21:46:33Z"
lastCommitAt: "2026-10-25T22:10:34Z"
lastReleaseAt: "2026-05-17T23:05:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 57
undervaluedScore: 37
maintainers: ["1ndahous3"]
openGraphImageUrl: "https://opengraph.githubassets.com/026555db321c35e4365714f459681cecad46e0d948030d82d8e2996e1da92ff4/1ndahous3/br3k"
---

# br3k

**br3k** is a mini-framework for Windows pentesting, designed to implement non-standard scenarios and combine interesting methods.

It provides many options to vary the pentest flow: selecting different strategies, choosing the system API backend, and configuring dispatch for specific low-level functions. Some features are documented in [core](https://github.com/1ndahous3/br3k/blob/HEAD/docs/core.md) notes.

The Python API reference covers all `br3k` namespaces, with signatures, source docstrings, strategy enums, and compatibility aliases. [Editor stubs](https://github.com/1ndahous3/br3k/blob/HEAD/stubs/br3k/__init__.pyi) are generated from Rust declarations with `cargo api`; MkDocs renders their documentation. CI provides the HTML reference and a `br3k-stubs` wheel. See [Development](https://github.com/1ndahous3/br3k/blob/HEAD/docs/development.md) for uv setup, ty checks, prek hooks, packaging, and local documentation builds.

The repository includes many well-known pentest techniques (process injection, payload delivery between targets) and other scripts (see [scripts](https://github.com/1ndahous3/br3k/blob/HEAD/docs/scripts.md) notes).

## Usage Notice

Use this project…
