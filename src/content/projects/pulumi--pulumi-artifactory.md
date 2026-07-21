---
repo: "pulumi/pulumi-artifactory"
name: "pulumi-artifactory"
description: "Pulumi provider for Artifactory"
readmeQualityOk: true
url: "https://github.com/pulumi/pulumi-artifactory"
language: "Makefile"
languages: ["Makefile", "Go", "Shell"]
languagePcts: [38, 32, 23]
stars: 10
forks: 3
openIssues: 1
closedIssues: 364
watchers: 13
contributors: 81
recentReleases: 0
createdAt: "2021-11-05T21:00:00Z"
lastCommitAt: "2026-07-21T06:10:38Z"
lastReleaseAt: "2022-02-28T15:33:04Z"
status: "thriving"
tags: ["hidden_gem", "community_watch"]
healthScore: 98
undervaluedScore: 66
maintainers: ["pulumi-provider-automation[bot]", "pulumi-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bca0eae5173359d25e787ad2c915705d18e3c5fde527054f7043c02ff773ed32/pulumi/pulumi-artifactory"
---

# Artifactory Resource Provider

The Artifactory Resource Provider lets you manage Artifactory resources.

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @pulumi/artifactory

or `yarn`:

    $ yarn add @pulumi/artifactory

### Python

To use from Python, install using `pip`:

    $ pip install pulumi_artifactory

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/pulumi/pulumi-artifactory/sdk/v8

### .NET

To use from .NET, install using `dotnet add package`:

    $ dotnet add package Pulumi.Artifactory

## Configuration

The following configuration points are available:

- `artifactory:url` - (Required) URL of Artifactory. This can also be sourced from the `ARTIFACTORY_URL` environment variable.
- `artifactory:username` - (Optional) Username for basic auth. Requires password to be set. Conflicts with `apiKey`, 
  and `accessToken`. This can also be sourced from the `ARTIFACTORY_USERNAME` environment variable.
- `artifactory:password` - (Optional) Password…
