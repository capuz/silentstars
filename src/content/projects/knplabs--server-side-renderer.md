---
repo: "KnpLabs/server-side-renderer"
name: "server-side-renderer"
description: "Docker image to server side render html pages using a browser (supports SPAs)"
readmeQualityOk: true
url: "https://github.com/KnpLabs/server-side-renderer"
homepage: "https://knplabs.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["nodejs", "server-side-rendering", "hacktoberfest", "docker"]
stars: 14
forks: 3
openIssues: 4
closedIssues: 2
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2021-05-11T15:03:20Z"
lastCommitAt: "2026-10-26T09:18:52Z"
lastReleaseAt: "2021-08-24T09:23:08Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 76
undervaluedScore: 44
maintainers: ["hlegay", "dependabot[bot]", "EVDW"]
openGraphImageUrl: "https://opengraph.githubassets.com/66084e3b1d218e3f5357ac43ae000c124a37dce94e2233b3c94167dc1032d754/KnpLabs/server-side-renderer"
discussionCount: 6
---

Server-side-renderer
======================================================

| Branch    | Status | Release | Licence |
| --------- | ------ | ------- | ------- |
| `master`  | [](https://dl.circleci.com/status-badge/redirect/gh/KnpLabs/server-side-renderer/tree/master) |  | 

## Description

Docker image to server side render dynamic html pages using a browser.

This service exposes a web-service that lets you request the dynamic html
pages rendering. Html pages are rendered using a headless browser (at the
moment only Chrome is supported).

This service is scalable and you can add as many replicas as you want in order
to support a high number of requests. Every replica manages one request at a
time and, if all the replicas are busy the following requests will be queued
and processed sequentially.

Every replica can be configured to be a manager, a worker or both (see the
[configuration](#configuration) section to find out how to configure them).

> We strongly recommend to configure a cache layer on top of this component to
avoid re-generating the same resource multiple times (except if not
specifically needed).

### Manager

Managers are responsible to expose the web-service to…
