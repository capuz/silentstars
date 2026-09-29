---
repo: "sillsdev/harmony"
name: "harmony"
description: "C# CRDT Library for building offline first apps"
readmeQualityOk: true
url: "https://github.com/sillsdev/harmony"
homepage: "https://www.nuget.org/packages/SIL.Harmony/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["crdt"]
stars: 14
forks: 4
openIssues: 20
closedIssues: 19
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2024-05-07T20:40:06Z"
lastCommitAt: "2026-09-29T10:04:25Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 81
undervaluedScore: 58
maintainers: ["hahn-kev-bot", "hahn-kev", "myieye"]
openGraphImageUrl: "https://opengraph.githubassets.com/67f13bb841f7f04beb46873acfc152690c9502eb74097abfb04d0d7ec94e3ee4/sillsdev/harmony"
fundingLinks: ["CUSTOM:https://www.givedirect.org/donate/?cid=13536&n=&dd1=Language%20Software"]
---

# harmony

A CRDT application library for C#, use it to build offline first applications.

## Install

```sh
dotnet add package SIL.Harmony
```

It's expected that you use Harmony with the .Net IoC container ([IoC intro](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection)) and with EF Core. If you're not familier with that you can take a look at the [Host](https://learn.microsoft.com/en-us/dotnet/core/extensions/generic-host?tabs=hostbuilder) docs. If you're using ASP.NET Core you already have this setup for you.

#### Prerequisites:
* Setup EF Core in your application ([Getting started docs](https://learn.microsoft.com/en-us/ef/core/get-started/overview/first-app?tabs=netcore-cli))
* Setup a Host, the default host setup for ASP.NET Core will work, or a [generic host](https://learn.microsoft.com/en-us/dotnet/core/extensions/generic-host?tabs=hostbuilder) for desktop apps, depending on your app. Alternatively you could create a [`ServiceCollection`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.dependencyinjection.servicecollection?view=net-8.0).

### Configure DbContext
EF Core needs to be told about the entities used by Harmony, for…
