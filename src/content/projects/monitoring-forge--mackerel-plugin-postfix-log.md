---
repo: "monitoring-forge/mackerel-plugin-postfix-log"
name: "mackerel-plugin-postfix-log"
description: "Read and analyze postfix logs"
originalDescription: "Read and analyze postfix logs"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/monitoring-forge/mackerel-plugin-postfix-log"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 5
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2019-04-19T13:56:32Z"
lastCommitAt: "2026-11-03T11:14:37Z"
lastReleaseAt: "2026-08-10T23:33:13Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 95
maintainers: ["kazeburo", "dependabot[bot]", "monitoring-forge-files-sync-action[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5391c5b56d7bdc8c015d773734f8bce8e86bb283a850650a8ae70124c5f5a7f5/monitoring-forge/mackerel-plugin-postfix-log"
---

# mackerel-plugin-postfix-log

A plugin that parses Postfix's `maillog` and posts mail delivery delays and forwarding results to Mackerel.

## Overview

This plugin parses Postfix SMTP send logs (`postfix/smtp`) and outputs the following information as Mackerel custom metrics.

- Delivery delay times (total / recving / queuing / connection / transmission)
- Counts by forwarding result (2xx / 4xx / 5xx)
- Ratios by forwarding result (2xx / 4xx / 5xx)

## Installation

### When using the mkr command

Install the Mackerel plugin.

```bash
mkr plugin install monitoring-forge/mackerel-plugin-postfix-log
```

Example install location: `/opt/mackerel-agent/plugins/bin/mackerel-plugin-postfix-log`

### When downloading from GitHub Releases

Download the latest binary for your OS and architecture from [GitHub Releases](https://github.com/monitoring-forge/mackerel-plugin-postfix-log/releases/).

```bash
# Example: for Linux x86_64
curl -L -o mackerel-plugin-postfix-log.tar.gz \
  "https://github.com/monitoring-forge/mackerel-plugin-postfix-log/releases/latest/download/mackerel-plugin-postfix-log_linux_amd64.tar.gz"
tar xzf mackerel-plugin-postfix-log.tar.gz
```

## Configuration in…
