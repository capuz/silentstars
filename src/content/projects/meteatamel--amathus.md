---
repo: "meteatamel/amathus"
name: "amathus"
description: "An RSS reader, transformer, and a web API"
readmeQualityOk: true
url: "https://github.com/meteatamel/amathus"
language: "Dart"
languages: ["Dart", "C#"]
languagePcts: [57, 40]
stars: 8
forks: 1
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-01-22T13:34:29Z"
lastCommitAt: "2026-10-24T08:07:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 81
undervaluedScore: 59
maintainers: ["meteatamel"]
openGraphImageUrl: "https://opengraph.githubassets.com/4608768780730978952e1b7c99b1e3b4290ebde5f8ee18155414489ba597ec04/meteatamel/amathus"
---

# Amathus

Amathus reads Cyprus RSS news feeds in Turkish, Greek, and English, transforms them into a common feed format, and exposes them behind a Web API with a cross-platform Flutter client (Web, iOS, Android, macOS).

- **Backend (`Amathus/`)**: Written in **C# 14 / ASP.NET Core (.NET 10.0)** and deployed as 3 Cloud Run microservices (`amathus-reader`, `amathus-converter`, `amathus-web`) on Google Cloud (`events-atamel`).
- **Frontend (`AmathusClient/`)**: Written in **Flutter 3.41 / Dart 3.11** (Material 3) and deployed as a Cloud Run web application (`amathus-client`).

## Architecture

1. **`Amathus.Reader` (`amathus-reader`)**: Invoked every hour (`0 * * * *`) by Cloud Scheduler (`amathus-reader-job`). Fetches the 34 active RSS feeds configured in [`Amathus/Shared/amathussources.json`](https://github.com/meteatamel/amathus/blob/HEAD/Amathus/Shared/amathussources.json) in parallel and uploads raw XML feeds to Cloud Storage (`gs://amathus-events-atamel-bucket`).
2. **`Amathus.Converter` (`amathus-converter`)**: Triggered by Pub/Sub push notifications (`amathus-events-atamel-topic`) on Cloud Storage `OBJECT_FINALIZE` events. Parses and cleans the raw feeds into normalized…
