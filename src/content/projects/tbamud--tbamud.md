---
repo: "tbamud/tbamud"
name: "tbamud"
description: "tbaMUD is the continued development of  the codebase formerly known as CircleMUD."
readmeQualityOk: true
url: "https://github.com/tbamud/tbamud"
homepage: "http://tbamud.com/"
language: "C"
languages: ["C", "PLSQL"]
languagePcts: [74, 22]
stars: 150
forks: 90
openIssues: 15
closedIssues: 40
watchers: 32
contributors: 31
recentReleases: 0
createdAt: "2013-04-12T22:15:40Z"
lastCommitAt: "2026-09-02T08:06:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 47
maintainers: ["Fiztba"]
openGraphImageUrl: "https://opengraph.githubassets.com/80a04d88703ace9c2ef42bf8d02468ec94f8317596575d9843e0badddefa28cc/tbamud/tbamud"
---

Files for tbaMUD.

## Unit Tests

tbaMUD ships with a C unit-test suite located in the `tests/` directory.
The suite uses the [Unity](https://github.com/ThrowTheSwitch/Unity) test
framework (vendored under `tests/vendor/unity/`).

### Quick start

```
./configure
cd tests && make test
```

`make test` builds each test binary, runs it, and writes JUnit XML results to
`tests/test-results/`.  A summary is printed to the terminal:

```
[PASS] test_utils
[PASS] test_random
[PASS] test_interpreter
[PASS] test_class
```

### CI

The GitHub Actions workflow (`.github/workflows/build.yml`) runs `make test`
on every push and pull request against `master` and publishes a formatted
report via the `dorny/test-reporter` action.

See [doc/testing.md](https://github.com/tbamud/tbamud/blob/HEAD/doc/testing.md) for full details on adding new tests and
understanding the test infrastructure.
