---
repo: "david-streamlio/pulsar-nifi-bundle"
name: "pulsar-nifi-bundle"
description: "NiFi Processor for Apache Pulsar"
readmeQualityOk: true
url: "https://github.com/david-streamlio/pulsar-nifi-bundle"
language: "Java"
languages: ["Java"]
languagePcts: [97]
stars: 22
forks: 21
openIssues: 14
closedIssues: 52
watchers: 2
contributors: 10
recentReleases: 2
createdAt: "2020-10-02T15:30:02Z"
lastCommitAt: "2026-10-26T18:06:05Z"
lastReleaseAt: "2026-08-30T16:22:34Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 76
maintainers: ["david-streamlio", "dependabot[bot]", "jselvareef"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7bde425f9deba6870ecc051c9c0b4e5dfb4b2b7309a022ff8be381bf378f00d/david-streamlio/pulsar-nifi-bundle"
---

# Apache NiFi - Processor for Apache Pulsar

## Compatibility

| Bundle version | NiFi | Pulsar client | Java |
|---|---|---|---|
| `2.11.0.1` | 2.11.0 | 4.2.4 | 21 |
| `2.11.0` | 2.11.0 | 4.2.4 | 21 |
| `2.10.0` | 2.10.0 | 4.2.4 | 21 |
| `2.9.0` | 2.9.0 | 4.2.2 | 21 |
| `2.1.0` | 2.1.0 | 3.3.7 | 21 |

> **Pulsar major bump in `2.9.0`:** this release line moves the Pulsar client
> from `3.x` to `4.x` (3.3.7 → 4.2.2). Consumers who must stay on the Pulsar 3.x
> client should pin to the `2.1.0` release line.

The bundle version tracks the NiFi platform version it is built for; each release
line targets one Pulsar client major. See [VERSIONING.md](https://github.com/david-streamlio/pulsar-nifi-bundle/blob/HEAD/VERSIONING.md) for the
full scheme, branching model, and release process.

Release notes live in [`docs/release-notes/`](https://github.com/david-streamlio/pulsar-nifi-bundle/blob/HEAD/docs/release-notes/). `2.11.0.1` fixes two defects in
features `2.11.0` introduced — see [its notes](https://github.com/david-streamlio/pulsar-nifi-bundle/blob/HEAD/docs/release-notes/2.11.0.1.md). `2.11.0` is the
platform bump…
