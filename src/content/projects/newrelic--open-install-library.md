---
repo: "newrelic/open-install-library"
name: "open-install-library"
description: "New Relic's open instrumentation installation recipe database and service"
readmeQualityOk: true
url: "https://github.com/newrelic/open-install-library"
language: "Shell"
languages: ["Shell", "HCL"]
languagePcts: [41, 23]
stars: 23
forks: 64
openIssues: 3
closedIssues: 103
watchers: 28
contributors: 109
recentReleases: 0
createdAt: "2020-10-13T16:33:41Z"
lastCommitAt: "2026-09-17T12:37:05Z"
lastReleaseAt: "2020-12-17T18:25:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 96
undervaluedScore: 64
maintainers: ["github-actions[bot]", "pranav-new-relic", "zsistla"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b568d159cca1aae1c81cede509a28bafbf21ff1b08714dfcfe6bcba8616923e/newrelic/open-install-library"
discussionCount: 0
---

# Open Install Library

A collection of recipes designed to support the automated installation and setup of New Relic products and integrations.

## Mission

Deliver a consistent user experience, open source ecosystem, and platform services that allow any engineer in the world:

- to go from inadequate monitoring
- to complete instrumentation of their environment
- to realizing a win with New Relic

in 5 minutes or less.

## Commands

### Linux/MacOS
```bash
# Installs the newrelic-cli and invokes the install command
# Replace <API_KEY> AND <ACCOUNT_ID> with your own
curl -Ls https://download.newrelic.com/install/newrelic-cli/scripts/install.sh | bash && sudo NEW_RELIC_API_KEY=<API_KEY> NEW_RELIC_ACCOUNT_ID=<ACCOUNT_ID> /usr/local/bin/newrelic install
```

### Windows
```PowerShell
[Net.ServicePointManager]::SecurityProtocol = 'tls12, tls'; 
(New-Object System.Net.WebClient).DownloadFile("https://download.newrelic.com/install/newrelic-cli/scripts/install.ps1", "$env:TEMP\install.ps1"); & $env:TEMP\install.ps1; $env:NEW_RELIC_API_KEY='<API_KEY>'; $env:NEW_RELIC_ACCOUNT_ID='<ACCOUNT_ID>'; & 'C:\Program Files\New Relic\New Relic CLI\newrelic.exe' install
```

## Docs

Project…
