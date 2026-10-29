---
repo: "edlitmus/halite"
name: "halite"
description: "Salt Project replacement written in Go"
readmeQualityOk: true
url: "https://github.com/edlitmus/halite"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 11
forks: 0
openIssues: 9
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-08-09T19:17:10Z"
lastCommitAt: "2026-10-29T21:23:37Z"
lastReleaseAt: "2026-10-12T19:15:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 40
maintainers: ["edlitmus"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e949cb61a7aa8cd7801e1daa67b8faf16c54376296dec82cf2196cd9124dd74/edlitmus/halite"
---

# halite

A replacement for SaltStack, written in Go against the standard library.

halite keeps the parts of Salt that carry operational value — the state
system, pillar, the YAML and Jinja dialects, remote execution, reactors,
orchestration, beacons — and replaces the parts that carry risk: the Python
interpreter, the several-hundred-package dependency tree, the bespoke
encryption protocol, and the dynamic module loader that imports arbitrary
code from the file server.

One static binary per program, with one vendored dependency,
`golang.org/x/sys`. A test holds the build graph to SPEC 4.2's allowlist
on every run.

[SPEC.md](https://github.com/edlitmus/halite/blob/HEAD/SPEC.md) is the specification, in 33 sections. This README says
what is built; [docs/](https://github.com/edlitmus/halite/blob/HEAD/docs/) says how to use it.

## Try it

From a release, pick the archive for your platform, check it, and put
the binary on your path. The archive also holds the licence (BSD
2-Clause), the example configuration and the manual pages:

```sh
v=X.Y.Z; p=linux-amd64    # set these: the release, and your platform
curl -LO…
