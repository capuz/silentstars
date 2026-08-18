---
repo: "nao1215/atago"
name: "atago"
description: "Tests CLI behavior from plain YAML: exit codes, output, files, snapshots, and interactive terminals (PTY/TUI)"
readmeQualityOk: true
url: "https://github.com/nao1215/atago"
homepage: "https://nao1215.github.io/atago/"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["cli", "e2e-testing", "go", "golang", "integration-testing", "snapshot-testing", "test-automation", "test-runner", "testing", "testing-tools"]
stars: 19
forks: 0
openIssues: 2
closedIssues: 162
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-01T11:14:00Z"
lastCommitAt: "2026-08-18T04:07:42Z"
lastReleaseAt: "2026-07-06T06:19:38Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 55
maintainers: ["nao1215", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1286019322/42ae99d0-d575-478a-900a-5a06fb0facc6"
fundingLinks: ["GITHUB:https://github.com/nao1215"]
---

</p>

atago tests real CLI behavior from plain YAML: commands, files, snapshots, services, and interactive terminals. It runs your actual binary — in any language — and asserts what a user observes. No test code, no shell DSL.

Documentation: https://nao1215.github.io/atago/

## First run

No install, no fictional binary — if you have Go, paste this. It records a real
run of a command you already have, then replays it as a test:

```shell
go run github.com/nao1215/atago@latest record --out demo.atago.yaml -- git --version
go run github.com/nao1215/atago@latest run demo.atago.yaml
```

```text
.

PASSED  1 scenario: 1 passed, 0 failed, 0 errored, 0 skipped
```

`record` runs `git --version` once and writes a spec from what it observed — the
exit code, the version line on stdout, an empty stderr (a tool that writes a
diagnostic there gets that first line anchored instead). `run` replays it. Open
`demo.atago.yaml` and you have a real test you can tighten, not YAML you wrote
from scratch. (Swap `git --version` for any command you have: `go version`,
`jq --version`, `ls -la`.)

Then point it at your own tool:

```shell
atago record --out mytool.atago.yaml -- mytool convert input.txt  #…
