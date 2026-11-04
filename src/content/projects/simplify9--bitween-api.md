---
repo: "simplify9/Bitween-api"
name: "Bitween-api"
description: "Open-source integration middleware platform for data exchange across protocols and formats"
readmeQualityOk: true
url: "https://github.com/simplify9/Bitween-api"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [64, 36]
topics: ["api", "bitween", "dotnet", "open-source", "rabbitmq"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 14
recentReleases: 10
createdAt: "2020-08-08T19:11:21Z"
lastCommitAt: "2026-11-04T08:03:32Z"
lastReleaseAt: "2026-10-12T08:12:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 99
undervaluedScore: 83
maintainers: ["hamzahalq", "MusaMisto"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8a4dae03cf3d77c2d82ff54bcaba93df6e783a74330d795db100eefacb7c6c1/simplify9/Bitween-api"
---

# Bitween

Bitween is a self-hosted integration platform. It takes business documents in from partners, HTTP calls, message brokers, databases and scheduled pulls. It validates, transforms and delivers them, and keeps a searchable record of every exchange.

One .NET 10 service hosts everything: the REST API, the partner-facing gateway endpoints, background processing, the scheduler and the React admin UI.

> These docs are written from the source code as of 11 September 2026. They replace the earlier README and `docs/` pages, which described an older version of Bitween.

## What Bitween does

- **Many ways in.** Partners call an API gateway. Other systems publish to Bitween's bus, or to their own RabbitMQ or Amazon SQS broker. Scheduled jobs pull from HTTP APIs, S3, Azure Blob, SFTP/FTP, POP3 mailboxes and databases. Aggregations roll finished exchanges up on a schedule.
- **One pipeline.** Every message becomes an *exchange* that runs through the same stages: filter, map, deliver, route the response.
- **Adapters for each stage.** Built-in adapters cover HTTP, S3, Azure Blob, SFTP/FTP, POP3 and SMTP, plus a visual rules-based mapper for JSON and XML. Anything else can be a custom…
