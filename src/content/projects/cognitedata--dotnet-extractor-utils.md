---
repo: "cognitedata/dotnet-extractor-utils"
name: "dotnet-extractor-utils"
description: "Common utilities for developing extractors in .NET"
readmeQualityOk: true
url: "https://github.com/cognitedata/dotnet-extractor-utils"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["ai-low-risk"]
stars: 7
forks: 2
openIssues: 1
closedIssues: 0
watchers: 60
contributors: 22
recentReleases: 0
createdAt: "2020-03-26T13:40:05Z"
lastCommitAt: "2026-10-09T10:50:20Z"
lastReleaseAt: "2020-05-28T07:47:48Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 75
undervaluedScore: 43
maintainers: ["renovate[bot]", "Toshad", "vikramlc-cognite"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef38b98939d72c29bebd7f01943cd2f1e0f48fa7b9d64990b5e6b34ac5a5b8d5/cognitedata/dotnet-extractor-utils"
---

.Net Utilities for Building Cognite Extractors
=======================

A library containing utilities for building extractors in .Net.

[Documentation](https://cognitedata.github.io/dotnet-extractor-utils/index.html)

## Installation

The Cognite Extractor Utils can be downloaded from [NuGet](https://www.nuget.org/packages/Cognite.ExtractorUtils). 

To create a console application and add the library:

Using .NET CLI:
```sh
mkdir NewExtractor
cd NewExtractor
dotnet new console
dotnet add package Cognite.ExtractorUtils
```

## Quickstart

Create a ```config.yml``` file containing the extractor configuration

```yaml
version: 1

logger:
    console:
        level: "debug"

metrics:
    push-gateways:
      - host: "http://localhost:9091"
        job: "extractor-metrics"

cognite:
    project: ${COGNITE_PROJECT}
    # This is for microsoft as IdP, to use a different provider,
    # set implementation: Basic, and use token-url instead of tenant.
    # See the example config for the full list of options.
    idp-authentication:
        # Directory tenant
        tenant: ${COGNITE_TENANT_ID}
        # Application Id
        client-id: ${COGNITE_CLIENT_ID}
        # Client secret…
