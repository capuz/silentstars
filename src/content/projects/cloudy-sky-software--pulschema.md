---
repo: "cloudy-sky-software/pulschema"
name: "pulschema"
description: "Pul(umi) schema from OpenAPI specs."
readmeQualityOk: true
url: "https://github.com/cloudy-sky-software/pulschema"
homepage: "https://buttondown.email/css-blog/archive/create-a-pulumi-provider-from-openapi-spec/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["openapi3", "pulumi"]
stars: 19
forks: 4
openIssues: 5
closedIssues: 13
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2022-10-16T04:14:47Z"
lastCommitAt: "2026-08-28T15:27:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 66
maintainers: ["renovate[bot]", "praneetloke", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0100ea42000b359b4c2bd7414aa98abbc3f3e67066783e16405a8e8d5d641bb1/cloudy-sky-software/pulschema"
discussionCount: 1
---

# Pulschema

Pul(umi) schema from API specs. Learn how to generate a provider using this library: https://buttondown.email/css-blog/archive/create-a-pulumi-provider-from-openapi-spec/. This library is the first part required to fully implement a native Pulumi provider purely based on OpenAPI specs. To use the Pulumi schema successfully, you
will need to construct HTTP requests based on the resource inputs given by the user. You should consider
using [`pulumi-provider-framework`](https://github.com/cloudy-sky-software/pulumi-provider-framework) for that.

Use the [template repo](https://github.com/cloudy-sky-software/pulumi-provider-template) to get started quickly.

## What Is This?

This module is a library that can convert an OpenAPI spec to a Pulumi schema spec.
From there, using Pulumi's codegen tools, one can generate the necessary language
SDKs for a provider.

## Features

-   Handles discriminated types
-   Handles `AllOf`, `OneOf`, `AnyOf`
-   Creates a metadata map for resource type tokens that map to CRUD operations
-   Generates schema for Pulumi functions, aka invokes, from `GET` methods
-   Maps path params as required inputs in the resource schema for easier mapping…
