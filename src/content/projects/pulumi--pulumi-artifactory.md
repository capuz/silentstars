---
repo: "pulumi/pulumi-artifactory"
name: "pulumi-artifactory"
description: "Pulumi provider for Artifactory"
url: "https://github.com/pulumi/pulumi-artifactory"
language: "Makefile"
languages: ["Makefile", "Go", "Shell"]
languagePcts: [41, 34, 24]
stars: 10
forks: 3
openIssues: 1
closedIssues: 363
watchers: 13
contributors: 81
recentReleases: 0
createdAt: "2021-11-05T21:00:00Z"
lastCommitAt: "2026-07-03T06:22:57Z"
lastReleaseAt: "2022-02-28T15:33:04Z"
status: "thriving"
tags: ["hidden_gem", "community_watch"]
healthScore: 98
undervaluedScore: 66
maintainers: ["pulumi-provider-automation[bot]", "pulumi-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/749cca3a724d0c2567063d687ad7e316d3ebc497086c61fcdb7fdad584dfafd9/pulumi/pulumi-artifactory"
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
