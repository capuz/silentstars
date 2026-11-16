---
repo: "Longado/ontopoc"
name: "ontopoc"
description: "Ontology tool for MCP / Claude: draft, check, and confirm ontologies from business data. Schema work ahead of a knowledge graph or semantic layer."
originalDescription: "Ontology tool for MCP / Claude: draft, check, and confirm ontologies from business data. Schema work ahead of a knowledge graph or semantic layer."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Longado/ontopoc"
homepage: "https://longado.github.io/ontopoc/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [71, 26]
topics: ["evidence", "llm-agents", "ontology", "python", "human-in-the-loop", "nhtsa", "data-quality", "knowledge-graph", "ontology-engineering", "mcp"]
stars: 181
forks: 17
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 2
recentReleases: 0
createdAt: "2026-08-29T01:47:28Z"
lastCommitAt: "2026-11-16T04:19:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 27
maintainers: ["Longado"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1350183888/d0e4a00a-4221-4594-bbac-0e1684ae2f72"
---

OntoPoc is still in development and has no users beyond its author. The current main line is a team application (page root `/`): upload spreadsheets or connect read-only to PostgreSQL / MySQL, build datasets and pipelines, and create object types, relationships, views, behaviors, and derived properties from the data. Each item is checked by code against the data, confirmed by another builder, and the data version at the time of confirmation is recorded. Q&A, dashboards, and agents use only confirmed definitions. When the data changes, affected definitions return to “needs review,” and questions that depend on them are refused, with the item named and the person who can confirm it identified.

## Team application

| Section | What it does |
|---|---|
| Accounts and permissions | Local accounts with three roles (admin, builder, viewer), server-side sessions. Admins can restrict people by object type, restrict people by row (allowlist only), and keep a column's values from being sent to the model |
| Data | Datasets: upload CSV / Excel, update or overwrite by primary key, each time creating a new version. Data sources: read-only connections to PostgreSQL and MySQL, with optional…
