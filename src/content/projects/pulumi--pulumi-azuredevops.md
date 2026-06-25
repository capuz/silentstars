---
repo: "pulumi/pulumi-azuredevops"
name: "pulumi-azuredevops"
description: "An AzureDevOps Pulumi resource package, providing multi-language access to AzureDevOps"
url: "https://github.com/pulumi/pulumi-azuredevops"
language: "Makefile"
languages: ["Makefile", "Go", "Shell"]
languagePcts: [45, 28, 27]
stars: 22
forks: 5
openIssues: 9
closedIssues: 124
watchers: 20
contributors: 84
recentReleases: 0
createdAt: "2020-04-29T15:21:45Z"
lastCommitAt: "2026-06-25T06:42:23Z"
lastReleaseAt: "2021-04-12T17:26:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 57
maintainers: ["pulumi-provider-automation[bot]", "pulumi-bot", "corymhall"]
openGraphImageUrl: "https://opengraph.githubassets.com/956422d45e8705a7c0dde8825c8fe826ae9087ecf23ceff766d2874e8db03cb6/pulumi/pulumi-azuredevops"
---

# Azure DevOps Resource Provider

The Azure DevOps resource provider for Pulumi lets you manage Azure DevOps
resources in your cloud programs. To use this package, please [install the
Pulumi CLI first](https://pulumi.io/).

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @pulumi/azuredevops

or `yarn`:

    $ yarn add @pulumi/azuredevops

### Python

To use from Python, install using `pip`:

    $ pip install pulumi_azuredevops

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/pulumi/pulumi-azuredevops/sdk/v3

## Configuration

The following configuration points are available:

* `azuredevops:orgServiceUrl` - (Required) This is the Azure DevOps organization url. It can also be sourced from the `AZDO_ORG_SERVICE_URL` environment variable.
* `azuredevops:personalAccessToken` - (Required) This is the Azure DevOps organization personal access token. The account corresponding to the token will need "owner" privileges for this organization. It can also be…
