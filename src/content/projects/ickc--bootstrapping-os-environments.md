---
repo: "ickc/bootstrapping-os-environments"
name: "bootstrapping-os-environments"
description: "A minimal, portable toolkit for bootstrapping command-line development environments on Unix systems"
readmeQualityOk: true
url: "https://github.com/ickc/bootstrapping-os-environments"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["macos", "install-script", "linux"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2016-09-21T01:24:08Z"
lastCommitAt: "2026-07-05T02:14:10Z"
lastReleaseAt: "2021-03-26T21:38:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 70
maintainers: ["ickc", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ed7f5f6318be790dd1dbbb3c9472faa00006006c35dc082f373a686da8ecb07/ickc/bootstrapping-os-environments"
---

# Supported platforms

- Darwin arm64
- Darwin x86_64
- Linux x86_64
- Linux aarch64

## Installers

`bsos.installers` is a stdlib-only toolkit (Python 3.10+). Each module
exposes `install` / `uninstall` / `test` actions and compiles into a
self-contained single-file script under `install/` for `curl | python3`
use:

```bash
curl -fsSL https://raw.githubusercontent.com/ickc/envoy/main/install/code.py | python3 - install
```

With pixi available, use the tasks instead (`pixi run install -- code`,
`pixi run compile`, `pixi run test`, …).

## Continuous integration

The `test-installers` workflow runs the compiled installers end-to-end
(`install` then `test`) on the GitHub-hosted runners that map to a
supported `$(uname -sm)`:

| Runner | Platform |
|--------|----------|
| `ubuntu-latest` | Linux x86_64 |
| `ubuntu-24.04-arm` | Linux aarch64 |
| `macos-latest` | Darwin arm64 |
| `macos-26-intel` | Darwin x86_64 |

`test` skips cleanly (exit 0) on a platform an installer doesn't
support, so the same matrix works as more installers are added.
