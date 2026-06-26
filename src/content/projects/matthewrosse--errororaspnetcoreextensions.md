---
repo: "matthewrosse/ErrorOrAspNetCoreExtensions"
name: "ErrorOrAspNetCoreExtensions"
description: "Enhance the ErrorOr library with a collection of extension methods designed to simplify matching between success and error states, thereby improving the developer experience when handling discriminated unions in ASP.NET Core applications."
url: "https://github.com/matthewrosse/ErrorOrAspNetCoreExtensions"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 15
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-06-21T00:43:27Z"
lastCommitAt: "2026-06-26T23:40:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 37
maintainers: ["matthewrosse"]
openGraphImageUrl: "https://opengraph.githubassets.com/d816a004bf90522821089e58964176f4396604cd21551a47419814b5152eb5c4/matthewrosse/ErrorOrAspNetCoreExtensions"
---

# ErrorOrAspNetCoreExtensions 🔥

A collection of extension methods designed
to reduce the amount of boilerplate code 🥱 needed
when returning appropriate HTTP responses.

Significantly improves the developer experience of using discriminated unions
in ASP.NET Core applications 😎

> [!WARNING]
> Version 2.0.0 introduces breaking changes, i.e. problemDetails.Title property is now created from error.Code and problemDetails.Detail is created from error.Description.

## Table of Contents

- [Installation](#installation)
- [Registering problem details services (optional, but recommended)](#registering-problem-details-services-optional-but-recommended)
- [Usage](#usage)
  - [ToOk extension methods](#took-extension-methods)
  - [ToCreated extension methods](#tocreated-extension-methods)
  - [ToNoContent extension method](#tonocontent-extension-method)
  - [ToFileStream extension method](#tofilestream-extension-method)
- [Issues](#issues)
- [License](#license)

## Installation

Via dotnet cli:

```shell
dotnet add package ErrorOrAspNetCoreExtensions
```

Or via package manager console:

```shell
Install-Package ErrorOrAspNetCoreExtensions
```

## Registering problem details services…
