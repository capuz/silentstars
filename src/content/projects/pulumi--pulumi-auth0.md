---
repo: "pulumi/pulumi-auth0"
name: "pulumi-auth0"
description: "An auth0Pulumi resource package, providing multi-language access to Auth0"
url: "https://github.com/pulumi/pulumi-auth0"
language: "Go"
languages: ["Go", "Makefile", "Shell"]
languagePcts: [44, 35, 21]
stars: 25
forks: 6
openIssues: 11
closedIssues: 269
watchers: 18
contributors: 84
recentReleases: 0
createdAt: "2020-05-13T19:42:04Z"
lastCommitAt: "2026-07-02T06:32:54Z"
lastReleaseAt: "2021-02-03T18:01:30Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 57
maintainers: ["pulumi-provider-automation[bot]", "pulumi-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad7f0474bee7a676d810af9414a2bc7afb329443044ece8898ad2eac79d5fe2e/pulumi/pulumi-auth0"
---

# Auth0 Resource Provider

The Auth0 Resource Provider lets you manage Auth0 resources.

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @pulumi/auth0

or `yarn`:

    $ yarn add @pulumi/auth0

### Python

To use from Python, install using `pip`:

    $ pip install pulumi_auth0

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/pulumi/pulumi-auth0/sdk/v3

### .NET

To use from .NET, install using `dotnet add package`:

    $ dotnet add package Pulumi.Auth0

## Configuration

The following configuration points are available:

- `auth0:apiToken` - (Optional) Your Auth0 [management api access
  token](https://auth0.com/docs/security/tokens/access-tokens/management-api-access-tokens). It can also be
  sourced from the `AUTH0_API_TOKEN` environment variable. It can be used instead of `auth0:clientId` +
  `auth0:clientSecret`. If both are specified, `auth0:apiToken` will be used over `auth0:clientId` +
  `auth0:clientSecret` fields.
- `auth0:audience` -…
