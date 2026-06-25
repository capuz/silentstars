---
repo: "jyt6640/persona-harness"
name: "persona-harness"
description: "OpenCode plugin and CLI that guides AI agents through cleaner backend generation workflows Harness."
url: "https://github.com/jyt6640/persona-harness"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-17T07:51:09Z"
lastCommitAt: "2026-06-25T06:31:01Z"
lastReleaseAt: "2026-06-22T01:34:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 44
maintainers: ["jyt6640"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fad86469566f719a127309b0f03e8f8ddcc3191a3b07a9032b11dbb373b90de/jyt6640/persona-harness"
---

# Persona Harness

Persona Harness is an OpenCode plugin and local CLI for AI coding workflow rails, evidence traces, and continuation control.

It helps an AI agent start from a clean project, read your backend requirements, follow an implementation rail, leave evidence of what it read/injected/ran, continue unfinished tickets, run verification, and fill workflow reports before claiming completion.

It does not certify generated application product quality. The current Java/Spring backend guidance is a stack-steering and workflow-observability surface, not a Clean Code guarantee, AST/linter, or enforcement engine.

If you only have a product idea, Persona Harness now routes the AI through a requirements draft first. For example, `TODO 웹 서비스 만들래` should create `.persona/workflow/requirements/backlog.md` and ask for review instead of starting implementation immediately. Implementation starts after you approve the draft with a phrase such as `진행하자`.

[English](README.md) | [한국어](README.ko.md) | [日本語](README.ja.md) | [简体中文](README.zh-cn.md)

> Current source/package candidate: `0.3.8-alpha.4`
>
> Current scope: Java/Spring backend workflow rail MVP.
>
> Not in scope yet: frontend,…
