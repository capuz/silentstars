---
repo: "micro/mu"
name: "mu"
description: "An open runtime for personal assistants."
readmeQualityOk: true
url: "https://github.com/micro/mu"
homepage: "https://micro.mu"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["micro", "agent", "assistant"]
stars: 440
forks: 21
openIssues: 61
closedIssues: 570
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-11-06T09:21:18Z"
lastCommitAt: "2026-11-17T14:35:21Z"
lastReleaseAt: "2026-01-29T12:34:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 36
maintainers: ["asim"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5a624dc2bd6e89baf89c7b61c33061fda0df52abc02d316c20f837bddd27d5a/micro/mu"
discussionCount: 2
---

# Mu

An open runtime for personal assistants.

## Overview

Mu brings together agents, connected services, accounts, permissions and persistent
history. Run it yourself or use a hosted instance, then access your assistants
through a focused client or the broader web console.

**Micro** is the general-purpose assistant. Other agents can have their own
instructions and permitted tools. The Android app and standalone web client provide voice
and text interaction; the web console provides Home, Inbox, Agents and Services
for overview, configuration and direct access to capabilities.

Services supply mail, calendar, contacts, information, media and storage. Agents
use those capabilities to carry out requests. Mu runs them together as one Go
binary, using Go Micro as its underlying framework.

## Architecture 

```text
      mobile / web / clients
                |
          assistant proto
                |
     MUCP over HTTPS + JSON (*)
                |
         Mu runtime (server)
      +----------------------+
      | Authenticated entry  |
      |          |           |
      | Agent + thread       |
      |          |           |
      | Permitted tools      |
      |…
