---
repo: "scratchfoundation/scratch-desktop"
name: "scratch-desktop"
description: "Scratch 3.0 as a self-contained desktop application"
url: "https://github.com/scratchfoundation/scratch-desktop"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
stars: 412
forks: 263
openIssues: 65
closedIssues: 92
watchers: 43
contributors: 10
recentReleases: 0
createdAt: "2018-09-06T18:17:56Z"
lastCommitAt: "2026-06-28T01:36:38Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 37
maintainers: ["cwillisf", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7872ac579077ce8673afdc9698bd460a67869f1c2c6399d5a58e7fa0a9c7a9e6/scratchfoundation/scratch-desktop"
---

# scratch-desktop

Scratch 3.0 as a standalone desktop application

## Documentation

- [Windows build matrix](docs/windows-build-matrix.md) — which {target × arch} combinations we ship for Windows and why

## Developer Instructions

### Releasing a new version
# TODO: Update readme once scratch-desktop uses scratch-gui from an npm package

Let's assume that you want to make a new release, version `3.999.0`, corresponding to `scratch-gui` version
`0.1.0-prerelease.20yymmdd`.

1. Merge `scratch-gui`:
   1. `cd scratch-gui`
   2. `git pull --all --tags`
   3. `git checkout scratch-desktop`
   4. `git merge 0.1.0-prerelease.20yymmdd`
   5. Resolve conflicts if necessary
   6. `git tag scratch-desktop-v3.999.0`
   7. `git push`
   8. `git push --tags`
2. Prep `scratch-desktop`:
   1. `cd scratch-desktop`
   2. `git pull --all --tags`
   3. `git checkout develop`
   4. `npm install --save-dev 'scratch-gui@github:scratchfoundation/scratch-gui#scratch-desktop-v3.999.0'`
   5. `git add package.json package-lock.json`
   6. Make sure the app works, the diffs look reasonable, etc.
   7. `git commit -m "bump scratch-gui to scratch-desktop-v3.999.0"`
   8. `npm version 3.999.0`
   9. `git…
