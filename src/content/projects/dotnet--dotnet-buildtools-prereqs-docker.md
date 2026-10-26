---
repo: "dotnet/dotnet-buildtools-prereqs-docker"
name: "dotnet-buildtools-prereqs-docker"
description: "Used to maintain the Docker images hosted at the mcr.microsoft.com/dotnet-buildtools/prereqs image repository"
readmeQualityOk: true
url: "https://github.com/dotnet/dotnet-buildtools-prereqs-docker"
language: "Dockerfile"
languages: ["Dockerfile", "PowerShell", "Shell"]
languagePcts: [53, 22, 20]
stars: 88
forks: 118
openIssues: 38
closedIssues: 251
watchers: 42
contributors: 469
recentReleases: 0
createdAt: "2018-01-24T19:45:48Z"
lastCommitAt: "2026-10-26T09:17:30Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 52
maintainers: ["am11", "dkurepa", "dotnet-renovate-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/84b88b8d5e630ee1982ecf91e3cf813fe0f3ae6c28e132141189aa559aa9bf52/dotnet/dotnet-buildtools-prereqs-docker"
---

# Dockerfiles for Building and Testing the .NET Product

The Dockerfiles in this repository are used for building and testing the .NET product. They are intended for the use of the .NET engineering team and not supported. Feel free to use or contribute to these Dockerfiles if they are useful to you.

The Dockerfiles establish build and test environments for supported Linux and Windows distributions. Teams reference these images from their build and test pipelines.

The images are provided and removed according to [Prereq container image lifecycle](https://github.com/dotnet/dotnet-buildtools-prereqs-docker/blob/HEAD/lifecycle.md).

For any questions, please feel free to open an [issue](https://github.com/dotnet/dotnet-buildtools-prereqs-docker/issues) and mention [@dotnet/dotnet-docker-reviewers](https://github.com/orgs/dotnet/teams/dotnet-docker-reviewers).

## Where are the published images

The images produced from the Dockerfiles in this repository are published to the `mcr.microsoft.com/dotnet-buildtools/prereqs` container repository.

- [Latest tags](https://github.com/dotnet/versions/blob/main/build-info/docker/image-info.dotnet-dotnet-buildtools-prereqs-docker-main.json)
-…
