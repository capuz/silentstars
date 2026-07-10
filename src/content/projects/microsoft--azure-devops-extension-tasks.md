---
repo: "microsoft/azure-devops-extension-tasks"
name: "azure-devops-extension-tasks"
description: "Pipeline tasks for Azure DevOps Extensions"
readmeQualityOk: true
url: "https://github.com/microsoft/azure-devops-extension-tasks"
homepage: "https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vsts-developer-tools-build-tasks"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["azure-devops", "azure-devops-extension", "azure-pipelines", "azure-pipelines-task", "continuous-delivery"]
stars: 202
forks: 89
openIssues: 3
closedIssues: 209
watchers: 17
contributors: 39
recentReleases: 0
createdAt: "2016-05-02T13:57:37Z"
lastCommitAt: "2026-07-10T07:00:56Z"
lastReleaseAt: "2021-02-11T10:47:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 43
maintainers: ["dependabot[bot]", "jessehouwing"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/57894036/e6037b00-14c6-11eb-9ba5-1966e2235f62"
fundingLinks: ["GITHUB:https://github.com/jessehouwing", "CUSTOM:https://www.paypal.me/jessehouwing/5"]
discussionCount: 1
---

# Azure DevOps Extension Tasks

This extension provides build and release tasks for packaging and publishing Azure Devops Extensions to the [Visual Studio Marketplace](https://marketplace.visualstudio.com). There are also tasks to share and install your extension to your Azure Devops organization or Team Foundation Server.

## To use

[Learn more](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vsts-developer-tools-build-tasks) about this extension and install the extension into your Azure DevOps Organization via the Visual Studio Marketplace.

## Available tasks

Azure DevOps

* **Package**: package an Azure DevOps extension into an extension package (.VSIX) file
* **Publish**: (optionally) package and publish an extension (either privately or publicly) to the Visual Studio Marketplace
* **Unpublish**: unpublish an extension from the Visual Studio Marketplace
* **Share**: share an extension with an Azure DevOps organization
* **Install**: install an extension to an Azure DevOps organization
* **Query version**: query an extension's version (to make it easy to increment on your next package or publish)
* **Wait for validation**: waits for the Visual Studio…
