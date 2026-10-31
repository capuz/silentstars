---
repo: "elixir-lotus/lotus"
name: "lotus"
description: "Embeddable business intelligence engine for Elixir — SQL editor, dashboards, charts, and AI query generation that mount directly in   your Phoenix app."
readmeQualityOk: true
url: "https://github.com/elixir-lotus/lotus"
homepage: "https://hexdocs.pm/lotus/readme.html"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
stars: 85
forks: 10
openIssues: 0
closedIssues: 92
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-08-09T16:40:00Z"
lastCommitAt: "2026-10-31T15:58:21Z"
lastReleaseAt: "2025-09-07T09:54:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 52
maintainers: ["rodloboz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a767cbafdbdfd5954d7f3bcbf25e9f79c4a51a67dfbf56c0f36711d5c5e65de/elixir-lotus/lotus"
---

# Lotus

**The embeddable BI engine for Elixir apps — query editor, dashboards, visualizations, and AI-powered query generation that mount directly in your Phoenix app. SQL and non-SQL data sources behind one pluggable adapter contract. No Metabase. No Redash. No extra infrastructure.**

[Try the live demo](https://demo.lotusbi.com/lotus)

## Why Lotus?

Every app eventually needs analytics, reporting, or an internal SQL tool. The usual options — Metabase, Redash, Grafana — mean another service to deploy, another auth system to sync, another thing to keep running.

Lotus takes a different approach: it mounts inside your Phoenix app. Add the dependency, run a migration, add one line to your router, and you have a full BI interface — query editor, charts, dashboards — running on your existing infrastructure. Read-only by design, production-safe from day one.

And it is not limited to SQL. Every data source is wrapped behind a uniform `Lotus.Source.Adapter` contract, so a Postgres repo, a ClickHouse HTTP endpoint, and an Elasticsearch cluster all run through the same pipeline, the same visibility rules, the same cache, and the same AI assistant.

## See It in Action

[Try the live…
