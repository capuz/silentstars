---
repo: "agardnerIT/opamp-server-py"
name: "opamp-server-py"
description: "An OpenTelemetry OpAMP server in Python"
readmeQualityOk: true
url: "https://github.com/agardnerIT/opamp-server-py"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["opamp", "opentelemetry", "otel", "otel-collector", "python", "opamp-server"]
stars: 15
forks: 2
openIssues: 12
closedIssues: 118
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2025-04-21T01:41:18Z"
lastCommitAt: "2026-11-11T11:17:48Z"
lastReleaseAt: "2026-11-04T11:27:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 70
maintainers: ["agardnerIT"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f65d7c5c6551d0b8bf8f132245f866f6bdbfc221033dafc9889f160295f3417/agardnerIT/opamp-server-py"
---

# OpAMP Server

OpenTelemetry OpAMP server in Python with FastAPI + Streamlit UI. Optional integration with [Open Policy Agent](https://www.openpolicyagent.org).

This server also lets you:

- Filter collectors by metadata (such as `environment: production`) or by **SQL** (`SELECT * FROM agents WHERE host_arch = 'amd64'`) — see [`docs/sql-agent-queries.md`](https://github.com/agardnerIT/opamp-server-py/blob/HEAD/docs/sql-agent-queries.md)
- Build minimal OTel Collectors (server generates a new `manifest.yaml` which you build with the [OpenTelemetry Collector Builder [OCB]](https://github.com/open-telemetry/opentelemetry-collector/tree/main/cmd/builder))
- Validate connected collectors against OPA compliance policies
- Be driven by **AI agents** — a REST API with a self-documenting OpenAPI schema, an `opampctl` CLI with JSON output, a shared `opamp_client` Python library, and an MCP server with typed tools

Want to learn more about OpAMP? [Read the spec](https://opentelemetry.io/docs/specs/opamp/).

## Architecture

```
┌─────────────────────────┐        ┌─────────────────┐        ┌──────────────┐
│  OTel Collector         │───────▶│  OpAMP Server   │────────│  UI (:8501)  │
│…
