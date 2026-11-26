---
repo: "Indian-Runners/nyx"
name: "nyx"
description: "NYX is an open source platform that encapsulates ElasticSearch and PostGRESQL databases"
readmeQualityOk: true
url: "https://github.com/Indian-Runners/nyx"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["elasticsearch", "postgresql", "platform", "activemq", "jasperreports", "nodered", "docker"]
stars: 17
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 3
createdAt: "2019-07-30T13:54:15Z"
lastCommitAt: "2026-11-26T15:27:09Z"
lastReleaseAt: "2026-11-26T15:27:19Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 66
maintainers: ["snuids"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcb36eefb5bfab8d1261b6b3944e448942d59f5ce3b1f388001e54e70dac971b/Indian-Runners/nyx"
---

# NYX

**NYX is a self-hosted data platform for organizations that collect data in the field.**
It bundles the whole chain — form capture, ingestion, storage, analytics and reporting — into
one Docker Compose stack you can run on-premise or on your own cloud account. You focus on
functionality; the infrastructure (message broker, databases, reverse proxy, pipelines) is
already wired together.

```shell
git clone https://github.com/Indian-Runners/nyx.git
cd nyx/nyx/docker-compose      # host directories are needed first — see below
cp .env.example .env           # set PG_PASSWORD and AMQC_PASSWORD
docker compose up -d
```

Then open `https://localhost/`. The TLS pair is generated on the first start (self-signed, no
step of your own); full prerequisites, including the host directories, are in
[Getting started](#getting-started).

Every deployable state of the stack is tagged and documented in
**[Releases](https://github.com/Indian-Runners/nyx/releases)** — the pinned image versions, what
changed, and what did not move. See
[Tagging this repository](https://github.com/Indian-Runners/nyx/blob/HEAD/docs/operations.md#tagging-this-repository) for how a release is cut.
