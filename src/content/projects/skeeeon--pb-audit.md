---
repo: "skeeeon/pb-audit"
name: "pb-audit"
description: "An audit logging library for PocketBase that tracks all record operations across collections, including database events, API requests, and authentication events."
readmeQualityOk: true
url: "https://github.com/skeeeon/pb-audit"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["pocketbase", "pocketbase-plugins"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2025-04-17T03:36:04Z"
lastCommitAt: "2026-11-06T02:44:38Z"
lastReleaseAt: "2026-10-19T02:38:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 61
maintainers: ["skeeeon"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a0e73ff44386141c03afd8aeb97d5b38f282c5d37c4fd0f8cb4dee7d48fab5e/skeeeon/pb-audit"
---

# PocketBase Audit Logging (pb-audit)

A comprehensive, production-ready audit logging library for [PocketBase](https://pocketbase.io/) applications. Track all database operations, API requests, and authentication events — every one recording who acted, when, and which fields changed. Full before/after values are opt-in per collection, so the trail does not quietly become a copy of everything you store.

## Features

- 📝 **Dual-tracking system**: Captures both user intent (requests) and actual results (commits)
- 🔄 **Complete change history**: Every event names the fields that changed; full before/after values are opt-in per collection
- 🔒 **Safe by default**: Values are not copied into the audit log unless you ask for them, so a field left readable for its owner does not become a permanent second copy
- 👤 **User attribution**: Tracks who performed each action
- 🌐 **Request metadata**: IP addresses, HTTP methods, URLs, and more
- 🔐 **Authentication events**: Login tracking with auth method details
- 🛡️ **Recursion prevention**: Automatically skips logging on audit collection itself
- 🚀 **Auto-setup**: Creates collection and indexes automatically
- ⚙️ **Non-destructive**:…
