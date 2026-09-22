---
repo: "tosumitdhaka/trishul-ram"
name: "trishul-ram"
description: "🔱 Lightweight, container-native Python daemon that moves and transforms telecom data (PM/FM/Logs) across protocols."
readmeQualityOk: true
url: "https://github.com/tosumitdhaka/trishul-ram"
homepage: "https://tosumitdhaka.github.io/trishul-ram/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["alerts", "asn1", "azure-blob", "clickhouse", "elasticsearch", "fastapi", "gcs", "javascript", "kafka", "plugins"]
stars: 5
forks: 1
openIssues: 6
closedIssues: 17
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-04-14T16:50:40Z"
lastCommitAt: "2026-09-22T08:45:00Z"
lastReleaseAt: "2026-09-16T12:19:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 51
maintainers: ["tosumitdhaka"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b731f8d7b07f11123e15a898fb8400c61cd6437df02daba57e3c1c235a47cfc/tosumitdhaka/trishul-ram"
---

# TRAM — 🔱 Trishul Real-time Aggregation & Mediation

> A production-ready pipeline daemon for telecom data integration.
> Define your data flows in YAML. TRAM runs them — on a schedule, continuously, or on demand.

---

## What problem does it solve?

Telecom networks produce data in dozens of formats across dozens of protocols — PM counters over SFTP, fault events over SNMP, streaming telemetry over gNMI, logs over syslog, CDRs over CORBA. Getting that data into your analytics stack (OpenSearch, Kafka, InfluxDB, ClickHouse, S3) typically means writing and maintaining bespoke glue scripts for each source-sink pair.

**TRAM replaces that glue.** You write a pipeline YAML that says "poll this SFTP path every 5 minutes, parse the CSV, normalize the fields, and publish to Kafka" — TRAM handles the scheduling, error handling, retries, dead-lettering, and observability.

---

## Use Cases

### PM Data Collection (Performance Management)

Poll NE SFTP servers for PM CSV/XML exports, normalize field names, filter low-quality rows, and forward to Kafka or OpenSearch for real-time dashboards.

```yaml
source:
  type: sftp
  host: ${NE_HOST}
  remote_path: /export/pm/
  file_pattern:…
