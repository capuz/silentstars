---
repo: "martincostello/openapi-extensions"
name: "openapi-extensions"
description: "Extensions for Microsoft.AspNetCore.OpenApi"
url: "https://github.com/martincostello/openapi-extensions"
homepage: "https://blog.martincostello.com/whats-new-for-openapi-with-dotnet-9/"
language: "C#"
languages: ["C#"]
languagePcts: [94]
topics: ["aspnetcore", "dotnet", "openapi"]
stars: 98
forks: 3
openIssues: 2
closedIssues: 8
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2024-07-28T13:24:37Z"
lastCommitAt: "2026-06-26T06:46:13Z"
lastReleaseAt: "2026-06-01T13:37:31Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 49
maintainers: ["renovate[bot]", "martincostello", "costellobot"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d23a078bced2a317acd6809e1a1454c3ea5ffdbd30b87d41ffb2c7edcb776ec/martincostello/openapi-extensions"
fundingLinks: ["GITHUB:https://github.com/martincostello", "BUY_ME_A_COFFEE:https://buymeacoffee.com/martincostello"]
---

# OpenAPI Extensions for ASP.NET Core

## Introduction

A NuGet package of extensions for the [Microsoft.AspNetCore.OpenApi][aspnetcore-openapi] package.

Features include:

- Adding examples to OpenAPI operations and schemas.
- Customizing descriptions for:
  - OpenAPI operation parameters and responses;
  - OpenAPI schemas and their properties.
- Adding application URLs to the OpenAPI document.
- Adding OpenAPI schema documentation from XML comments.
- Adding an HTTP endpoint to get OpenAPI documents as YAML.

The library is also designed to be compatible with support for [native AoT][aspnetcore-native-aot] in ASP.NET Core 9.

There is also [a sample application using the library][sample-app].

An overview of the library and how it works can be found on YouTube in this talk from
.NET Conf 2024: [📺 _Extending ASP.NET Core OpenAPI_][dotnet-conf]

## Installation

To install the library from [NuGet][package-download] using the .NET SDK run the following command:

```console
dotnet add package MartinCostello.OpenApi.Extensions
```

## Usage

Below is an example code snippet showing how to use the features of the library:

```csharp
using System.ComponentModel;
using…
