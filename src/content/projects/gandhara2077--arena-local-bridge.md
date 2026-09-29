---
repo: "Gandhara2077/arena-local-bridge"
name: "arena-local-bridge"
description: "Bridge Arena.ai blind-model-battle sessions into a local OpenAI-compatible API, with batch session harvesting, model identification and archival."
readmeQualityOk: true
url: "https://github.com/Gandhara2077/arena-local-bridge"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
stars: 14
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-22T16:04:34Z"
lastCommitAt: "2026-09-29T08:11:19Z"
lastReleaseAt: "2026-09-26T11:18:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 39
maintainers: ["Gandhara2077"]
openGraphImageUrl: "https://opengraph.githubassets.com/57d78147208ec503cccfd605b648772841ebbb9f51d005c028fe0434988cb20c/Gandhara2077/arena-local-bridge"
---

# Arena Local Bridge

[English](https://github.com/Gandhara2077/arena-local-bridge/blob/HEAD/README.md) | [简体中文](https://github.com/Gandhara2077/arena-local-bridge/blob/HEAD/README.zh-CN.md)

Run your own [Arena.ai](https://arena.ai) Agent Mode sessions through a local **OpenAI-compatible API**.

The project combines the browser/session bridge from [parham7991/arena-account-bridge](https://github.com/parham7991/arena-account-bridge) with additional local tooling for:

- persistent Arena sessions;
- batch session harvesting;
- model identification;
- model-result archival;
- batch prompt testing;
- a local operations UI.

> **Project status:** early-stage OSS. Arena's web application and undocumented runtime behavior can change without notice. Expect maintenance when Arena changes its frontend, authentication flow, or telemetry format.

## What it does

~~~text
Your local agent / client
        │
        │ OpenAI-compatible HTTP
        ▼
┌──────────────────────────┐
│     Arena Local Bridge   │
│                          │
│  session management      │
│  browser automation      │
│  OpenAI-compatible API   │
│  harvesting / testing    │
│  model archival          │…
