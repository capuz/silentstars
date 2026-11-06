---
repo: "mysticmind/mysticmind-postgresembed"
name: "mysticmind-postgresembed"
description: "Postgres embedded server equivalent including extensions for .Net applications"
readmeQualityOk: true
url: "https://github.com/mysticmind/mysticmind-postgresembed"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["postgres", "embedded", "postgresql", "netcore", "net46", "server", "embed", "pg", "extensions"]
stars: 167
forks: 32
openIssues: 0
closedIssues: 13
watchers: 4
contributors: 13
recentReleases: 0
createdAt: "2017-02-15T17:06:42Z"
lastCommitAt: "2026-11-06T13:19:51Z"
lastReleaseAt: "2022-08-30T15:52:43Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 100
undervaluedScore: 24
maintainers: ["mysticmind"]
openGraphImageUrl: "https://opengraph.githubassets.com/17270e2305d4059b653a40b3932f09337eed74d5a29f2fbb0d8d9abf91669ce1/mysticmind/mysticmind-postgresembed"
---

# MysticMind.PostgresEmbed _Postgres embedded database equivalent for .Net applications_ [](https://github.com/mysticmind/mysticmind-postgresembed/actions/workflows/ci.yaml) [](https://www.nuget.org/packages/MysticMind.PostgresEmbed/)

Run a real PostgreSQL server, extensions included, from .NET code and tests on Windows, Linux (glibc and Alpine/musl) and macOS, on both x64 and arm64. No Docker and no local Postgres install required.

By default, this library uses the minimal binaries published by [zonkyio/embedded-postgres-binaries](https://github.com/zonkyio/embedded-postgres-binaries). They are much smaller than the official downloads. A list of all available Postgres versions is here: https://mvnrepository.com/artifact/io.zonky.test.postgres/embedded-postgres-binaries-bom. Click a version to see the platforms it is published for.

The library detects the OS and CPU architecture and downloads the matching binaries.

If you have benefitted from this library and it has saved you a bunch of time, please feel free to sponsor my work!<br>

## Requirements

- .NET 8 or later (the package targets .NET 8, 9, 10 and 11)
- Windows x64, Linux x64/arm64 (glibc or musl), macOS x64/arm64
-…
