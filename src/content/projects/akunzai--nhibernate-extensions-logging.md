---
repo: "akunzai/NHibernate.Extensions.Logging"
name: "NHibernate.Extensions.Logging"
description: "Use Microsoft.Extensions.Logging as NHibernate logging provider"
readmeQualityOk: true
url: "https://github.com/akunzai/NHibernate.Extensions.Logging"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["nhibernate", "logging", "extension"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2018-01-02T07:28:46Z"
lastCommitAt: "2026-08-05T06:07:17Z"
lastReleaseAt: "2025-02-01T06:29:43Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 70
maintainers: ["akunzai", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/be842f3e503963c2fa808fce60d12df203a9c0b684d7fad82693d4dc61d32190/akunzai/NHibernate.Extensions.Logging"
---

# NHibernate.Extensions.Logging

[build]: https://github.com/akunzai/NHibernate.Extensions.Logging/actions/workflows/build.yml
[build-badge]: https://github.com/akunzai/NHibernate.Extensions.Logging/actions/workflows/build.yml/badge.svg
[codecov]: https://codecov.io/gh/akunzai/NHibernate.Extensions.Logging
[codecov-badge]: https://codecov.io/gh/akunzai/NHibernate.Extensions.Logging/branch/main/graph/badge.svg?token=OQLZMRDOTM
[nuget]: https://www.nuget.org/packages/NHibernate.Extensions.Logging/
[nuget-badge]: https://img.shields.io/nuget/v/NHibernate.Extensions.Logging.svg?style=flat-square

Use Microsoft.Extensions.Logging as NHibernate logging provider

## Installation

```shell
dotnet add package NHibernate.Extensions.Logging
```

## Usage

Console App

```csharp
// ...
services.AddSingleton<ISessionFactory>(resolver =>
{
    var env = resolver.GetRequiredService<IHostEnvironment>();
    if (env.IsDevelopment())
    {
        var loggerFactory = resolver.GetRequiredService<Microsoft.Extensions.Logging.ILoggerFactory>();
        loggerFactory.UseAsNHibernateLoggerProvider();
    }
    // ...
    // return ISessionFactory implementation
});
```

ASP.NET Core

```csharp
public…
