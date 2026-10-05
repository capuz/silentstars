---
repo: "jdx/mr-boxington-action"
name: "mr-boxington-action"
description: "Set up mr boxington with GitHub Actions cache or an mbx cache server"
readmeQualityOk: true
url: "https://github.com/jdx/mr-boxington-action"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 6
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-08-24T18:52:10Z"
lastCommitAt: "2026-10-05T10:47:50Z"
lastReleaseAt: "2026-10-04T01:05:36Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 66
maintainers: ["jdx", "dependabot[bot]", "donbeave"]
openGraphImageUrl: "https://opengraph.githubassets.com/c72c9b2543b275d8095bb0a79b6a4b1c57c706b45e545dec0bb7fd915c2959a3/jdx/mr-boxington-action"
fundingLinks: ["GITHUB:https://github.com/jdx", "CUSTOM:https://jdx.dev"]
---

# mr-boxington-action

Set up [mr boxington](https://github.com/jdx/mr-boxington) and use its local
store directly or back it with GitHub Actions cache, an mbx-compatible server, or an S3
bucket. When
`version` is omitted, the action uses `mbx` from `PATH` and downloads the latest
release only when it is absent. Setting `version` always installs that release.

## Local filesystem

```yaml
steps:
  - uses: actions/checkout@v7
  - uses: jdx/mr-boxington-action@v1
    with:
      backend: local
  - run: mbx test --workspace
```

The local backend installs or reuses mbx and leaves its store on the filesystem without
configuring a remote transport or an upload/download phase. This is useful on
persistent runners and with volume actions that mount mbx's cache directory.

## GitHub Actions cache

```yaml
permissions:
  contents: read

steps:
  - uses: actions/checkout@v7
  - uses: jdx/mr-boxington-action@v1
  - run: mbx test --workspace
```

The default backend restores Cargo's pruned target directory and registry from
the previous compatible build on every run, so a job that changes a few files
recompiles only those crates. It saves a new immutable entry for pushes to the
repository's…
