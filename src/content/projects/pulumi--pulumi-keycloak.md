---
repo: "pulumi/pulumi-keycloak"
name: "pulumi-keycloak"
description: "A KeyCloak Pulumi resource package, providing multi-language access to KeyCloak"
url: "https://github.com/pulumi/pulumi-keycloak"
language: "Makefile"
languages: ["Makefile", "Shell", "Go"]
languagePcts: [45, 27, 27]
stars: 52
forks: 8
openIssues: 10
closedIssues: 103
watchers: 18
contributors: 83
recentReleases: 0
createdAt: "2020-02-05T14:47:08Z"
lastCommitAt: "2026-06-29T07:23:58Z"
lastReleaseAt: "2021-01-27T11:56:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 51
maintainers: ["pulumi-provider-automation[bot]", "pulumi-bot", "blampe"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b0bb9af891c1cfe5fa16803c04c3da0367eb0cab2220f7b807ca71ce3ac54fb/pulumi/pulumi-keycloak"
---

# Keycloak Resource Provider

The Keycloak resource provider for Pulumi lets you manage Keycloak resources in your cloud programs. To use
this package, please [install the Pulumi CLI first](https://www.pulumi.com/docs/reference/cli/).

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @pulumi/keycloak

or `yarn`:

    $ yarn add @pulumi/keycloak

### Python

To use from Python, install using `pip`:

    $ pip install pulumi_keycloak

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/pulumi/pulumi-keycloak/sdk/v6

### .NET

To use from .NET, install using `dotnet add package`:

    $ dotnet add package Pulumi.Keycloak

## Configuration

The following configuration points are available:

- `keycloak:clientId` - (Required) The client_id for the client that was created in the "Keycloak Setup" section. 
  Use the admin-cli client if you are using the password grant. Defaults to the environment variable `KEYCLOAK_CLIENT_ID`.
- `keycloak:url` - (Required) - The URL…
