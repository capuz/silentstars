---
repo: "raulvc/jira-kanban"
name: "jira-kanban"
description: "a TUI for visualizing a Jira kanban board, designed to look as close as possible to the webview using Atlassian's open API's"
readmeQualityOk: true
url: "https://github.com/raulvc/jira-kanban"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-05-29T13:51:38Z"
lastCommitAt: "2026-08-28T14:17:01Z"
lastReleaseAt: "2026-08-28T14:24:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 55
maintainers: ["raulvc"]
openGraphImageUrl: "https://opengraph.githubassets.com/667f8e3a4e01cf11157e58c2f6a4b71cc964486446a6c8dc5fa3f25dafd9bf8a/raulvc/jira-kanban"
---

# jira-kanban

A fast, lightweight Jira kanban board for the terminal.

Jira's web interface is resource-heavy and slow — it easily consumes hundreds of megabytes of RAM and still feels sluggish. `jira-kanban` gives you a snappy, keyboard-driven view of your board that stays out of your way and uses a fraction of the resources.

## Install

```
go install github.com/raulvc/jira-kanban@latest
```

## First run

On first launch, `jira-kanban` will prompt for any missing configuration values interactively (with masked input for the API token) and save them automatically:

```
$ jira-kanban
Jira base URL [https://your-company.atlassian.net]:
Email [you@company.com]:
API token:
Board ID [42]:
```

After that, the config file is stored at `~/.config/jira-kanban/config.yml` and you won't be prompted again.

### Configuration file

```yaml
base_url: "https://your-company.atlassian.net"
email: "you@company.com"
api_token: "your-jira-api-token"
board_id: 42
```

> **API token** — Create one at [id.atlassian.com/manage-profile/security/api-tokens](https://id.atlassian.com/manage-profile/security/api-tokens).

### Override the board

You can switch boards without editing the config:

```…
