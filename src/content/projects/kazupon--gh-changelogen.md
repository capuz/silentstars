---
repo: "kazupon/gh-changelogen"
name: "gh-changelogen"
description: "Changelog generator for GitHub Releases"
readmeQualityOk: true
url: "https://github.com/kazupon/gh-changelogen"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["github", "changelog", "release"]
stars: 19
forks: 0
openIssues: 5
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-08-22T12:47:07Z"
lastCommitAt: "2026-08-03T06:44:18Z"
lastReleaseAt: "2022-09-04T18:31:05Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 83
undervaluedScore: 39
maintainers: ["kazupon", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddf637e4636565afa7fa015edfa96d6d44592b7fa3588a30d1edcd9ae82bfee7/kazupon/gh-changelogen"
fundingLinks: ["GITHUB:https://github.com/kazupon"]
discussionCount: 1
---

# gh-changelogen

📜 Changelog generator for GitHub Releases

## 🌟 Features

- Generate a changelog from an existing published GitHub Release.
- Generate release notes for a future tag before its GitHub Release exists.
- Update a tag section idempotently without changing unrelated changelog content.
- Use the CLI or the package API from a release tool such as bumpp.

## 🚀 Usage

### From an existing GitHub Release

Published Release mode remains the default. It uses the Release's actual name, publication time,
URL, and body.

```sh
GH_TOKEN="$(gh auth token)" npx gh-changelogen \
  --repo=kazupon/gh-changelogen \
  --tag=v1.0.0
```

### Before creating a GitHub Release

Pass `--generate-notes` to call GitHub's Generate release notes API for a future tag. The target
is resolved locally to an exact commit SHA before the request. It defaults to `HEAD`.

```sh
GH_TOKEN="$(gh auth token)" npx gh-changelogen \
  --repo=kazupon/gh-changelogen \
  --tag=v1.1.0 \
  --generate-notes \
  --target=HEAD \
  --output=CHANGELOG.md
```

Generated mode uses the operation start time in UTC and the future canonical Release URL. It only
generates notes and updates the changelog: it does not create…
