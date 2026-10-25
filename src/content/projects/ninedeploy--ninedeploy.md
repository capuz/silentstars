---
repo: "ninedeploy/ninedeploy"
name: "ninedeploy"
description: "Self-hosted deployment platform. Deploy apps from Git or a container registry in one click — with zero-downtime releases, automatic rollback, managed databases, HTTPS routing, and a full security model."
readmeQualityOk: true
url: "https://github.com/ninedeploy/ninedeploy"
homepage: "http://ninedeploy.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["deploy", "deployment", "deployment-automation", "docker"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-13T16:42:00Z"
lastCommitAt: "2026-10-25T08:40:23Z"
lastReleaseAt: "2026-09-01T11:07:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 52
maintainers: ["ersinkoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e3c36dcc4bf49caedd32b43ed632bda94cd4d5c95e4e5eec1d61273d6bf00d5/ninedeploy/ninedeploy"
---

# NineDeploy

**A self-hosted PaaS for servers you actually own.**

Push a branch, get a healthy container behind TLS. NineDeploy builds from Git or pulls from a
registry, keeps the previous container serving until the new one passes its healthcheck, and manages
the databases, certificates, secrets, backups and access rules around it — from a web panel, a
terminal CLI, a typed SDK, or an AI agent over MCP.

[Website](https://ninedeploy.com) · [Quickstart](https://github.com/ninedeploy/ninedeploy/blob/HEAD/docs/QUICKSTART.md) · [Architecture](https://github.com/ninedeploy/ninedeploy/blob/HEAD/ARCHITECTURE.md) · [Templates](https://ninedeploy.com/templates) · [Changelog](https://github.com/ninedeploy/ninedeploy/blob/HEAD/CHANGELOG.md)

---

## What it is

One Node process, one SQLite file, and the Docker socket on a machine you control. That process
builds your repositories, runs them as containers (or PM2 processes, or Compose stacks), writes
Traefik's routing config, provisions Postgres/MySQL/Redis/Mongo/ClickHouse and friends, encrypts
every secret and every backup it stores, and exposes the whole surface as a REST API that the
dashboard, the CLI, the SDK and the MCP server all…
