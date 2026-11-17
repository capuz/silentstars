---
repo: "arthur-ai/deckard"
name: "deckard"
description: "Detects shadow AI agents before they go rogue."
readmeQualityOk: true
url: "https://github.com/arthur-ai/deckard"
language: "Shell"
languages: ["Shell"]
languagePcts: [98]
stars: 106
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 3
createdAt: "2026-10-24T13:56:13Z"
lastCommitAt: "2026-11-17T14:42:56Z"
lastReleaseAt: "2026-10-27T22:02:05Z"
status: "newborn"
tags: []
healthScore: 85
undervaluedScore: 32
maintainers: ["ntatsumi", "fryz", "kc961163"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2794a4c775df9bae249743c51f2e2041321e1586d1466041600da5228fecb36/arthur-ai/deckard"
---

# Arthur Deckard

**Scan your endpoints, cloud, and network for shadow Agents and track them in your SIEM.**

Deckard scans your systems (cloud AI platforms, endpoints, network logs and
your SIEM) for AI agents, and sends every one it finds to Elasticsearch, Splunk, your SIEM or any
webhook. It's headless, read-only, and runs entirely in your environment.

## Quickstart

Find the AI agents on your own machine in a couple of minutes, with no accounts or
credentials. You need Docker with Compose 2.24 or later, and
[osquery](https://osquery.io/downloads) (`brew install --cask osquery` on a Mac).

### Set up with a coding agent

Paste this into Claude Code, Cursor, Codex or any coding agent on your machine:

```text
Download https://raw.githubusercontent.com/arthur-ai/deckard/main/docs/agent-setup/prompt.md with curl, read all of it, and follow its instructions to set up Arthur Deckard on this machine.
```

It checks your machine first and, if something needs installing or your password, stops and
tells you the command to run yourself. Then it runs the steps below, shows you the agents it
found, and can walk you through adding a cloud, MDM or SIEM source and your own destination.
The…
