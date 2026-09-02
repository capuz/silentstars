---
repo: "wzshiming/gh-ci-bot"
name: "gh-ci-bot"
description: "Let CI Robot automatically execute commands for your PR/issue in your Github repository, hosting on Github Action does not require your server."
readmeQualityOk: true
url: "https://github.com/wzshiming/gh-ci-bot"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["ci", "robot"]
stars: 14
forks: 9
openIssues: 18
closedIssues: 33
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2021-12-03T05:53:56Z"
lastCommitAt: "2026-09-02T08:04:16Z"
lastReleaseAt: "2026-08-18T04:54:46Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure", "fork_magnet"]
healthScore: 78
undervaluedScore: 77
maintainers: ["wzshiming", "Copilot", "Codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/802133f1bcc42a4ddac92866c5df2855f3abf1f8fb7eb5d0bcce2d2c1387b814/wzshiming/gh-ci-bot"
---

# gh-ci-bot

A CI bot for GitHub, delivered as a single GitHub [Action](https://github.com/wzshiming/gh-ci-bot/blob/HEAD/examples/ci-bot.yml): it brings Prow-style chat commands and automation to your issues and pull requests, with no server to run.

It supports [Kubernetes Prow](https://github.com/kubernetes-sigs/prow) [OWNERS](https://www.kubernetes.dev/docs/guide/owners/) files, so you can use it as an alternative to GitHub [CODEOWNERS](https://github.blog/2017-07-06-introducing-code-owners/).

## Getting Started

Copy [examples/ci-bot.yml](https://github.com/wzshiming/gh-ci-bot/blob/HEAD/examples/ci-bot.yml) into the `.github/workflows/` directory of your repository, then adjust the environment variables in it: the plugins enabled for each permission tier, the `REVIEWERS`/`APPROVERS`/`MAINTAINERS` lists, and feature toggles. Everything is configured through environment variables in that single workflow file; the action itself needs no inputs.

## Commands

| Command                           | Example                                                | Description…
