---
repo: "DataDog/datadog-aas-extension"
name: "datadog-aas-extension"
description: "Datadog Azure App Services Site Extension"
readmeQualityOk: true
url: "https://github.com/DataDog/datadog-aas-extension"
language: "PowerShell"
languages: ["PowerShell", "Shell"]
languagePcts: [42, 27]
stars: 10
forks: 11
openIssues: 5
closedIssues: 21
watchers: 248
contributors: 5319
recentReleases: 0
createdAt: "2020-01-27T16:40:49Z"
lastCommitAt: "2026-07-20T06:33:55Z"
lastReleaseAt: "2021-08-31T18:37:00Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 93
undervaluedScore: 37
maintainers: ["dd-octo-sts[bot]", "duncanpharvey", "andrewlock"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7dbcfe0d9bf8e98e24fd4b1a2156f3d8ebb0fd8acc8acc5b6dcab339f70ddfd/DataDog/datadog-aas-extension"
---

## Requirements:
The Datadog APM Windows Site Extensions require that you setup the [Datadog Azure App Service Integration](https://docs.datadoghq.com/integrations/azure_app_services/) first.
Please follow the directions in the referenced document.

## Supported Runtimes

- .NET
- Java
- Node.js

## Installation:
Fully stop your web app before installing, modifying, or removing a Datadog APM Site Extension.

## In-repo resources

- [`install-templates/`](https://github.com/DataDog/datadog-aas-extension/blob/HEAD/install-templates/) — ARM JSON and Bicep templates for installing the extension. Includes a dedicated template for Azure Function Apps with deployment slots, which require extra steps to avoid file-lock failures during install.
- [`management-scripts/extension/`](https://github.com/DataDog/datadog-aas-extension/blob/HEAD/management-scripts/extension/) — PowerShell scripts for programmatic install and bulk update. The install script supports `-SlotName` for deployment slot targeting and automatically applies the Function App workaround when needed.

### IMPORTANT NOTICES:
#### *Restart* recycles an Application Pool. The app must be *STOPPED* before any changes to this…
