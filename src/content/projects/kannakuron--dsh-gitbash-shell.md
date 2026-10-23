---
repo: "KannaKuron/dsh-gitbash-shell"
name: "dsh-gitbash-shell"
description: "DSH plugin: Git Bash shell for all agent modes on Windows (replaces pwsh executor)"
originalDescription: "DSH plugin: Git Bash shell for all agent modes on Windows (replaces pwsh executor)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/KannaKuron/dsh-gitbash-shell"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["agent-preset", "cordis", "deepseek", "deepseek-harness", "dsh", "dsh-plugin", "git-bash", "shell", "windows"]
stars: 40
forks: 3
openIssues: 1
closedIssues: 24
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-08-23T11:04:25Z"
lastCommitAt: "2026-10-23T12:04:37Z"
lastReleaseAt: "2026-08-23T13:38:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 44
maintainers: ["KannaKuron", "KouzakiUmi", "youyv"]
openGraphImageUrl: "https://opengraph.githubassets.com/86eafb9b6981c8c45dddf99f09d55667c3b3abb7ccf431bededdb61894bc9409/KannaKuron/dsh-gitbash-shell"
---

# dsh-gitbash-shell

简体中文 | [English](https://github.com/KannaKuron/dsh-gitbash-shell/blob/HEAD/README_EN.md)

> **Unreleased / experimental implementation discussion**: The fail-closed behavior and the two explicit tools described below have not been formally released and are not a release candidate. Installing the public npm package does not guarantee these changes are included. See [design, interface and pending decisions](https://github.com/KannaKuron/dsh-gitbash-shell/blob/HEAD/<docs/experimental-native-execution.md>), [verification matrix and reproduction](https://github.com/KannaKuron/dsh-gitbash-shell/blob/HEAD/<docs/experimental-native-verification.md>), and the CHANGELOG.

> An official-style plugin that makes DeepSeek Harness (dsh) **run commands with Git Bash by default** on Windows.
> It does not replace the host executor (the official PowerShell executor is kept as is). It adds its own bash tool (a private Git Bash executor instance, not registered as a service) and registers a Git Bash version of the agent preset for every mode.

## What problem it solves

The official Windows combination defaults to `dsh-pwsh-sandbox` as `ctx.shell` (the PowerShell executor), and…
