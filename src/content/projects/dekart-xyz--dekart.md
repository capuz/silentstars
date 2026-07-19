---
repo: "dekart-xyz/dekart"
name: "dekart"
description: "Open-source backend for Kepler.gl. Self-hosted alternative to CARTO and Foursquare Studio."
readmeQualityOk: true
url: "https://github.com/dekart-xyz/dekart"
homepage: "https://dekart.xyz"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [63, 33]
topics: ["athena", "bigquey", "deck-gl", "gis-platform", "keplergl", "maps", "snowflakedb", "spatial-analysis", "vizualisation", "webgl"]
stars: 386
forks: 54
openIssues: 34
closedIssues: 44
watchers: 11
contributors: 11
recentReleases: 0
createdAt: "2020-12-31T06:36:28Z"
lastCommitAt: "2026-07-19T06:13:23Z"
lastReleaseAt: "2022-01-14T06:44:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 36
maintainers: ["delfrrr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/325733195/b4ad7906-ff71-4ea9-a181-94f8f6cfd081"
discussionCount: 11
---

<h1 align="center">Dekart</h1>
  <h3>Backend for Kepler.gl with SQL connectors and MCP</h3>
</div>

<br/>

<br/>
</div>

## Quick Start

```sh
docker run -p 8080:8080 dekartxyz/dekart
```

[Deployment Options](https://dekart.xyz/docs/self-hosting/docker/?ref=github)

### Optional agentic setup with Claude/Codex

```sh
pip install geosql && geosql       # install Claude/Codex skill
pip install dekart-cli && dekart init  # install Dekart CLI
```

Then ask Claude or Codex to build a map from your data.

## Map Examples

[BigQuery](https://dekart.xyz/docs/about/overture-maps-examples/)
| [Snowflake](https://dekart.xyz/docs/about/snowflake-kepler-gl-examples/)
| [Wherobots](https://dekart.xyz/docs/usage/wherobots-sql-tutorial/)

## Features

* Connect to Postgres, BigQuery, Snowflake, Wherobots, and more
* Create live maps with Claude and Codex agents
* Improve agent accuracy 4x with maps
* Share private maps with links
* SSO: Google OAuth, Keycloak, AWS Cognito, Google IAP

## How it works

Dekart is a self-hosted backend for Kepler.gl, built with Golang and React. It connects to your data warehouse and exposes MCP, enabling agents to create maps and improve accuracy on geospatial…
