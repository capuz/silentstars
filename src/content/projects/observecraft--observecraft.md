---
repo: "observecraft/observecraft"
name: "observecraft"
description: "Open-source, self-hosted observability platform: logs, metrics, traces, dashboards, monitors, incidents and CI visibility in one place, built on OpenTelemetry and ClickHouse."
readmeQualityOk: true
url: "https://github.com/observecraft/observecraft"
homepage: "https://observecraft.com"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [44, 44]
topics: ["apm", "logs", "metrics", "otel", "datadog", "clickhouse", "error-tracking", "incidents", "observability", "ai-gateway"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-25T15:14:08Z"
lastCommitAt: "2026-11-06T12:17:32Z"
lastReleaseAt: "2026-10-31T22:09:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 57
maintainers: ["andreimerfu", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed6603f8fcac0b9886b19b9c6891ee2aab061c2c923d940555d16085b5bd0b79/observecraft/observecraft"
fundingLinks: ["GITHUB:https://github.com/andreimerfu"]
---

**Open-source, self-hosted observability platform: logs, metrics, traces, dashboards, monitors, incidents and CI
visibility in one place, built on OpenTelemetry and ClickHouse.**

[Features](#features) · [Quickstart](#quickstart) · [Architecture](#architecture) · [Configuration](#configuration) ·
[Contributing](#contributing) · [Support](#support-observecraft) · [License](#license)

## Why ObserveCraft?

- **One place for your telemetry.** Search logs, explore traces, chart metrics, alert on all of them and run incidents
  without stitching five tools together.
- **Open standards in, your storage underneath.** Send data with OpenTelemetry or Vector; it lands in ClickHouse
  tables you own and can query directly.
- **Fast and durable.** A Rust (axum) API over ClickHouse columnar storage. The intake writes what it accepts to
  Kafka before answering, so processing restarts and storage outages don't lose data, and live tail streams from it.
- **Enterprise-ready auth from day one.** Password + MFA, SAML 2.0, OpenID Connect, RBAC, application keys and an
  audit trail.
- **Multi-tenant.** Organizations keep their users, SSO, content and telemetry apart; one account can belong to…
