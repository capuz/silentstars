---
repo: "seuros/padded_cell"
name: "padded_cell"
description: "A drop-in Minitest runner with a Rust core: every test in its own padded cell."
readmeQualityOk: true
url: "https://github.com/seuros/padded_cell"
language: "Ruby"
languages: ["Ruby", "Rust"]
languagePcts: [53, 47]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-10-11T00:20:28Z"
lastCommitAt: "2026-11-08T10:40:47Z"
lastReleaseAt: "2026-11-08T10:35:32Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 35
maintainers: ["seuros", "AliOsm"]
openGraphImageUrl: "https://opengraph.githubassets.com/ead5ca26bde074a5ead822312685b1cf1be3fa38634af781a4227d186eb8f7ed/seuros/padded_cell"
---

# padded_cell

Your tests aren't crazy. They just need their own room.

padded_cell is a drop-in runner for Minitest and Rails test suites. Nothing in
your tests changes; padded_cell replaces the thing that runs them:

- **every test in its own forked cell**: a test that segfaults, calls `exit`,
  hangs, monkey patches `Time` or leaves a thread behind takes down its cell,
  not the run, and not the next test (Rails suites with fixtures default to
  sharing a worker instead, see [Isolation](#isolation));
- **workers fed whole classes**, slowest first from the timings of the
  previous run, so per-class setup such as fixtures happens once; idle
  workers split the remaining big classes;
- **static discovery** with Prism: `file:line`, `--list` and CI sharding work
  without loading a single test file;
- Minitest's own reporters and plugins, plus JUnit XML and JSON lines.

Discovery and scheduling are Rust, in a native extension: Prism parses the
test files on every core, and a deterministic scheduler orders the run.

```console
$ bundle exec padded_cell
Run options: --seed 33512 --isolation test

# Running:

.....E.......................................

Finished in 2.083220s,…
