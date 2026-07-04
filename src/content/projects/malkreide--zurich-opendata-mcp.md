---
repo: "malkreide/zurich-opendata-mcp"
name: "zurich-opendata-mcp"
description: "MCP Server für Open Data der Stadt Zürich – 20 Tools für CKAN, Geodaten, Gemeinderat, Tourismus, SPARQL und Echtzeitdaten (Wetter, Luft, See, Parking, ÖV). 6 APIs, 6 Resources."
url: "https://github.com/malkreide/zurich-opendata-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ckan", "education", "geodata", "linked-data", "mcp", "model-context-protocol", "ogd", "open-data", "real-time-data", "smart-city"]
stars: 8
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-02-25T05:27:05Z"
lastCommitAt: "2026-07-04T19:21:07Z"
lastReleaseAt: "2026-06-27T13:55:28Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 59
maintainers: ["malkreide", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecec40010cf25fc20d9a64b298465428644a53d5ccfe2c9c8c3bce536f4f3fea/malkreide/zurich-opendata-mcp"
---

> 🇨🇭 **Part of the [Swiss Public Data MCP Portfolio](https://github.com/malkreide)**

# 🏙️ Zurich Open Data MCP Server

🌐 **English** | **[Deutsch](README.de.md)**

An MCP (Model Context Protocol) server providing AI-powered access to **Open Data from the City of Zurich, Switzerland**.

> Enables Claude, ChatGPT, and other MCP-compatible AI assistants to directly query 900+ datasets, geodata, parliamentary proceedings, council resolutions, tourism data, linked data, and real-time environmental and mobility information from the City of Zurich. **24 Tools, 5 Resources, 6 APIs.**

### Demo

## ✨ Features

### CKAN Open Data (data.stadt-zuerich.ch)
- **`zurich_search_datasets`** – Full-text search with Solr syntax across 900+ datasets
- **`zurich_get_dataset`** – Complete metadata and download URLs for a dataset
- **`zurich_datastore_query`** – Query tabular data directly (filters, sorting)
- **`zurich_datastore_sql`** – SQL queries on the DataStore
- **`zurich_list_categories`** – Browse 19 thematic categories
- **`zurich_list_tags`** – Tag-based thematic search

### Real-Time Environmental Data
- **`zurich_weather_live`** – 🌤️ Current weather (temperature, humidity, pressure,…
