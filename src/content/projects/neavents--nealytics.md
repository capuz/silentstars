---
repo: "neavents/nealytics"
name: "nealytics"
description: "This is highly specialized and blazingly fast analytics engine for ClickHouse DB. It brings a lot of extensibility to the table."
readmeQualityOk: true
url: "https://github.com/neavents/nealytics"
language: "C#"
languages: ["C#"]
languagePcts: [97]
topics: ["analytics", "single-binary", "tracking", "open-source", "tools"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-05-22T17:45:26Z"
lastCommitAt: "2026-10-03T22:04:38Z"
lastReleaseAt: "2026-08-15T12:49:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 48
maintainers: ["polatefekaya"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc01cef0b2db990580aefde88c05fed09809ca97ff597a24abfd1f7b7369e941/neavents/nealytics"
---

# Nealytics

High throughput telemetry engine built on .NET 10 and ClickHouse. Ships as a single self contained binary. Source generated JSON, no reflection on the hot path, and no garbage collection pressure where it matters.

Built this because I wanna use collected data to show my tenants their analytics, I looked up some other tools but none of them offered what I want. the most closest one is TinyBird, good project but I don't wanna pay anything while I can make similar myself. And this an open source project so anyone can benefit from this. 

This service is so fast and very easy to configure. Nealytics is one binary, one config file, one ClickHouse instance.

---

## Get it running

### Docker (fastest way)

```bash
git clone https://github.com/neavents/nealytics.git
cd nealytics
```

Open [`docker-compose.yml`](https://github.com/neavents/nealytics/blob/HEAD/docker-compose.yml) and change the JWT key to something real:

```
TelemetryEngine__JwtSymmetricKey=replace_this_please
```

Then:

```bash
docker compose up -d
```

That's it. ClickHouse starts, the schema gets created automatically from…
