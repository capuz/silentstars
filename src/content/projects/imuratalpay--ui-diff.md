---
repo: "imuratalpay/ui-diff"
name: "ui-diff"
description: "Before/after screenshots, pixel diffs and a UX summary for UI changes in a PR (agent skill)"
readmeQualityOk: true
url: "https://github.com/imuratalpay/ui-diff"
homepage: "https://skills.muratalpay.me/ui-diff"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 123
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-11-18T20:02:22Z"
lastCommitAt: "2026-11-23T10:28:43Z"
lastReleaseAt: "2026-11-21T23:08:10Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 30
maintainers: ["imuratalpay"]
openGraphImageUrl: "https://opengraph.githubassets.com/8938a4afaaa503ed1d327e03bf0efea49487401ca95a7da278707ca37992619a/imuratalpay/ui-diff"
---

# ui-diff

Before/after screenshots, highlighted pixel diffs and a short UX summary for pull requests that
change UI, posted as **one sticky PR comment**. Images stay private: they are committed to an
orphan branch of the same repository, so only people who can read the repo can see them.

It is an agent skill (Claude Code, Cursor, Codex) with a TypeScript CLI that humans and CI can run
directly.

Site: [skills.muratalpay.me/ui-diff](https://skills.muratalpay.me/ui-diff).

## Contents

- [Quick start](#quick-start)
- [What it does](#what-it-does)
- [Install](#install)
- [Use](#use)
  - [Local check](#local-check)
  - [The comment](#the-comment)
  - [Base cache](#base-cache)
- [Configure](#configure)
  - [Focus and ignore](#focus-and-ignore)
- [Privacy and image hosting](#privacy-and-image-hosting)
- [Verified example](#verified-example)
- [Troubleshooting](#troubleshooting)
- [Development](#development)
- [Roadmap](#roadmap)

## Quick start

You need git and Node.js 20.10+. On Windows, use WSL2. The GitHub CLI (`gh auth login`) is only
needed to publish: `ui-diff publish` and `--pr <number>`, which reads the pull request from GitHub.
