---
repo: "renovatebot/azure-devops-marketplace"
name: "azure-devops-marketplace"
description: "Script to generate the renovate-bot config file for Azure DevOps Marketplace"
readmeQualityOk: true
url: "https://github.com/renovatebot/azure-devops-marketplace"
homepage: "https://jessehouwing.net/azure-pipelines-enable-renovatebot/"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["azure-devops", "azure-devops-extension", "azure-pipelines-yaml", "dependency"]
stars: 10
forks: 4
openIssues: 4
closedIssues: 8
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2023-01-05T07:23:45Z"
lastCommitAt: "2026-11-09T04:34:50Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 93
undervaluedScore: 77
maintainers: ["jessehouwing"]
openGraphImageUrl: "https://opengraph.githubassets.com/01e729c98a45dfb4dac1c73885b1b6e3b2ecc7f06d53ecfb7272fabad4a69476/renovatebot/azure-devops-marketplace"
fundingLinks: ["GITHUB:https://github.com/jessehouwing"]
---

# renovate-azure-devops-marketplace

To allow Renovate to update Azure DevOps Marketplace extensions for Azure Pipelines, this repo generates a file with all versions of all tasks currently published to the Azure DevOps marketplace.

## Contents

### `01-update-extension-cache.ps1`

Refreshes the data in the `.cache` folder with the latest data from the Visual Studio Azure DevOps Marketplace.

### `.cache`

The `extensions.json` file contains a list of all public extensions published in the Azure Pipelines category on the Visual Studio Azure DevOps Marketplace.

And a subfolder per publisher/extension for the manifest data for each extension. 

 * `extension.json` - the list of all versions of the extension ever published to the Azure DevOps Marketplace.

And then per version the data for that specific extension version.

 * `extension.vsomanifest` - the manifest data that contains the contribution-id for each task.
 * `task.json` - the manifest data for that specific task version.

### `02-generate-renovate-data-marketplace.ps1`

Uses the data in the `.cache` folder to generate the datafile used by [Renovate](https://github.com/renovatebot/renovate).

###…
