---
repo: "ClusterLabs/hawk-apiserver"
name: "hawk-apiserver"
description: "Next generation HA cluster interface"
readmeQualityOk: true
url: "https://github.com/ClusterLabs/hawk-apiserver"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [45, 41]
stars: 12
forks: 13
openIssues: 6
closedIssues: 10
watchers: 14
contributors: 17
recentReleases: 0
createdAt: "2017-04-05T08:51:43Z"
lastCommitAt: "2026-11-05T14:05:07Z"
lastReleaseAt: "2020-11-06T20:07:32Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 84
undervaluedScore: 62
maintainers: ["aleksei-burlakov"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7730f90ec3fb38e7e6e2f9a066fca594a458c7b37f8810255e4d5cba2072ab8/ClusterLabs/hawk-apiserver"
---

What is it?
===========
This is a new branch of hawk-apiserver aimed at reproducing some of the functionality
from the original hawk2.

Why is it good?
===============
The goal is to migrate all functionality from the original hawk2 RoR project
to the Go-based hawk-apiserver project, so that we can eventually remove hawk entirely.
This means we will no longer need to maintain the Hawk ruby packages.

What is already implemented?
============================
As of 17.11.2025, the following entry point exists:
```
cib/live/primitives/{resouce-id}/edit
```
it is currently in alpha state. You can access it via:
```
MONITORING -> Status -> [{Resource-ID} dwopdown menu ▼] -> ✏️ Edit
```

There are also custom JavaScript classes in static/js/classes designed to simplify the development.

What about hawk2?
=================
The idea is to migrate the functionality from Ruby to Go without big changes to the Ruby part.
However, some changes are unavoidable. For example, when redirecting from one web page to another, Ruby passes the arguments through its internal cookies, which are not accessible from Go. Therefore, Ruby must to provide the arguments explicitely through the URL.
For now,…
