---
repo: "irgaly/setup-mint"
name: "setup-mint"
description: "A Github Action to install Mint, a swift package manager."
readmeQualityOk: true
url: "https://github.com/irgaly/setup-mint"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["swift", "mint", "ios", "github-actions"]
stars: 19
forks: 5
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-02-18T08:51:25Z"
lastCommitAt: "2026-10-10T10:04:31Z"
lastReleaseAt: "2025-04-20T11:34:53Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 63
maintainers: ["irgaly", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b0a54d52271809dd834394ee2f75c05dc67fdf6ad953b3cbf3339b4b8174f72/irgaly/setup-mint"
fundingLinks: ["GITHUB:https://github.com/irgaly", "CUSTOM:https://github.com/irgaly/irgaly"]
discussionCount: 0
---

# setup-mint

A Github Action to install [Mint](https://github.com/yonaskolb/Mint), a swift package manager.

This action supports:

* detect Mintfile and run mint bootstrap
* cache mint binary and swift commands that installed by mint

## Usage

Add mint version to Mintfile (optional)

`Mintfile`

```
yonaskolb/mint@0.17.0
```

Use this action in a workflow.

```yml
    - uses: irgaly/setup-mint@v1
```

## setup-mint step details

setup-mint step will do:

* Retrieve mint version from Mintfile
  * setup-mint will use mint@master if mint version is not specified in Mintfile
* Install mint to /usr/local/bin/mint
* Cache mint binary for next run
* Run `mint bootstrap` to install swift commands
* Cleanup unused swift commands, that is not listed in Mintfile.
* Cache swift commands for next run

## Platform

This action can be used in a macOS runner and a Linux runner.

## All Options

```yml
    - uses: irgaly/setup-mint@v1
      with:
        # a directory contains Mintfile, default: GITHUB_WORKSPACE
        mint-directory: .
        # a directory where mint executable itself will be installed, default: /usr/local/bin
        mint-executable-directory: /usr/local/bin
        # run…
