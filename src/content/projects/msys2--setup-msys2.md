---
repo: "msys2/setup-msys2"
name: "setup-msys2"
description: "GitHub Action to setup MSYS2"
readmeQualityOk: true
url: "https://github.com/msys2/setup-msys2"
homepage: "https://github.com/marketplace/actions/setup-msys2"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["msys2", "mingw64", "mingw32", "actions", "gha", "workflow", "windows", "bash", "ci"]
stars: 388
forks: 51
openIssues: 24
closedIssues: 96
watchers: 6
contributors: 19
recentReleases: 0
createdAt: "2019-10-06T16:31:44Z"
lastCommitAt: "2026-07-13T06:37:11Z"
lastReleaseAt: "2025-02-22T14:15:03Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 94
undervaluedScore: 34
maintainers: ["dependabot[bot]", "lazka"]
openGraphImageUrl: "https://opengraph.githubassets.com/afbf4ff02b3279684e8e11db52439b3f81dbc0b4c76baf15804cce758d7c9fac/msys2/setup-msys2"
---

# Setup MSYS2

**setup-msys2** is a GitHub Action (GHA) to setup an [MSYS2](https://www.msys2.org/) environment (i.e. MSYS,
MINGW32, MINGW64, UCRT64, CLANG64 and/or CLANGARM64 shells)

It provides:

* Easy installation and updates
* Easy package installation including caching for faster re-runs
* A shell helper for running your commands or your whole job in an MSYS2 environment

## Usage

```yaml
  - uses: msys2/setup-msys2@v2
```

Then, for scripts:

```yaml
  - shell: msys2 {0}
    run: |
      uname -a
```

It is also possible to execute specific commands from cmd/powershell scripts/snippets.
In order to do so, `-c` is required:

```yaml
  - shell: powershell
    run: msys2 -c 'uname -a'
```

```yaml
  - shell: cmd
    run: msys2 -c 'uname -a'
```

### Default shell

In order to reduce verbosity, it is possible to set `msys2` as the default shell. For example:

```yaml
  defaults:
    run:
      shell: msys2 {0}
  steps:
  - uses: msys2/setup-msys2@v2
    with:
      update: true
      install: >-
        curl
        git
  - uses: actions/checkout@v4
```

### Build matrix

It is common to test some package/tool on multiple environments, which typically requires installing…
