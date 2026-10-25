---
repo: "EterUltimate/EterUee"
name: "EterUee"
description: "EterUee is an Android APP that supports for multiple LLM providers."
readmeQualityOk: true
url: "https://github.com/EterUltimate/EterUee"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [84]
stars: 34
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 20
recentReleases: 0
createdAt: "2026-04-24T20:27:13Z"
lastCommitAt: "2026-10-25T08:41:39Z"
lastReleaseAt: "2026-05-29T03:36:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 41
maintainers: ["EterUltimate", "re-ovo", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1220363221/fee91ddd-d496-4036-84e8-91c9cde095e2"
discussionCount: 0
---

# EterUee

EterUee is a native Android LLM client built around local-first conversations, provider-agnostic AI access, roleplay workflows, an embedded browser UI, and app-local automation tools.

Languages: English | [简体中文](https://github.com/EterUltimate/EterUee/blob/HEAD/README_ZH_CN.md) | [繁體中文](https://github.com/EterUltimate/EterUee/blob/HEAD/README_ZH_TW.md)

## Current State

The active development line is `dev`. The published release line is `main`, with non-Apple release artifacts available from [GitHub Releases](https://github.com/EterUltimate/EterUee/releases).

Recent work has moved the project beyond a basic Android chat client:

- Update checks now use `https://github.com/EterUltimate/EterUee/releases`.
- The built-in EterUee provider defaults to `https://newapi.eterultimate.asia/v1` and is described as the official API.
- `termux/termux-app` terminal modules are integrated as the default local shell surface through local sibling checkout `../termux-app`.
- Managed workspace sandboxes follow the RikkaHub 2.3.0 files/linux/tmp layout, with Arch Linux as the default proot runtime and Ubuntu 24.04 available as the optional `ubuntu-proot` plugin.
- `hiddify/hiddify-core`…
