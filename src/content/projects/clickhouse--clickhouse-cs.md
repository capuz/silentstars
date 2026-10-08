---
repo: "ClickHouse/clickhouse-cs"
name: "clickhouse-cs"
description: "Official .NET client for ClickHouse DB"
readmeQualityOk: true
url: "https://github.com/ClickHouse/clickhouse-cs"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 96
forks: 23
openIssues: 38
closedIssues: 92
watchers: 3
contributors: 39
recentReleases: 0
createdAt: "2025-06-27T18:40:19Z"
lastCommitAt: "2026-10-08T10:51:03Z"
lastReleaseAt: "2026-03-03T13:36:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 46
maintainers: ["alex-clickhouse", "polyglotAI-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7806d1a7bbe277d9264b64e19408516aaf3f9f1c75b1dcf27445de7395b5bbab/ClickHouse/clickhouse-cs"
discussionCount: 3
---

## About

Official C# client for [ClickHouse](https://clickhouse.com/). The `ClickHouse.Driver` NuGet package contains two clients:

* **HTTP client**: `ClickHouseClient` and an ADO.NET provider for ORMs. It sends data in the RowBinary format over HTTP(S). Use it for most applications.
* **Native TCP client** (experimental): `ClickHouseTcpClient`. It uses the ClickHouse native protocol and sends data in columnar blocks.

## Documentation

Full documentation is on the ClickHouse website:

* [Overview](https://clickhouse.com/docs/integrations/language-clients/csharp/overview)
* [HTTP client](https://clickhouse.com/docs/integrations/language-clients/csharp/http)
* [Native TCP client](https://clickhouse.com/docs/integrations/language-clients/csharp/tcp)

## Usage examples

We have a wide range of [examples](https://github.com/ClickHouse/clickhouse-cs/blob/HEAD/examples), aiming to cover typical scenarios of client usage. They are grouped by client: [HTTP](https://github.com/ClickHouse/clickhouse-cs/blob/HEAD/examples/Http) and [native TCP](https://github.com/ClickHouse/clickhouse-cs/blob/HEAD/examples/Tcp).

## Choosing a client

| | HTTP | Native TCP |
|---|---|---|
| Status | Stable…
