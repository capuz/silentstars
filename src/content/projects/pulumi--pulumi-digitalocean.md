---
repo: "pulumi/pulumi-digitalocean"
name: "pulumi-digitalocean"
description: "A DigitalOcean Pulumi resource package, providing multi-language access to DigitalOcean"
readmeQualityOk: true
url: "https://github.com/pulumi/pulumi-digitalocean"
language: "Go"
languages: ["Go", "Makefile"]
languagePcts: [50, 28]
topics: ["digitalocean", "pulumi", "typescript", "python", "dotnet", "csharp", "golang", "go"]
stars: 92
forks: 13
openIssues: 25
closedIssues: 268
watchers: 19
contributors: 89
recentReleases: 0
createdAt: "2018-10-08T23:17:19Z"
lastCommitAt: "2026-07-10T07:02:09Z"
lastReleaseAt: "2020-11-17T18:18:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 46
maintainers: ["pulumi-provider-automation[bot]", "pulumi-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e565e45e58c847ac9666e54b5e505744d903c3127e658b76b679861c6ccd859/pulumi/pulumi-digitalocean"
---

# DigitalOcean provider

The DigitalOcean resource provider for Pulumi lets you use DigitalOcean resources in your cloud programs.  To use
this package, please [install the Pulumi CLI first](https://pulumi.io/).

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @pulumi/digitalocean

or `yarn`:

    $ yarn add @pulumi/digitalocean

### Python

To use from Python, install using `pip`:

    $ pip install pulumi_digitalocean

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/pulumi/pulumi-digitalocean/sdk/v4

### .NET

To use from .NET, install using `dotnet add package`:

    $ dotnet add package Pulumi.Digitalocean

## Configuration

The following configuration points are available:

- `digitalocean:token` - (Required) This is the DO API token. Alternatively, this can also be specified using environment
  variables, ordered by precedence, `DIGITALOCEAN_TOKEN` or `DIGITALOCEAN_ACCESS_TOKEN`.
- `digitalocean:spacesAccessId` - (Optional) The access key ID used…
